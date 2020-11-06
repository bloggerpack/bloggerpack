const {series, registry} = require('gulp');

const templateRegistry = require('../../../tasks/template');
registry(new templateRegistry());

const cleanRegistry = require('../../../tasks/clean');
registry(new cleanRegistry());

// gulp build --gulpfile test/tasks/template/gulpfile.js --cwd './test/tasks/template'
exports.build = series('clean', 'template-tasks');
