const {series, registry} = require('gulp');
const jsRegistry = require('../../tasks/js');
const cleanRegistry = require('../../tasks/clean');

const jsOptions = {
  src: {
    dir: 'src/js',
    filename: 'index.js'
  },
  build: {
    dir: 'src/dist',
    filename: 'js.js'
  },
  configFile: {
    eslint: 'src/config/.eslintrc.json',
    banner: {
      text: 'src/config/banner.txt',
      data: 'src/config/data.json'
    }
  }
}
registry(new jsRegistry(jsOptions));

const cleanOptions = {
  src: ['src/dist']
}
registry(new cleanRegistry(cleanOptions));

// gulp build --gulpfile tasks-test/js/gulpfile.js
exports.build = series('clean', 'js-tasks');
