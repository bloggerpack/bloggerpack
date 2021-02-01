const util = require('util');
const defaultRegistry = require('undertaker-registry');
const del = require('del');

// default config
const defaults = {
  src: []
};

function cleanRegistry(opts) {
  defaultRegistry.call(this);
  this.opts = opts || defaults;
}

util.inherits(cleanRegistry, defaultRegistry);

cleanRegistry.prototype.init = function (gulpInst) {
  const opts = this.opts;

  exports.opts = opts;

  gulpInst.task('clean', (cb) => {
    del.sync([...opts.src]);
    cb();
  });
};

exports.registry = cleanRegistry;
