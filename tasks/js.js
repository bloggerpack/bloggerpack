const fs = require('fs');
const path = require('path');
const {src, dest, series} = require('gulp');
const util = require('util');
const defaultRegistry = require('undertaker-registry');
const log = require('gulplog');
const stripIndent = require('strip-indent');
const del = require('del');
const concat = require('gulp-concat');

// extract
const extract =  require('../lib/extract');

// lint
const eslint = require('gulp-eslint');

// compile
const header = require('gulp-header');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const terser = require('gulp-terser');
const trim =  require('../lib/trim');

const config = require('../config');

const defaults = {
  src: {
    dir: config.js.src.dir,
    filename: config.js.src.filename
  },
  build: {
    dir: config.js.build.dir,
    filename: config.js.build.filename
  },
  configFile: {
    eslint: config.configFile.eslint,
    banner: {
      text: config.configFile.banner,
      data: config.configFile.data
    }
  }
}

function jsRegistry(opts) {
  defaultRegistry.call(this);
  this.opts = opts || defaults;
}

util.inherits(jsRegistry, defaultRegistry);

jsRegistry.prototype.init = function(gulpInst) {
  const opts = this.opts;

  const jsOpts = {
    extract: {
      src: [
        path.join(process.cwd(), '**/*.njk'),
        path.join(process.cwd(), 'node_modules/bloggerpack-plugin-*/**/*.njk'),
        '!' + path.join(process.cwd(), 'node_modules/**/*.njk')
      ],
      filename: 'js-in-template.js',
      dest: path.join(process.cwd(), opts.src.dir),
      opts: {
        start: config.js.tag.start,
        end: config.js.tag.end,
        header: `/*
# ==========================================================================
# Template path: <filepath>
# ==========================================================================
*/`,
        footer: '',
        emptyMessage: '/* JS-in-Template is empty */'
      }
    },
    lint: {
      src: [
        path.join(process.cwd(), opts.src.dir, '**/*.js')
      ],
      configFile: path.join(process.cwd(), opts.configFile.eslint)
    },
    compile: {
      src: path.join(process.cwd(), opts.src.dir, opts.src.filename),
      filename: opts.build.filename,
      dest: path.join(process.cwd(), opts.build.dir),
      banner: {
        text: path.join(process.cwd(), opts.configFile.banner.text),
        data: path.join(process.cwd(), opts.configFile.banner.data)
      }
    }
  };

  const banner = {
    text: stripIndent(
      fs.readFileSync(jsOpts.compile.banner.text, 'utf8').trim()
    ) + '\n\n',
    data: {
      data: require(jsOpts.compile.banner.data),
      pkg: require(path.join(process.cwd(), 'package.json'))
    }
  };

  gulpInst.task('js-extract-clean', function (cb) {
    del.sync(path.join(process.cwd(), jsOpts.extract.dest, jsOpts.extract.filename));
    cb();
  });
  gulpInst.task('js-extract', function () {
    return src([...jsOpts.extract.src], {allowEmpty: true})
      .pipe(extract(jsOpts.extract.opts))
      .pipe(concat(jsOpts.extract.filename))
      .pipe(dest(jsOpts.extract.dest, {overwrite: true}));
  });

  gulpInst.task('js-lint', function (cb) {
    if (fs.existsSync(path.join(process.cwd(), opts.configFile.eslint))) {
      return src([...jsOpts.lint.src], {allowEmpty: true})
        .pipe(eslint({
          configFile: jsOpts.lint.configFile,
          envs: ['browser', 'jquery'],
          parser: '@babel/eslint-parser',
          parserOptions: {
            requireConfigFile: false
          },
          reportUnusedDisableDirectives: true
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
    } else {
      console.log('JS not linted (No "' + opts.configFile.eslint + '" found)');
      cb();
    }
  });

  gulpInst.task('js-compile', function () {
    var b = browserify({
      entries: jsOpts.compile.src,
      debug: true,
      transform: [
        ['babelify', {
          'presets': ['@babel/preset-env'],
          'plugins': ['babel-plugin-root-import']
        }]
      ]
    });

    return b.bundle()
      .pipe(source(jsOpts.compile.filename))
      .pipe(buffer())
      .on('error', log.error)
      .pipe(header(banner.text, banner.data))
      .pipe(terser({
        mangle: true,
        compress: {
          typeofs: false
        },
        output: {
          comments: /^!/i
        }
      }))
      .pipe(trim())
      .pipe(dest(jsOpts.compile.dest, {overwrite: true}));
  });

  gulpInst.task('js-tasks', series(
    'js-extract-clean',
    'js-extract',
    'js-lint',
    'js-compile'
  ));
}

module.exports = jsRegistry;
