const fs = require('fs');
const path = require('path');
const { src, dest, series } = require('gulp');
const util = require('util');
const defaultRegistry = require('undertaker-registry');
const stripIndent = require('strip-indent');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

// extract
const extract =  require('../lib/extract');

// lint
const stylelint = require('gulp-stylelint');

// compile
const header = require('gulp-header');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cleancss = require('gulp-clean-css');
const trim =  require('../lib/trim');

// default config
const config = require('../config');
const defaults = {
  src: {
    dir: config.sass.src.dir,
    filename: config.sass.src.filename
  },
  build: {
    dir: config.sass.build.dir,
    filename: config.sass.build.filename
  },
  extract: {
    root: config.sass.extract.root,
    dir: config.sass.extract.dir,
    extname: config.sass.extract.extname
  },
  tag: {
    start: config.sass.tag.start,
    end: config.sass.tag.end
  }
};

function sassRegistry(opts) {
  defaultRegistry.call(this);
  this.opts = opts || defaults;
}

util.inherits(sassRegistry, defaultRegistry);

sassRegistry.prototype.init = function(gulpInst) {
  const opts = this.opts;

  exports.opts = opts;

  const sassOpts = {
    extract: {
      src: [
        path.join(process.cwd(), opts.extract.root, '**/*.xml'),
        '!' + path.join(process.cwd(), 'node_modules/**/*.xml')
      ],
      dest: path.join(process.cwd(), opts.extract.dir),
      srcPlugins: [
        path.join(process.cwd(), 'node_modules/**/*.bloggerpack.xml')
      ],
      destPlugins: path.join(process.cwd(), opts.extract.dir, 'plugins'),
      opts: {
        start: opts.tag.start,
        end: opts.tag.end,
        header: `
          /*
          // ------------------------------------------------------------------------
          // Template path: <filepath>
          // ------------------------------------------------------------------------
          */
        `,
        footer: '',
        extname: opts.extract.extname,
        emptyMessage: '/* Sass-in-Template is empty */'
      }
    },
    lint: {
      src: [
        path.join(process.cwd(), opts.src.dir, '**/*.scss'),
        '!' + path.join(process.cwd(), opts.src.dir, opts.extract.dir, '**/*.scss'),
        '!' + path.join(process.cwd(), opts.src.dir, opts.build.dir, '**/*.scss')
      ],
      configFile: path.join(process.cwd(), config.configFile.stylelint)
    },
    compile: {
      src: path.join(process.cwd(), opts.src.dir, opts.src.filename),
      dest: path.join(process.cwd(), opts.build.dir),
      banner: {
        text: path.join(process.cwd(), config.configFile.banner),
        data: path.join(process.cwd(), config.configFile.data)
      }
    }
  };

  const banner = {
    text: stripIndent(
      fs.readFileSync(sassOpts.compile.banner.text, 'utf8').trim()
    ) + '\n\n',
    data: {
      data: require(sassOpts.compile.banner.data),
      pkg: require(path.join(process.cwd(), 'package.json'))
    }
  };

  gulpInst.task('sass-extract', () => {
    return src([...sassOpts.extract.src], { allowEmpty: true })
      .pipe(extract(sassOpts.extract.opts))
      .pipe(dest(sassOpts.extract.dest, { overwrite: true }));
  });
  gulpInst.task('sass-extract-plugins', () => {
    return src([...sassOpts.extract.srcPlugins], { allowEmpty: true })
      .pipe(extract(sassOpts.extract.opts))
      .pipe(dest(sassOpts.extract.destPlugins, { overwrite: true }));
  });

  gulpInst.task('sass-lint', () => {
    return src([...sassOpts.lint.src], { allowEmpty: true })
      .pipe(stylelint({
        configFile: sassOpts.lint.configFile,
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
  });

  gulpInst.task('sass-compile', () => {
    // index.ext
    let srcExt = path.extname(opts.src.filename); // .ext
    let srcName = path.basename(opts.src.filename, srcExt); // index
    // style.ext
    let buildExt = path.extname(opts.build.filename); // .ext
    let buildName = path.basename(opts.build.filename, buildExt); // style

    const variant = path.join(process.cwd(), opts.src.dir, srcName + '-*' + srcExt);

    return src([sassOpts.compile.src, variant])
      .pipe(sass({
        outputStyle: 'expanded',
        charset: false,
        importer: [
          require('node-sass-package-importer')({
            packagePrefix: ''
          }),
          require('node-sass-glob-importer')()
        ],
        fiber: require('fibers')
      }).on('error', sass.logError))
      .pipe(postcss([
        autoprefixer({
          cascade: false
        })
      ]))
      .pipe(replace(/\/\*[^*]*Template\spath:[^*]*\*\/\n\n/g, ''))
      .pipe(replace(/\/\*[^*]*Template\spath:[^*]*\*\/\n/g, ''))
      .pipe(replace(/\/\*[^*]*Template\spath:[^*]*\*\//g, ''))
      .pipe(replace(/\/\* Sass-in-Template is empty \*\/\n\n/g, ''))
      .pipe(replace(/\/\* Sass-in-Template is empty \*\/\n/g, ''))
      .pipe(replace(/\/\* Sass-in-Template is empty \*\//g, ''))
      .pipe(header(banner.text, banner.data))
      .pipe(rename(function (p) {
        p.basename = p.basename.replace(srcName + '-', buildName + '-');
        p.basename = p.basename.replace(srcName, buildName);
        p.extname = buildExt;
      }))
      .pipe(trim())
      .pipe(dest(sassOpts.compile.dest, { overwrite: true }));
  });

  gulpInst.task('sass-minify', () => {
    return src(path.join(sassOpts.compile.dest, '**/*'), { allowEmpty: true })
      .pipe(cleancss({
        level: 1,
        format: { breakWith: 'lf' }
      }))
      .pipe(dest(sassOpts.compile.dest, { overwrite: true }));
  });

  gulpInst.task('sass-tasks', series(
    'sass-extract',
    'sass-extract-plugins',
    'sass-lint',
    'sass-compile',
    'sass-minify'
  ));
};

exports.registry = sassRegistry;
