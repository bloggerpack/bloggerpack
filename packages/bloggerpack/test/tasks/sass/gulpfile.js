const path = require('path');
const { series, registry } = require('gulp');

const sass = require('../../../tasks/sass');
registry(new sass.registry());

const clean = require('../../../tasks/clean');
const cleanOpts = {
  src: [
    path.join(process.cwd(), sass.opts.extract.dir),
    path.join(process.cwd(), sass.opts.build.dir)
  ]
};
registry(new clean.registry(cleanOpts));

// gulp build --gulpfile packages/bloggerpack/test/tasks/sass/gulpfile.js
exports.build = series('clean', 'sass-tasks');
