const fs = require('fs');
const path = require('path');
const { src, dest, series } = require('gulp');
const util = require('util');
const defaultRegistry = require('undertaker-registry');
const rename = require('gulp-rename');

// compile
const templateCompile = require('../lib/template-compiler');
const trim =  require('../lib/trim');

// default config
const config = require('../config');
const defaults = {
  src: {
    dir: config.template.src.dir,
    filename: config.template.src.filename
  },
  build: {
    dir: config.template.build.dir,
    filename: config.template.build.filename
  },
  tag: {
    start: config.template.tag.start,
    end: config.template.tag.end
  }
};

function templateRegistry(opts) {
  defaultRegistry.call(this);
  this.opts = opts || defaults;
}

util.inherits(templateRegistry, defaultRegistry);

templateRegistry.prototype.init = function(gulpInst) {
  const opts = this.opts;

  exports.opts = opts;

  const templateOpts = {
    compile: {
      src: path.join(process.cwd(), opts.src.dir, opts.src.filename),
      dest: path.join(process.cwd(), opts.build.dir),
      opts: {
        context: {
          data: JSON.parse(fs.readFileSync(path.join(process.cwd(), config.configFile.data), 'utf8')),
          pkg: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'))
        },
        start: opts.tag.start,
        end: opts.tag.end
      }
    }
  };

  gulpInst.task('template-compile', () => {
    // index.ext
    let srcExt = path.extname(opts.src.filename); // .ext
    let srcName = path.basename(opts.src.filename, srcExt); // index
    // theme.ext
    let buildExt = path.extname(opts.build.filename); // .ext
    let buildName = path.basename(opts.build.filename, buildExt); // theme

    const variant = path.join(process.cwd(), opts.src.dir, srcName + '-*' + srcExt);

    return src([templateOpts.compile.src, variant], { allowEmpty: true })
      .pipe(templateCompile(templateOpts.compile.opts))
      .pipe(rename(function (p) {
        p.basename = p.basename.replace(srcName + '-', buildName + '-');
        p.basename = p.basename.replace(srcName, buildName);
        p.extname = buildExt;
      }))
      .pipe(trim())
      .pipe(dest(templateOpts.compile.dest, { overwrite: true }));
  });

  gulpInst.task('template-tasks', series(
    'template-compile'
  ));
};

exports.registry = templateRegistry;
