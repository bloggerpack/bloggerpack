const {series, registry} = require('gulp');
const templateRegistry = require('../../tasks/template');
const cleanRegistry = require('../../tasks/clean');

const templateOptions = {
  src: {
    dir: 'src',
    filename: 'index.njk'
  },
  build: {
    dir: 'dist',
    filename: 'theme.xml'
  },
  dataFile: 'src/config/data.json'
}
registry(new templateRegistry(templateOptions));

const cleanOptions = {
  src: ['dist']
}
registry(new cleanRegistry(cleanOptions));

// gulp build --gulpfile tasks-test/template/gulpfile.js --cwd './tasks-test/template'
exports.build = series('clean', 'template-tasks');
