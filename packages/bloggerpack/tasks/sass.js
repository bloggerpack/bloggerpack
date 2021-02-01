const fs = require('fs');
const path = require('path');
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
        emptyMessage: '/* Sass-in-Template is empty */'
      }
    },
    lint: {
      src: [
        path.join(process.cwd(), opts.src.dir, '**/*.scss'),
        '!' + path.join(process.cwd(), opts.src.dir, '**/@bloggerpack/**/*.scss'),
        '!' + path.join(process.cwd(), opts.src.dir, '**/bloggerpack-plugin-*/**/*.scss')
      ],
      configFile: path.join(process.cwd(), config.configFile.stylelint)
    },
    compile: {
      src: path.join(process.cwd(), opts.src.dir, opts.src.filename),
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
    return src(sassOpts.compile.src)
      .pipe(sass({
        outputStyle: 'expanded',
        charset: false,
        importer: [
          require('node-sass-package-importer')(),
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
      .pipe(rename(sassOpts.compile.filename))
      .pipe(trim())
      .pipe(dest(sassOpts.compile.dest, { overwrite: true }));
  });

  gulpInst.task('sass-minify', () => {
    return src(path.join(sassOpts.compile.dest, sassOpts.compile.filename), { allowEmpty: true })
      .pipe(cleancss({
        level: 1,
        format: { breakWith: 'lf' }
      }))
      .pipe(dest(sassOpts.compile.dest, { overwrite: true }));
  });

  gulpInst.task('sass-tasks', series(
    'sass-extract',
    'sass-lint',
    'sass-compile',
    'sass-minify'
  ));
};

exports.registry = sassRegistry;
