const path = require('path');
const {series, registry} = require('gulp');
const gulpWatch = require('gulp').watch;
const sassRegistry = require('./tasks/sass');
const skinRegistry = require('./tasks/skin');
const jsRegistry = require('./tasks/js');
const templateRegistry = require('./tasks/template');
const cleanRegistry = require('./tasks/clean');

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
  src: [
    'src/dist',
    'dist'
  ]
}
registry(new cleanRegistry(cleanOptions));

const build = series(
  'clean',
  'sass-tasks',
  'skin-tasks',
  'js-tasks',
  'template-tasks'
);

function watch() {
  return gulpWatch([
    '**/*',
    '!' + path.join(sassOptions.src.dir, '_sass-in-template.scss'),
    '!' + path.join(skinOptions.src.dir, 'skin-in-template.css'),
    '!' + path.join(jsOptions.src.dir, 'js-in-template.js'),
    '!dist',
    '!src/dist',
    '!node_modules'
  ], build);
}

exports.build = build;
exports.watch = watch;
