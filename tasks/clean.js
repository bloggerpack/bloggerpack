const util = require('util');
const defaultRegistry = require('undertaker-registry');
const del = require('del');

const defaults = {
  src: []
};

function cleanRegistry(opts) {
  defaultRegistry.call(this);
  this.opts = opts || defaults;
}

util.inherits(cleanRegistry, defaultRegistry);

cleanRegistry.prototype.init = function(gulpInst) {
  const opts = this.opts;

  gulpInst.task('clean', function (cb) {
    del.sync([...opts.src]);
    cb();
  });
}

module.exports = cleanRegistry;
