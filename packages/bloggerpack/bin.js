#!/usr/bin/env node
'use strict';
const commander = require('commander');
const spawn = require('cross-spawn');
const pkg = require('./package.json');

const program = new commander.Command();

program
  .storeOptionsAsProperties(true)
  .passCommandToAction(false);

program
  .name('bloggerpack')
  .usage('[options]')
  .option('--mode <mode>', 'set mode: "production" or "development" (no minification)', 'production')
  .option('--no-sass', 'exclude Sass from compilation')
  .option('--no-sass-lint', 'disable Sass linter')
  .option('--no-skin', 'exclude Skin from compilation')
  .option('--no-skin-lint', 'disable Skin linter')
  .option('--no-js', 'exclude JS from compilation')
  .option('--no-js-lint', 'disable JS linter')
  .option('--watch', 'watches the source files and automatically building them whenever you save')
  .option('--gulpfile <gulpfile>', 'custom gulpfile')
  .option('--cwd <path>', 'custom CWD')
  .option('-v, --version', 'show version number', pkg.version)
  .parse(process.argv);

const opts = [];
const gulpfile = program.gulpfile ? program.gulpfile : 'node_modules/bloggerpack/gulpfile.js';
const cwd = program.cwd ? program.cwd : process.cwd();

if (program.mode === 'production') opts.push('--mode', 'production');
if (program.mode === 'development') opts.push('--mode', 'development');
if (program.mode !== 'production' && program.mode !== 'development') opts.push('--mode', 'production');
if (!program.sass) opts.push('--no-sass');
if (!program.sassLint) opts.push('--no-sass-lint');
if (!program.skin) opts.push('--no-skin');
if (!program.skinLint) opts.push('--no-skin-lint');
if (!program.js) opts.push('--no-js');
if (!program.jsLint) opts.push('--no-js-lint');
if (program.watch) opts.push('--watch');
opts.push('--gulpfile', gulpfile);
opts.push('--cwd', cwd);

if (!program.watch) {
  spawn('gulp', ['build', '--color', ...opts], {
    stdio: 'inherit',
    cwd: cwd
  });
} else {
  spawn('gulp', ['watch', '--color', ...opts], {
    stdio: 'inherit',
    cwd: cwd
  });
}
