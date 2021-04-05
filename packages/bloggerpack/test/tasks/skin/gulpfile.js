const path = require('path');
const { series, registry } = require('gulp');

const skin = require('../../../tasks/skin');
registry(new skin.registry());

const clean = require('../../../tasks/clean');
const cleanOpts = {
  src: [
    path.join(process.cwd(), skin.opts.extract.dir),
    path.join(process.cwd(), skin.opts.build.dir)
  ]
};
registry(new clean.registry(cleanOpts));

// gulp build --gulpfile packages/bloggerpack/test/tasks/skin/gulpfile.js
exports.build = series('clean', 'skin-tasks');
