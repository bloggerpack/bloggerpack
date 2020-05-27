const {src, dest, watch, series, parallel} = require('gulp');
const fs = require('fs');
const path = require('path');
const del = require('del');
const zip = require('gulp-zip');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const debug = require('gulp-debug');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const Changes = {
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
  Changes.templateBloggerpackVersion,
  Changes.templateDownloadVersion,
  Changes.packageCurrentVersion
);

const st1 = 'default-2-column';

const Zip = {
  cleanStarterZip: function (cb) {
    del.sync('starter-zip');
    cb();
  },
  st1: function () {
    return src(path.join('starter', st1, '**/{*,.*}'))
      .pipe(zip('archive.zip'))
      .pipe(rename(pkg.name + '-' + pkg.version + '_' + st1 + '.zip'))
      .pipe(dest('starter-zip'))
  }
};

exports.zip_starter = series(
  Zip.cleanStarterZip,
  Zip.st1
);
