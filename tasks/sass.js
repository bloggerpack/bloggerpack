const fs = require('fs');
const path = require('path');
const {src, dest, series} = require('gulp');
const util = require('util');
const defaultRegistry = require('undertaker-registry');
const stripIndent = require('strip-indent');
const del = require('del');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

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

const config = require('../config');

const defaults = {
  src: {
    dir: config.sass.src.dir,
    filename: config.sass.src.filename
  },
  build: {
    dir: config.sass.build.dir,
    filename: config.sass.build.filename
  }
}

function sassRegistry(opts) {
  defaultRegistry.call(this);
  this.opts = opts || defaults;
}

util.inherits(sassRegistry, defaultRegistry);

sassRegistry.prototype.init = function(gulpInst) {
  const opts = this.opts;

  const sassOpts = {
    extract: {
      src: [
        path.join(process.cwd(), '**/*.njk'),
        path.join(process.cwd(), 'node_modules/bloggerpack-plugin-*/**/*.njk'),
        '!' + path.join(process.cwd(), 'node_modules/**/*.njk')
      ],
      filename: '_sass-in-template.scss',
      dest: path.join(process.cwd(), opts.src.dir),
      opts: {
        start: config.sass.tag.start,
        end: config.sass.tag.end,
        header: `/*
# ==========================================================================
# Template path: <filepath>
# ==========================================================================
*/`,
        footer: '',
        emptyMessage: '/* Sass-in-Template is empty */'
      }
    },
    lint: {
      src: [
        path.join(process.cwd(), opts.src.dir, '**/*.scss')
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

  gulpInst.task('sass-extract-clean', function (cb) {
    del.sync(path.join(process.cwd(), sassOpts.extract.dest, sassOpts.extract.filename));
    cb();
  });
  gulpInst.task('sass-extract', function () {
    return src([...sassOpts.extract.src], {allowEmpty: true})
      .pipe(extract(sassOpts.extract.opts))
      .pipe(concat(sassOpts.extract.filename))
      .pipe(dest(sassOpts.extract.dest, {overwrite: true}));
  });

  gulpInst.task('sass-lint', function (cb) {
    if (fs.existsSync(path.join(process.cwd(), config.configFile.stylelint))) {
      return src([...sassOpts.lint.src], {allowEmpty: true})
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
    } else {
      console.log('Sass not linted (No "' + path.join(config.configFile.stylelint) + '" found)');
      cb();
    }
  });

  gulpInst.task('sass-compile', function () {
    return src(sassOpts.compile.src)
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
      .pipe(header(banner.text, banner.data))
      .pipe(cleancss({
        level: 1,
        format: {breakWith: 'lf'}
      }))
      .pipe(rename(sassOpts.compile.filename))
      .pipe(trim())
      .pipe(dest(sassOpts.compile.dest, {overwrite: true}));
  });

  gulpInst.task('sass-tasks', series(
    'sass-extract-clean',
    'sass-extract',
    'sass-lint',
    'sass-compile'
  ));
}

module.exports = sassRegistry;
