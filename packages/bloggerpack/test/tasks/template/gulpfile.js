const path = require('path');
const { series, registry } = require('gulp');

const template = require('../../../tasks/template');
registry(new template.registry());

const clean = require('../../../tasks/clean');
const cleanOpts = {
  src: [
    path.join(process.cwd(), template.opts.build.dir)
  ]
};
registry(new clean.registry(cleanOpts));

// gulp build --gulpfile packages/bloggerpack/test/tasks/template/gulpfile.js --cwd packages/bloggerpack/test/tasks/template
exports.build = series('clean', 'template-tasks');
