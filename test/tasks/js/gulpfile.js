const {series, registry} = require('gulp');

const jsRegistry = require('../../../tasks/js');
registry(new jsRegistry());

const cleanRegistry = require('../../../tasks/clean');
registry(new cleanRegistry());

// gulp build --gulpfile test/tasks/js/gulpfile.js
exports.build = series('clean', 'js-tasks');
