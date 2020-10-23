const {series, registry} = require('gulp');
const sassRegistry = require('../../tasks/sass');
const cleanRegistry = require('../../tasks/clean');

const sassOptions = {
  src: {
    dir: 'src/sass',
    filename: 'index.scss'
  },
  build: {
    dir: 'src/dist',
    filename: 'sass.css'
  },
  configFile: {
    stylelint: 'src/config/.stylelintrc',
    banner: {
      text: 'src/config/banner.txt',
      data: 'src/config/data.json'
    }
  }
}
registry(new sassRegistry(sassOptions));

const cleanOptions = {
  src: ['src/dist']
}
registry(new cleanRegistry(cleanOptions));

// gulp build --gulpfile tasks-test/sass/gulpfile.js
exports.build = series('clean', 'sass-tasks');
