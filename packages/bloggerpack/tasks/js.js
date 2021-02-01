const fs = require('fs');
const path = require('path');
const { src, dest, series } = require('gulp');
const util = require('util');
const defaultRegistry = require('undertaker-registry');
const stripIndent = require('strip-indent');
const del = require('del');

// extract
const extract =  require('../lib/extract');

// lint
const eslint = require('gulp-eslint');

// compile
const header = require('gulp-header');
const rollupStream = require('@rollup/stream');
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const globImport = require('rollup-plugin-glob-import');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const terser = require('gulp-terser');
const trim =  require('../lib/trim');

// default config
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
  extract: {
    root: config.js.extract.root,
    dir: config.js.extract.dir,
    extname: config.js.extract.extname
  },
  tag: {
    start: config.js.tag.start,
    end: config.js.tag.end
  }
};

function jsRegistry(opts) {
  defaultRegistry.call(this);
  this.opts = opts || defaults;
}

util.inherits(jsRegistry, defaultRegistry);

jsRegistry.prototype.init = function (gulpInst) {
  const opts = this.opts;

  exports.opts = opts;

  const jsOpts = {
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
        emptyMessage: '/* JS-in-Template is empty */'
      }
    },
    lint: {
      src: [
        path.join(process.cwd(), opts.src.dir, '**/*.js'),
        '!' + path.join(process.cwd(), opts.src.dir, '**/@bloggerpack/**/*.js'),
        '!' + path.join(process.cwd(), opts.src.dir, '**/bloggerpack-plugin-*/**/*.js')
      ],
      configFile: path.join(process.cwd(), config.configFile.eslint)
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
      fs.readFileSync(jsOpts.compile.banner.text, 'utf8').trim()
    ) + '\n\n',
    data: {
      data: require(jsOpts.compile.banner.data),
      pkg: require(path.join(process.cwd(), 'package.json'))
    }
  };

  gulpInst.task('js-extract', () => {
    return src([...jsOpts.extract.src], { allowEmpty: true })
      .pipe(extract(jsOpts.extract.opts))
      .pipe(dest(jsOpts.extract.dest, { overwrite: true }));
  });

  gulpInst.task('js-lint', () => {
    return src([...jsOpts.lint.src], { allowEmpty: true })
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
  });

  gulpInst.task('js-compile', () => {
    const options = {
      input: jsOpts.compile.src,
      output: {
        format: 'umd',
        name: 'bloggerpack'
      },
      plugins: [
        babel({
          presets: [
            [
              '@babel/preset-env',
              {
                loose: true,
                bugfixes: true,
                modules: false
              }
            ]
          ],
          babelHelpers: 'bundled',
          compact: true,
          exclude: 'node_modules/**'
        }),
        nodeResolve(),
        commonjs(),
        globImport()
      ]
    };

    return rollupStream(options)
      .pipe(source(jsOpts.compile.filename))
      .pipe(buffer())
      .pipe(header(banner.text, banner.data))
      .pipe(trim())
      .pipe(dest(jsOpts.compile.dest, { overwrite: true }));
  });

  gulpInst.task('js-minify', () => {
    return src(path.join(jsOpts.compile.dest, jsOpts.compile.filename), { allowEmpty: true })
      .pipe(terser({
        mangle: true,
        compress: {
          typeofs: false
        },
        format: {
          comments: /^!/i
        },
        sourceMap: false
      }))
      .pipe(dest(jsOpts.compile.dest, { overwrite: true }));
  });

  gulpInst.task('js-tasks', series(
    'js-extract',
    'js-lint',
    'js-compile',
    'js-minify'
  ));
};

exports.registry = jsRegistry;
