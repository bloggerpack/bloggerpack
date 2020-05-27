module.exports = {
  template: {
    src:  './src/index.njk',
    dist: './dist/theme.xml'
  },
  skin: {
    src:  './src/assets/skin/index.css',
    dist: './src/@dist/skin/skin.css'
  },
  css: {
    src:  './src/assets/css/index.scss',
    dist: './src/@dist/css/style.css'
  },
  js: {
    src:  './src/assets/js/index.js',
    dist: './src/@dist/js/script.js'
  },
  configFile: {
    data:      './src/config/data.json',
    banner:    './src/config/banner.txt',
    stylelint: './src/config/.stylelintrc',
    eslint:    './src/config/.eslintrc.json',
    babel:     './src/config/.babelrc.js'
  }
};
