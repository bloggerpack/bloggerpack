const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { src, dest, series } = require('gulp');
const util = require('util');
const defaultRegistry = require('undertaker-registry');
const stripIndent = require('strip-indent');
const del = require('del');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

// extract
const extract =  require('../lib/extract');

// lint
const stylelint = require('gulp-stylelint');

// compile
const header = require('gulp-header');
const skinImportBeautifier =  require('../lib/skin-import-beautifier');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const trim =  require('../lib/trim');

// default config
const config = require('../config');
const defaults = {
  src: {
    dir: config.skin.src.dir,
    filename: config.skin.src.filename
  },
  build: {
    dir: config.skin.build.dir,
    filename: config.skin.build.filename
  },
  extract: {
    root: config.skin.extract.root,
    dir: config.skin.extract.dir,
    extname: config.skin.extract.extname
  },
  tag: {
    start: config.skin.tag.start,
    end: config.skin.tag.end
  }
};

function skinRegistry(opts) {
  defaultRegistry.call(this);
  this.opts = opts || defaults;
}

util.inherits(skinRegistry, defaultRegistry);

skinRegistry.prototype.init = function(gulpInst) {
  const opts = this.opts;

  exports.opts = opts;

  const skinOpts = {
    extract: {
      src: [
        path.join(process.cwd(), opts.extract.root, '**/*.njk'),
        '!' + path.join(process.cwd(), 'node_modules/**/*.njk'),
        path.join(process.cwd(), 'node_modules/@bloggerpack*/plugin-*/**/*.njk'),
        path.join(process.cwd(), 'node_modules/bloggerpack-plugin-*/**/*.njk'),
        path.join(process.cwd(), 'node_modules/@*/bloggerpack-plugin-*/**/*.njk'),
        '!' + path.join(process.cwd(), 'node_modules/@bloggerpack*/plugin-*/**/preview.njk'),
        '!' + path.join(process.cwd(), 'node_modules/bloggerpack-plugin-*/**/preview.njk'),
        '!' + path.join(process.cwd(), 'node_modules/@*/bloggerpack-plugin-*/**/preview.njk')
      ],
      dest: path.join(process.cwd(), opts.extract.dir),
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
        emptyMessage: '/* Skin-in-Template is empty */'
      }
    },
    lint: {
      src: [
        path.join(process.cwd(), opts.src.dir, '**/*.css'),
        '!' + path.join(process.cwd(), opts.src.dir, '**/@bloggerpack/**/*.css'),
        '!' + path.join(process.cwd(), opts.src.dir, '**/bloggerpack-plugin-*/**/*.css')
      ],
      configFile: path.join(process.cwd(), config.configFile.stylelint)
    },
    compile: {
      src: path.join(opts.src.dir, opts.src.filename),
      filename: opts.build.filename,
      dest: path.join(process.cwd(), opts.build.dir),
      banner: {
        text: path.join(process.cwd(), config.configFile.banner),
        data: path.join(process.cwd(), config.configFile.data)
      }
    }
  };

  const banner = {
    text: stripIndent(
      fs.readFileSync(skinOpts.compile.banner.text, 'utf8').trim()
    ) + '\n\n',
    data: {
      data: require(skinOpts.compile.banner.data),
      pkg: require(path.join(process.cwd(), 'package.json'))
    }
  };

  gulpInst.task('skin-extract', () => {
    return src([...skinOpts.extract.src], { allowEmpty: true })
      .pipe(extract(skinOpts.extract.opts))
      .pipe(dest(skinOpts.extract.dest, { overwrite: true }));
  });

  gulpInst.task('skin-lint', () => {
    return src([...skinOpts.lint.src], { allowEmpty: true })
      .pipe(stylelint({
        configFile: skinOpts.lint.configFile,
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

  gulpInst.task('skin-compile', () => {
    return src(skinOpts.compile.src)
      .pipe(skinImportBeautifier())
      .pipe(postcss([
        atImport({
          skipDuplicates: false,
          resolve: function(id, base) {
            return glob.sync(path.join(base, id));
          }
        }),
        autoprefixer({
          cascade: false
        })
      ]))
      .pipe(replace(/\/\*[^*]*Template\spath:[^*]*\*\/\n\n/g, ''))
      .pipe(replace(/\/\*[^*]*Template\spath:[^*]*\*\/\n/g, ''))
      .pipe(replace(/\/\*[^*]*Template\spath:[^*]*\*\//g, ''))
      .pipe(replace(/\/\* Skin-in-Template is empty \*\/\n\n/g, ''))
      .pipe(replace(/\/\* Skin-in-Template is empty \*\/\n/g, ''))
      .pipe(replace(/\/\* Skin-in-Template is empty \*\//g, ''))
      .pipe(header(banner.text, banner.data))
      .pipe(rename(skinOpts.compile.filename))
      .pipe(trim())
      .pipe(dest(skinOpts.compile.dest, { overwrite: true }));
  });

  gulpInst.task('skin-tasks', series(
    'skin-extract',
    'skin-lint',
    'skin-compile'
  ));
};

exports.registry = skinRegistry;
