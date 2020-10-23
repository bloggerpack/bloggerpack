const fs = require('fs');
const path = require('path');
const {src, dest, series} = require('gulp');
const util = require('util');
const defaultRegistry = require('undertaker-registry');
const stripIndent = require('strip-indent');
const del = require('del');
const concat = require('gulp-concat');
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

const defaults = {
  src: {
    dir: 'src/skin',
    filename: 'index.css'
  },
  build: {
    dir: 'src/dist',
    filename: 'skin.css'
  },
  configFile: {
    stylelint: 'src/config/.stylelintrc',
    banner: {
      text: 'src/config/banner.txt',
      data: 'src/config/data.json'
    }
  }
}

function skinRegistry(opts) {
  defaultRegistry.call(this);
  this.opts = opts || defaults;
}

util.inherits(skinRegistry, defaultRegistry);

skinRegistry.prototype.init = function(gulpInst) {
  const opts = this.opts;

  const skinOpts = {
    extract: {
      src: [
        path.join(process.cwd(), '**/*.njk'),
        path.join(process.cwd(), 'node_modules/bloggerpack-plugin-*/**/*.njk'),
        '!' + path.join(process.cwd(), 'node_modules/**/*.njk')
      ],
      filename: 'auto-extract.css',
      dest: path.join(process.cwd(), opts.src.dir),
      opts: {
        start: '::skin::',
        end: '::endskin::',
        header: `/*
# ==========================================================================
# Template path: <filepath>
# ==========================================================================
*/`,
        footer: '',
        emptyMessage: '/* Skin-in-Template is empty */'
      }
    },
    lint: {
      src: [
        path.join(process.cwd(), opts.src.dir, '**/*.css')
      ],
      configFile: path.join(process.cwd(), opts.configFile.stylelint)
    },
    compile: {
      src: path.join(opts.src.dir, opts.src.filename),
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
      fs.readFileSync(skinOpts.compile.banner.text, 'utf8').trim()
    ) + '\n\n',
    data: {
      data: require(skinOpts.compile.banner.data),
      pkg: require(path.join(process.cwd(), 'package.json'))
    }
  };

  gulpInst.task('extract-clean', function (cb) {
    del.sync(path.join(process.cwd(), skinOpts.extract.dest, skinOpts.extract.filename));
    cb();
  });
  gulpInst.task('extract', function () {
    return src([...skinOpts.extract.src], {allowEmpty: true})
      .pipe(extract(skinOpts.extract.opts))
      .pipe(concat(skinOpts.extract.filename))
      .pipe(dest(skinOpts.extract.dest, {overwrite: true}));
  });

  gulpInst.task('lint', function () {
    return src([...skinOpts.lint.src], {allowEmpty: true})
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

  gulpInst.task('compile', function () {
    return src(skinOpts.compile.src)
      .pipe(skinImportBeautifier())
      .pipe(postcss([
        atImport({
          skipDuplicates: false
        }),
        autoprefixer({
          cascade: false
        })
      ]))
      .pipe(replace(/\/\*[^*]*Template\spath:[^*]*\*\/\n\n/g, ''))
      .pipe(replace(/\/\*[^*]*Template\spath:[^*]*\*\/\n/g, ''))
      .pipe(replace(/\/\* Skin-in-Template is empty \*\/\n\n/g, ''))
      .pipe(replace(/\/\* Skin-in-Template is empty \*\//g, ''))
      .pipe(header(banner.text, banner.data))
      .pipe(rename(skinOpts.compile.filename))
      .pipe(trim())
      .pipe(dest(skinOpts.compile.dest, {overwrite: true}));
  });

  gulpInst.task('skin-tasks', series(
    'extract-clean',
    'extract',
    'lint',
    'compile'
  ));
}

module.exports = skinRegistry;
