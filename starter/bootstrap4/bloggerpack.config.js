module.exports = {
  template: {
    src:  './src/index.njk',
    dist: './dist/theme.xml'
  },
  sass: {
    src:  './src/assets/sass/index.scss',
    dist: './src/@dist/sass/style.css'
  },
  skin: {
    src:  './src/assets/skin/index.css',
    dist: './src/@dist/skin/skin.css'
  },
  js: {
    src:  './src/assets/js/index.js',
    dist: './src/@dist/js/script.js'
  },
  configFile: {
    data:      './src/config/data.json',
    banner:    './src/config/banner.txt',
    stylelint: './src/config/.stylelintrc',
    eslint:    './src/config/.eslintrc.json'
  }
};
