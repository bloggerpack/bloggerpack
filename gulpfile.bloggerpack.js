const fs = require('fs');
const path = require('path');
const {series, registry} = require('gulp');
const gulpWatch = require('gulp').watch;
const sassRegistry = require('./tasks/sass');
const skinRegistry = require('./tasks/skin');
const jsRegistry = require('./tasks/js');
const templateRegistry = require('./tasks/template');
const cleanRegistry = require('./tasks/clean');

var tasks = [];

/**
 * ------------------------------------------------------------------------
 * Sass tasks
 * ------------------------------------------------------------------------
 */

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

if (fs.existsSync(path.join(sassOptions.src.dir, sassOptions.src.filename))) {
  tasks.push('sass-tasks');
}

/**
 * ------------------------------------------------------------------------
 * Skin tasks
 * ------------------------------------------------------------------------
 */

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

if (fs.existsSync(path.join(skinOptions.src.dir, skinOptions.src.filename))) {
  tasks.push('skin-tasks');
}

/**
 * ------------------------------------------------------------------------
 * JS tasks
 * ------------------------------------------------------------------------
 */

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

if (fs.existsSync(path.join(jsOptions.src.dir, jsOptions.src.filename))) {
  tasks.push('js-tasks');
}

/**
 * ------------------------------------------------------------------------
 * Template tasks
 * ------------------------------------------------------------------------
 */

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

if (fs.existsSync(path.join(templateOptions.src.dir, templateOptions.src.filename))) {
  tasks.push('template-tasks');
}

/**
 * ------------------------------------------------------------------------
 * Clean tasks
 * ------------------------------------------------------------------------
 */

const cleanOptions = {
  src: [
    'src/dist',
    'dist'
  ]
}
registry(new cleanRegistry(cleanOptions));

/**
 * ------------------------------------------------------------------------
 * Task Definitions
 * ------------------------------------------------------------------------
 */

if (tasks.length === 0 || tasks.includes('template-tasks') === false) {
  tasks = function(cb) {
    console.log('Require ' + path.join(templateOptions.src.dir, templateOptions.src.filename));
    cb();
  }
}

const build = series('clean', tasks);

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
