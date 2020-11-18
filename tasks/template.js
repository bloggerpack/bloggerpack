const fs = require('fs');
const path = require('path');
const {src, dest, series} = require('gulp');
const util = require('util');
const defaultRegistry = require('undertaker-registry');
const rename = require('gulp-rename');

// compile
const templateCompile = require('../lib/template-compiler');
const trim =  require('../lib/trim');

const config = require('../config');

const defaults = {
  src: {
    dir: config.template.src.dir,
    filename: config.template.src.filename
  },
  build: {
    dir: config.template.build.dir,
    filename: config.template.build.filename
  }
}

function templateRegistry(opts) {
  defaultRegistry.call(this);
  this.opts = opts || defaults;
}

util.inherits(templateRegistry, defaultRegistry);

templateRegistry.prototype.init = function(gulpInst) {
  const opts = this.opts;

  const templateOpts = {
    compile: {
      src: path.join(process.cwd(), opts.src.dir, opts.src.filename),
      filename: opts.build.filename,
      dest: path.join(process.cwd(), opts.build.dir),
      opts: {
        context: {
          data: JSON.parse(fs.readFileSync(path.join(process.cwd(), config.configFile.data), 'utf8')),
          pkg: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'))
        },
        start: config.template.tag.start,
        end: config.template.tag.end
      }
    }
  };

  gulpInst.task('template-compile-main', function() {
    return src(templateOpts.compile.src, {allowEmpty: true})
      .pipe(templateCompile(templateOpts.compile.opts))
      .pipe(rename(templateOpts.compile.filename))
      .pipe(trim())
      .pipe(dest(templateOpts.compile.dest, {overwrite: true}));
  });

  gulpInst.task('template-compile-variant', function() {
    return src(path.join(process.cwd(), opts.src.dir, 'index-*.njk'), {allowEmpty: true})
      .pipe(templateCompile(templateOpts.compile.opts))
      .pipe(rename(function (path) {
        path.basename = path.basename.replace('index-', 'theme-');
        path.extname = '.xml';
      }))
      .pipe(trim())
      .pipe(dest(templateOpts.compile.dest, {overwrite: true}));
  });

  gulpInst.task('template-tasks', series(
    'template-compile-main',
    'template-compile-variant'
  ));
}

module.exports = templateRegistry;
