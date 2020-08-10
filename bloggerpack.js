const {src, dest, watch, series, parallel} = require('gulp');
const fs = require('fs');
const path = require('path');
const through = require('through2');
const mergeOptions = require('merge-options');
const trimNewlines = require('trim-newlines');
const stripIndent = require('strip-indent');
const stripCssComments = require('strip-css-comments');
const del = require('del');

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');
const log = require('gulplog');
const debug = require('gulp-debug');
const header = require('gulp-header');
const concat = require('gulp-concat');

const stylelint = require('gulp-stylelint');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');

const eslint = require('gulp-eslint');
const browserify = require('browserify');
const terser = require('gulp-terser');

const nunjucks = require('nunjucks');
sass.compiler = require('node-sass');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const CONFIG = require(path.join(process.cwd(), 'bloggerpack.config.js'));

const Path = {
  TEMPLATE_SRC: path.parse(CONFIG.template.src),
  TEMPLATE_DIST: path.parse(CONFIG.template.dist),
  SKIN_SRC: path.parse(CONFIG.skin.src),
  SKIN_DIST: path.parse(CONFIG.skin.dist),
  SASS_SRC: path.parse(CONFIG.sass.src),
  SASS_DIST: path.parse(CONFIG.sass.dist),
  JS_SRC: path.parse(CONFIG.js.src),
  JS_DIST: path.parse(CONFIG.js.dist)
};

const Template = {
  SRC: CONFIG.template.src,
  OUTPUT: Path.TEMPLATE_DIST.base,
  DEST: Path.TEMPLATE_DIST.dir,
  TAG_START: '::template::',
  TAG_END: '::endtemplate::'
};

const Skin = {
  SRC: CONFIG.skin.src,
  OUTPUT: Path.SKIN_DIST.base,
  DEST: Path.SKIN_DIST.dir,
  TAG_START: '::skin::',
  TAG_END: '::endskin::'
};

const Sass = {
  SRC: CONFIG.sass.src,
  OUTPUT: Path.SASS_DIST.base,
  DEST: Path.SASS_DIST.dir,
  TAG_START: '::sass::',
  TAG_END: '::endsass::'
};

const Js = {
  SRC: CONFIG.js.src,
  OUTPUT: Path.JS_DIST.base,
  DEST: Path.JS_DIST.dir,
  TAG_START: '::js::',
  TAG_END: '::endjs::'
};

const ExtractHeader =
'/*# ==========================================================================\n' +
'  # Extracted from: <filepath>\n' +
'  # ========================================================================== */' +
'\n\n';

const ExtractSkin = {
  SRC: ['**/*.njk', '!**/node_modules/**/*.njk'],
  OUTPUT: 'auto-extract.css',
  DEST: Path.SKIN_SRC.dir,
  HEADER: ExtractHeader,
  FOOTER: '\n'
};

const ExtractSass = {
  SRC: ['**/*.njk', '!**/node_modules/**/*.njk'],
  OUTPUT: '_auto-extract.scss',
  DEST: Path.SASS_SRC.dir,
  HEADER: ExtractHeader,
  FOOTER: '\n'
};

const ExtractJs = {
  SRC: ['**/*.njk', '!**/node_modules/**/*.njk'],
  OUTPUT: 'auto-extract.js',
  DEST: Path.JS_SRC.dir,
  HEADER: ExtractHeader,
  FOOTER: '\n'
};

const Banner = {
  TEXT: stripIndent(trimNewlines.start(trimNewlines.end(
    fs.readFileSync(CONFIG.configFile.banner, 'utf8')
  ))) + '\n\n',
  DATA: {
    data: require(path.join(process.cwd(), CONFIG.configFile.data)),
    pkg: require(path.join(process.cwd(), 'package.json')),
    bloggerpack: require('./package.json')
  }
};

/**
 * ------------------------------------------------------------------------
 * Task Functions
 * ------------------------------------------------------------------------
 */

function extract(opts) {
  var defaults = {
    start: '',
    end: '',
    header: '',
    footer: ''
  };
  opts = mergeOptions(defaults, opts);
  return through.obj(function (file, enc, cb) {
    var contents = file.contents.toString('utf8');
    var pattern = new RegExp(`${opts.start}((.|\\n)*?)${opts.end}`);
    var extract = pattern.exec(contents);
    extract = extract ? opts.header + trimNewlines.start(trimNewlines.end(extract[1])) + opts.footer : '';
    extract = stripIndent(extract);
    file.contents = new Buffer.from(extract);

    var relativePath = path.relative(process.cwd(), file.path);
    var newContents = file.contents.toString('utf8');
    var replace = newContents.replace(/<filepath>/g, relativePath);
    file.contents = new Buffer.from(replace);

    if (file.contents.length !== 0) {
      return cb(null, file);
    } else {
      return cb(null);
    }
  });
}

function templateExtract(content) {
  var pattern = new RegExp(`${Template.TAG_START}((.|\\n)*?)${Template.TAG_END}`);
  content = pattern.exec(content);
  content = content ? content[1] : '';
  content = trimNewlines.start(content);
  content = trimNewlines.end(content);
  content = stripIndent(content);

  return content + '\n';
}

function skinExtract(content) {
  var pattern = new RegExp(`${Skin.TAG_START}((.|\\n)*?)${Skin.TAG_END}`);
  content = pattern.exec(content);
  content = content ? content[1] : '';
  content = trimNewlines.start(content);
  content = trimNewlines.end(content);
  content = stripIndent(content);

  return content;
}

function sassExtract(content) {
  var pattern = new RegExp(`${Sass.TAG_START}((.|\\n)*?)${Sass.TAG_END}`);
  content = pattern.exec(content);
  content = content ? content[1] : '';
  content = trimNewlines.start(content);
  content = trimNewlines.end(content);
  content = stripIndent(content);

  return content;
}

function jsExtract(content) {
  var pattern = new RegExp(`${Js.TAG_START}((.|\\n)*?)${Js.TAG_END}`);
  content = pattern.exec(content);
  content = content ? content[1] : '';
  content = trimNewlines.start(content);
  content = trimNewlines.end(content);
  content = stripIndent(content);

  return content;
}

function templateCompile(opts) {
  var defaults = {
    extractAssetModule: false
  };
  opts = mergeOptions(defaults, opts);
	return through.obj(function (file, enc, cb) {
    var njkOpts = {
      autoescape: false,
      trimBlocks: true,
      lstripBlocks: true,
      watch: false,
      noCache: false
    };
		var njkContext = {
      data: JSON.parse(fs.readFileSync(CONFIG.configFile.data, 'utf8')),
      pkg: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8')),
      bloggerpack: JSON.parse(fs.readFileSync('./package.json', 'utf8'))
    };
    var contents = templateExtract(file.contents.toString('utf8'));

    var compile = new nunjucks.Environment([
      new nunjucks.FileSystemLoader(file.base),
      new nunjucks.NodeResolveLoader()
    ], njkOpts);

    compile.addFilter('template', function (str) {
      str = templateExtract(str);
      return str;
    });

    function TemplateExtension() {
      this.tags = ['template'];

      this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);

        return new nodes.CallExtension(this, 'run', args);
      };

      this.run = function (environment, file, kwargs) {
        var content = new nunjucks.runtime.SafeString(compile.render(file, environment.ctx));

        var header = ExtractHeader.replace(/<filepath>/g, file);
        var moduleSkin = skinExtract(content);
        var moduleSass = sassExtract(content);
        var moduleJs = jsExtract(content);

        moduleSkin = moduleSkin !== '' ? '\n' + header + moduleSkin + '\n' : '';
        moduleSass = moduleSass !== '' ? '\n' + header + moduleSass + '\n' : '';
        moduleJs = moduleJs !== '' ? '\n' + header + moduleJs + '\n' : '';

        if (opts.extractAssetModule === true) {
          if (kwargs) {
            if (kwargs.type === 'module') {
              fs.appendFileSync(path.join(ExtractSkin.DEST, ExtractSkin.OUTPUT), moduleSkin);
              fs.appendFileSync(path.join(ExtractSass.DEST, ExtractSass.OUTPUT), moduleSass);
              fs.appendFileSync(path.join(ExtractJs.DEST, ExtractJs.OUTPUT), moduleJs);
            }
          }
        }
        return templateExtract(content);
      }
    }
    compile.addExtension('TemplateExtension', new TemplateExtension());

    function AssetExtension() {
      this.tags = ['asset'];

      this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);

        if (args.children.length > 0)
          return new nodes.CallExtension(this, 'fileTag', args);

        var body = parser.parseUntilBlocks('endasset');
        parser.advanceAfterBlockEnd();

        return new nodes.CallExtension(this, 'blockTag', args, [body]);
      };

      this.fileTag = function (environment, file, kwargs) {
        var content = new nunjucks.runtime.SafeString(compile.render(file, environment.ctx));
        content = trimNewlines.start(content);
        content = trimNewlines.end(content);
        content = stripIndent(content);

        if (kwargs) {
          if (kwargs.tag_start && kwargs.tag_end) {
            return `${kwargs.tag_start}
${content}
${kwargs.tag_end}\n`;
          }
          if (kwargs.type === 'skin') {
            return `<b:if cond='!data:view.isLayoutMode'>
<b:skin>
<![CDATA[
${content}
]]>
</b:skin>
</b:if>\n`;
          }
          if (kwargs.type === 'style') {
            return `<b:if cond='!data:view.isLayoutMode'>
<style>
${content}
</style>
</b:if>\n`;
          }
          if (kwargs.type === 'script') {
            return `<script>
//<![CDATA[
${content}
//]]>
</script>\n`;
          }
        } else {
          return `${content}\n`;
        }
      } // fileTag

      this.blockTag = function (environment, body) {
        var body = body();
        body = trimNewlines.start(body);
        body = trimNewlines.end(body);
        body = stripIndent(body);

        body = `${body}\n`;

        return new nunjucks.runtime.SafeString(body);
      }
    }
    compile.addExtension('AssetExtension', new AssetExtension());

    function ParentExtension() {
      this.tags = ['parent'];

      this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);

        var body = parser.parseUntilBlocks('endparent');
        parser.advanceAfterBlockEnd();

        return new nodes.CallExtension(this, 'run', args, [body]);
      };

      this.run = function (environment, body) {
        var body = body();
        body = templateExtract(body);
        return new nunjucks.runtime.SafeString(body);
      }
    }
    compile.addExtension('ParentExtension', new ParentExtension());

    try {
      compile.renderString(contents, njkContext, function (err, res) {
        if (err) {
          if (opts.extractAssetModule === false) console.log(err);
          return cb();
        }
        file.contents = new Buffer.from(res);
        return cb(null, file);
      });
    } catch (err) {
      console.log(err);
      return cb();
    }
	});
}

function trimFinalNewlines() {
  return through.obj(function (file, enc, cb) {
    var contents = file.contents.toString('utf8');
    contents = trimNewlines.end(contents);
    file.contents = new Buffer.from(contents);

    return cb(null, file);
  });
}

function stripSkinComments(opts) {
  var defaults = {
    preserve: /^!/,
    whitespace: true
  };
  opts = mergeOptions(defaults, opts);
  return through.obj(function (file, enc, cb) {
    var contents = file.contents.toString('utf8');
    contents = stripCssComments(contents, {
      preserve: opts.preserve,
      whitespace: opts.whitespace
    });
    file.contents = new Buffer.from(contents);

    return cb(null, file);
  });
}

const Tasks = {
  cleanTemplateCompile: function (cb) {
    del.sync([path.join(Template.DEST, Template.OUTPUT)]);
    cb();
  },
  cleanSkinExtract: function (cb) {
    del.sync([path.join(ExtractSkin.DEST, ExtractSkin.OUTPUT)]);
    cb();
  },
  cleanSkinCompile: function (cb) {
    del.sync([path.join(Skin.DEST, Skin.OUTPUT)]);
    cb();
  },
  cleanSassExtract: function (cb) {
    del.sync([path.join(ExtractSass.DEST, ExtractSass.OUTPUT)]);
    cb();
  },
  cleanSassCompile: function (cb) {
    del.sync([path.join(Sass.DEST, Sass.OUTPUT)]);
    cb();
  },
  cleanJsExtract: function (cb) {
    del.sync([path.join(ExtractJs.DEST, ExtractJs.OUTPUT)]);
    cb();
  },
  cleanJsCompile: function (cb) {
    del.sync([path.join(Js.DEST, Js.OUTPUT)]);
    cb();
  },
  skinExtract: function () {
    var extractOpts = {
      start: Skin.TAG_START,
      end: Skin.TAG_END,
      header: ExtractSkin.HEADER,
      footer: ExtractSkin.FOOTER
    };
    return src([...ExtractSkin.SRC], {allowEmpty: true})
      .pipe(extract(extractOpts))
      .pipe(concat(ExtractSkin.OUTPUT))
      .pipe(dest(ExtractSkin.DEST, {overwrite: true}));
  },
  skinLint: function () {
    return src([
        path.join(Path.SKIN_SRC.dir, '/**/*.css'),
        '!' + Skin.SRC
      ], {allowEmpty: true})
      .pipe(stylelint({
        configFile: CONFIG.configFile.stylelint,
        ignoreDisables: false,
        reportNeedlessDisables: false,
        reporters: [
          {
            formatter: 'string',
            console: true
          }
        ],
        reportOutputDir: '',
        debug: false,
        failAfterError: true
      }));
  },
  skinCompile: function () {
    return src(Skin.SRC)
      .pipe(stripSkinComments({preserve: false, whitespace: true}))
      .pipe(replace(/\n/g, ''))
      .pipe(replace(/;/g, ';\n\n'))
      .pipe(postcss([
        atImport({
          skipDuplicates: false
        }),
        autoprefixer({
          cascade: false
        })
      ]))
      .pipe(replace(/\/\*[^*]*Extracted\sfrom:[^*]*\*\/\n\n/g, ''))
      .pipe(replace(/\/\*[^*]*Extracted\sfrom:[^*]*\*\/\n/g, ''))
      .pipe(replace(/\/\* Skin-in-Template is empty \*\/\n\n/g, ''))
      .pipe(replace(/\/\* Skin-in-Template is empty \*\//g, ''))
      .pipe(header(Banner.TEXT, Banner.DATA))
      .pipe(rename(Skin.OUTPUT))
      .pipe(trimFinalNewlines())
      .pipe(dest(Skin.DEST, {overwrite: true}));
  },
  skinExtractEmpty: function (cb) {
    var file = path.join(ExtractSkin.DEST, ExtractSkin.OUTPUT);
    if (fs.existsSync(file) !== true) {
      fs.writeFileSync(file, '/* Skin-in-Template is empty */\n');
    }
    cb();
  },
  sassExtract: function () {
    var extractOpts = {
      start: Sass.TAG_START,
      end: Sass.TAG_END,
      header: ExtractSass.HEADER,
      footer: ExtractSass.FOOTER
    };
    return src([...ExtractSass.SRC], {allowEmpty: true})
      .pipe(extract(extractOpts))
      .pipe(concat(ExtractSass.OUTPUT))
      .pipe(dest(ExtractSass.DEST, {overwrite: true}));
  },
  sassLint: function () {
    return src(path.join(Path.SASS_SRC.dir, '/**/*.scss'), {allowEmpty: true})
      .pipe(stylelint({
        configFile: CONFIG.configFile.stylelint,
        ignoreDisables: false,
        reportNeedlessDisables: false,
        reporters: [
          {
            formatter: 'string',
            console: true
          }
        ],
        reportOutputDir: '',
        debug: false,
        failAfterError: true
      }));
  },
  sassCompile: function () {
    return src(Sass.SRC)
      //map .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'expanded',
        precision: 6,
        importer: require('node-sass-package-importer')(),
        fiber: require('fibers')
      }).on('error', sass.logError))
      .pipe(postcss([
        autoprefixer({
          cascade: false
        })
      ]))
      .pipe(header(Banner.TEXT, Banner.DATA))
      .pipe(cleancss({
        level: 1,
        format: {breakWith: 'lf'}
      }))
      .pipe(rename(Sass.OUTPUT))
      //map .pipe(sourcemaps.write('.', {includeContent: true}))
      .pipe(trimFinalNewlines())
      .pipe(dest(Sass.DEST, {overwrite: true}));
  },
  sassExtractEmpty: function (cb) {
    var file = path.join(ExtractSass.DEST, ExtractSass.OUTPUT);
    if (fs.existsSync(file) !== true) {
      fs.writeFileSync(file, '// Sass-in-Template is empty\n');
    }
    cb();
  },
  jsExtract: function () {
    var extractOpts = {
      start: Js.TAG_START,
      end: Js.TAG_END,
      header: ExtractJs.HEADER,
      footer: ExtractJs.FOOTER
    };
    return src([...ExtractJs.SRC], {allowEmpty: true})
      .pipe(extract(extractOpts))
      .pipe(concat(ExtractJs.OUTPUT))
      .pipe(dest(ExtractJs.DEST, {overwrite: true}));
  },
  jsLint: function () {
    return src(path.join(Path.JS_SRC.dir, '/**/*.js'), {allowEmpty: true})
      .pipe(eslint({
        configFile: CONFIG.configFile.eslint,
        reportUnusedDisableDirectives: true
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  },
  jsCompile: function () {
    var b = browserify({
      entries: Js.SRC,
      debug: true,
      transform: [
        ['babelify', {
          'presets': ['@babel/preset-env'],
          'plugins': ['babel-plugin-root-import']
        }]
      ]
    });

    return b.bundle()
      .pipe(source(Js.OUTPUT))
      .pipe(buffer())
      //map .pipe(sourcemaps.init())
      .on('error', log.error)
      .pipe(header(Banner.TEXT, Banner.DATA))
      .pipe(terser({
        mangle: true,
        compress: {
          typeofs: false
        },
        output: {
          comments: /^!/i
        }
      }))
      //map .pipe(sourcemaps.write({includeContent: true}))
      .pipe(trimFinalNewlines())
      .pipe(dest(Js.DEST, {overwrite: true}));
  },
  jsExtractEmpty: function (cb) {
    var file = path.join(ExtractJs.DEST, ExtractJs.OUTPUT);
    if (fs.existsSync(file) !== true) {
      fs.writeFileSync(file, '// JS-in-Template is empty\n');
    }
    cb();
  },
  templateCompileExtractAssetModule: function () {
    return src(Template.SRC)
      .pipe(templateCompile({extractAssetModule: true}))
      .pipe(rename(Template.OUTPUT))
      .pipe(dest(Template.DEST, {overwrite: true}));
  },
  templateCompile: function () {
    return src(Template.SRC)
      .pipe(templateCompile({extractAssetModule: false}))
      .pipe(rename(Template.OUTPUT))
      .pipe(dest(Template.DEST, {overwrite: true}));
  }
};

/**
 * ------------------------------------------------------------------------
 * Task Definitions
 * ------------------------------------------------------------------------
 */

const build = series(
  Tasks.cleanSkinExtract,
  Tasks.skinExtract,
  Tasks.skinExtractEmpty,

  Tasks.cleanSassExtract,
  Tasks.sassExtract,
  Tasks.sassExtractEmpty,

  Tasks.cleanJsExtract,
  Tasks.jsExtract,
  Tasks.jsExtractEmpty,

  Tasks.cleanTemplateCompile,
  Tasks.templateCompileExtractAssetModule,

  Tasks.skinLint,
  Tasks.cleanSkinCompile,
  Tasks.skinCompile,

  Tasks.sassLint,
  Tasks.cleanSassCompile,
  Tasks.sassCompile,

  Tasks.jsLint,
  Tasks.cleanJsCompile,
  Tasks.jsCompile,

  Tasks.cleanTemplateCompile,
  Tasks.templateCompile
);

/**
 * ------------------------------------------------------------------------
 * Bloggerpack Class
 * ------------------------------------------------------------------------
 */

class Bloggerpack {
  static create() {
    return new Bloggerpack();
  }

  gulp() {
    return require('gulp');
  }

  build(done) {
    return series(build)(done);
  }
  watch() {
    return watch([
      '**/*',
      '!' + path.join(Template.DEST, Template.OUTPUT),
      '!' + path.join(Skin.DEST, Skin.OUTPUT),
      '!' + path.join(Sass.DEST, Sass.OUTPUT),
      '!' + path.join(Js.DEST, Js.OUTPUT),
      '!' + path.join(ExtractSkin.DEST, ExtractSkin.OUTPUT),
      '!' + path.join(ExtractSass.DEST, ExtractSass.OUTPUT),
      '!' + path.join(ExtractJs.DEST, ExtractJs.OUTPUT),
      '!**/node_modules'
    ], build);
  }
}

module.exports = Bloggerpack;
