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
    return src('templates/**/package.json')
      .pipe(replace('"bloggerpack": "^' + pkg.version_current + '"', '"bloggerpack": "^' + pkg.version + '"'))
      .pipe(dest('templates', {overwrite: true}))
  },
  templateDownloadVersion: function () {
    return src('templates/**/README.md')
      .pipe(replace(pkg.version_current, pkg.version))
      .pipe(dest('templates', {overwrite: true}))
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

const t1 = '2-column';

const Zip = {
  cleanTemplatesZip: function (cb) {
    del.sync('templates-zip');
    cb();
  },
  t1: function () {
    return src(path.join('templates', t1, '**/{*,.*}'))
      .pipe(zip('archive.zip'))
      .pipe(rename(pkg.name + '-' + pkg.version + '___' + t1 + '.zip'))
      .pipe(dest('templates-zip'))
  }
};

exports.zip_templates = series(
  Zip.cleanTemplatesZip,
  Zip.t1
);
