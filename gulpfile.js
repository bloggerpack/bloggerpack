const {src, dest, watch, series, parallel} = require('gulp');
const fs = require('fs');
const path = require('path');
const del = require('del');
const zip = require('gulp-zip');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const debug = require('gulp-debug');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const CHANGES = {
  templateBloggerpackVersion: function () {
    return src('starter/**/package.json')
      .pipe(replace('"bloggerpack": "^' + pkg.version_current + '"', '"bloggerpack": "^' + pkg.version + '"'))
      .pipe(dest('starter', {overwrite: true}))
  },
  templateDownloadVersion: function () {
    return src('starter/**/README.md')
      .pipe(replace(pkg.version_current, pkg.version))
      .pipe(dest('starter', {overwrite: true}))
  },
  packageCurrentVersion: function () {
    return src('package.json')
      .pipe(replace('"version_current": "' + pkg.version_current + '"', '"version_current": "' + pkg.version + '"'))
      .pipe(dest('.', {overwrite: true}))
  }
};

exports.change_version = series(
  CHANGES.templateBloggerpackVersion,
  CHANGES.templateDownloadVersion,
  CHANGES.packageCurrentVersion
);

const blk = 'blank';
const bs4 = 'bootstrap4';

function zipTheme(name) {
  return src(path.join('starter', name, '**/{*,.*}'))
    .pipe(zip('archive.zip'))
    .pipe(rename(name + '-(' + pkg.name + '-' + pkg.version + ').zip'))
    .pipe(dest('starter-zip'))
}

const ZIP = {
  cleanStarter: function (cb) {
    del.sync('starter-zip');
    cb();
  },
  blk: function () {
    return zipTheme(blk);
  },
  bs4: function () {
    return zipTheme(bs4);
  }
};

exports.zip_starter = series(
  ZIP.cleanStarter,
  ZIP.blk,
  ZIP.bs4
);
