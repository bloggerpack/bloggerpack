#!/usr/bin/env node

const fs = require('fs-extra');
const spawn = require('child_process').spawn;
const argv = process.argv.slice(2);
const cwd = process.cwd();
const gulpfile = 'node_modules/bloggerpack/gulpfile.bloggerpack.js';

// build
if (argv[0] === 'build' && argv.length === 1) {
  spawn('gulp', ['build', '--cwd', cwd, '--gulpfile', gulpfile], {
    stdio: 'inherit',
    cwd: cwd
  });
}
// watch
else if (argv[0] === 'watch' && argv.length === 1) {
  spawn('gulp', ['watch', '--cwd', cwd, '--gulpfile', gulpfile], {
    stdio: 'inherit',
    cwd: cwd
  });
} else {
  console.error('Command error.');
  process.exit();
}
