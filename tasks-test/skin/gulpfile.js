const {series, registry} = require('gulp');
const skinRegistry = require('../../tasks/skin');
const cleanRegistry = require('../../tasks/clean');

const skinOptions = {
  src: {
    dir: 'src/skin',
    filename: 'index.css'
  },
  build: {
    dir: 'src/dist',
    filename: 'skin.css'
  },
  configFile: {
    stylelint: 'src/config/.stylelintrc',
    banner: {
      text: 'src/config/banner.txt',
      data: 'src/config/data.json'
    }
  }
}
registry(new skinRegistry(skinOptions));

const cleanOptions = {
  src: ['src/dist']
}
registry(new cleanRegistry(cleanOptions));

// gulp build --gulpfile tasks-test/skin/gulpfile.js
exports.build = series('clean', 'skin-tasks');
