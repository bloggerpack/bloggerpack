const path = require('path');
const { series, registry } = require('gulp');

const js = require('../../../tasks/js');
registry(new js.registry());

const clean = require('../../../tasks/clean');
const cleanOpts = {
  src: [
    path.join(process.cwd(), js.opts.extract.dir),
    path.join(process.cwd(), js.opts.build.dir)
  ]
};
registry(new clean.registry(cleanOpts));

// gulp build --gulpfile packages/bloggerpack/test/tasks/js/gulpfile.js
exports.build = series('clean', 'js-tasks');
