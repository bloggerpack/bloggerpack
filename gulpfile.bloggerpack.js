const fs = require('fs');
const path = require('path');
const {series, registry} = require('gulp');
const gulpWatch = require('gulp').watch;
const config = require('./config');

const tasks = [];

/**
 * ------------------------------------------------------------------------
 * Sass tasks
 * ------------------------------------------------------------------------
 */

const sassRegistry = require('./tasks/sass');
registry(new sassRegistry());

const sassTasks = series(
  'sass-extract-clean',
  'sass-extract',
  'sass-lint',
  'sass-compile'
);

if (fs.existsSync(path.join(config.sass.src.dir, config.sass.src.filename))) {
  tasks.push(sassTasks);
}

/**
 * ------------------------------------------------------------------------
 * Skin tasks
 * ------------------------------------------------------------------------
 */

const skinRegistry = require('./tasks/skin');
registry(new skinRegistry());

const skinTasks = series(
  'skin-extract-clean',
  'skin-extract',
  'skin-lint',
  'skin-compile'
);

if (fs.existsSync(path.join(config.skin.src.dir, config.skin.src.filename))) {
  tasks.push(skinTasks);
}

/**
 * ------------------------------------------------------------------------
 * JS tasks
 * ------------------------------------------------------------------------
 */

const jsRegistry = require('./tasks/js');
registry(new jsRegistry());

const jsTasks = series(
  'js-extract-clean',
  'js-extract',
  'js-lint',
  'js-compile'
);

if (fs.existsSync(path.join(config.js.src.dir, config.js.src.filename))) {
  tasks.push(jsTasks);
}

/**
 * ------------------------------------------------------------------------
 * Template tasks
 * ------------------------------------------------------------------------
 */

const templateRegistry = require('./tasks/template');
registry(new templateRegistry());

const templateTasks = series(
  'template-compile'
);

if (fs.existsSync(path.join(config.template.src.dir, config.template.src.filename))) {
  tasks.push(templateTasks);
}

/**
 * ------------------------------------------------------------------------
 * Clean tasks
 * ------------------------------------------------------------------------
 */

const cleanRegistry = require('./tasks/clean');
registry(new cleanRegistry());

/**
 * ------------------------------------------------------------------------
 * Task Definitions
 * ------------------------------------------------------------------------
 */

if (tasks.length === 0 || tasks.includes(templateTasks) === false) {
  const noTasks = function(cb) {
    console.log('Require ' + path.join(config.template.src.dir, config.template.src.filename));
    cb();
  }
  noTasks.displayName = 'no:tasks';
  tasks.splice(0, tasks.length);
  tasks.push(noTasks);
}

const build = series('clean', tasks);

function watch() {
  return gulpWatch([
    '**/*',
    '!' + path.join(config.sass.src.dir, '_sass-in-template.scss'),
    '!' + path.join(config.skin.src.dir, 'skin-in-template.css'),
    '!' + path.join(config.js.src.dir, 'js-in-template.js'),
    '!dist',
    '!node_modules',
    '!src/dist',
  ], build);
}

exports.build = build;
exports.watch = watch;
