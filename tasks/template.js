const fs = require('fs');
const path = require('path');
const {src, dest, series} = require('gulp');
const util = require('util');
const defaultRegistry = require('undertaker-registry');
const rename = require('gulp-rename');

// compile
const templateCompile = require('../lib/template-compiler');

const defaults = {
  src: {
    dir: 'src/template',
    filename: 'index.njk'
  },
  build: {
    dir: 'dist',
    filename: 'theme.xml'
  },
  dataFile: 'src/config/data.json'
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
          data: JSON.parse(fs.readFileSync(path.join(process.cwd(), opts.dataFile), 'utf8')),
          pkg: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'))
        },
        start: '>>>template',
        end: '>>>endtemplate'
      }
    }
  };

  gulpInst.task('template-compile', function() {
    return src(templateOpts.compile.src, {allowEmpty: true})
      .pipe(templateCompile(templateOpts.compile.opts))
      .pipe(rename(templateOpts.compile.filename))
      .pipe(dest(templateOpts.compile.dest, {overwrite: true}));
  });

  gulpInst.task('template-tasks', series('template-compile'));
}

module.exports = templateRegistry;
