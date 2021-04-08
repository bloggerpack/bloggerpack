const fs = require('fs');
const path = require('path');
const { registry, series } = require('gulp');
const gulpWatch = require('gulp').watch;
const minimist = require('minimist');
const chalk = require('chalk');

const knownOptions = {
  string: ['mode', 'sass', 'sass-lint', 'skin', 'skin-lint', 'js', 'js-lint', 'watch'],
  default: {
    mode: 'production',
    sass: true,
    skin: true,
    js: true,
    'sass-lint': true,
    'skin-lint': true,
    'js-lint': true,
    watch: false
  }
};
const flags = minimist(process.argv.slice(2), knownOptions);

const tasks = [];

/**
 * ------------------------------------------------------------------------
 * Sass Tasks
 * ------------------------------------------------------------------------
 */

const sass = require('./tasks/sass');
registry(new sass.registry());

const sassTasks = [
  'sass-extract',
  'sass-extract-plugins',
  'sass-lint',
  'sass-compile',
  'sass-minify'
];

if (!flags['sass-lint']) sassTasks.splice(sassTasks.indexOf('sass-lint'), 1);
if (flags.mode === 'development') sassTasks.splice(sassTasks.indexOf('sass-minify'), 1);
if (flags.sass) tasks.push(series(...sassTasks));

/**
 * ------------------------------------------------------------------------
 * Skin Tasks
 * ------------------------------------------------------------------------
 */

const skin = require('./tasks/skin');
registry(new skin.registry());

const skinTasks = [
  'skin-extract',
  'skin-extract-plugins',
  'skin-lint',
  'skin-compile'
];

if (!flags['skin-lint']) skinTasks.splice(skinTasks.indexOf('skin-lint'), 1);
if (flags.skin) tasks.push(series(...skinTasks));

/**
 * ------------------------------------------------------------------------
 * JS Tasks
 * ------------------------------------------------------------------------
 */

const js = require('./tasks/js');
registry(new js.registry());

const jsTasks = [
  'js-extract',
  'js-extract-plugins',
  'js-lint',
  'js-compile',
  'js-minify'
];

if (!flags['js-lint']) jsTasks.splice(jsTasks.indexOf('js-lint'), 1);
if (flags.mode === 'development') jsTasks.splice(jsTasks.indexOf('js-minify'), 1);
if (flags.js) tasks.push(series(...jsTasks));

/**
 * ------------------------------------------------------------------------
 * Template Tasks
 * ------------------------------------------------------------------------
 */

const template = require('./tasks/template');
registry(new template.registry());

const templateTasks = [
  'template-compile'
];
let hasTemplateTasks = false;

if (fs.existsSync(path.join(template.opts.src.dir, template.opts.src.filename))) {
  tasks.push(series(...templateTasks));
  hasTemplateTasks = true;
}

/**
 * ------------------------------------------------------------------------
 * Clean Tasks
 * ------------------------------------------------------------------------
 */

const clean = require('./tasks/clean');

const cleanOpts = {
  src: [
    path.join(process.cwd(), template.opts.build.dir)
  ]
};

if (flags.sass)
  cleanOpts.src.push(
    path.join(process.cwd(), sass.opts.extract.dir),
    path.join(process.cwd(), sass.opts.build.dir)
  );
if (flags.skin)
  cleanOpts.src.push(
    path.join(process.cwd(), skin.opts.extract.dir),
    path.join(process.cwd(), skin.opts.build.dir)
  );
if (flags.js)
  cleanOpts.src.push(
    path.join(process.cwd(), js.opts.extract.dir),
    path.join(process.cwd(), js.opts.build.dir)
  );

registry(new clean.registry(cleanOpts));

const negatedCleanSrc = clean.opts.src.map(src => {
  return '!' + path.relative(process.cwd(), src);
});

/**
 * ------------------------------------------------------------------------
 * Task Definitions
 * ------------------------------------------------------------------------
 */

if (tasks.length === 0 || !hasTemplateTasks) {
  const errorTasks = (cb) => {
    cb(new Error(
      chalk.red(
        `You must provide ${chalk.cyan(path.join(template.opts.src.dir, template.opts.src.filename))}`
      )
    ));
  };
  errorTasks.displayName = 'error:tasks';
  tasks.splice(0, tasks.length);
  tasks.push(errorTasks);
} else {
  tasks.unshift('clean');
}

const build = series(tasks);

function watch() {
  return gulpWatch([
    '**/*',
    '!' + sass.opts.extract.dir,
    '!' + skin.opts.extract.dir,
    '!' + js.opts.extract.dir,
    ...negatedCleanSrc,
    '!node_modules'
  ], build);
}

exports.build = build;
exports.watch = watch;
