const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { task, src, dest, series } = require('gulp');
const zip = require('gulp-zip');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const ignore = require('gulp-ignore');
const through = require('through2');
const del = require('del');
const writeJsonFile = require('write-json-file');
const sortPackageJson = require('sort-package-json');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

/**
 * ------------------------------------------------------------------------
 * Changes
 * ------------------------------------------------------------------------
 */

const change = {
  startersBloggerpackVersion: function () {
    return src('starters/**/package.json')
      .pipe(replace('"bloggerpack": "^' + pkg.version_current + '"', '"bloggerpack": "^' + pkg.version + '"'))
      .pipe(dest('starters', { overwrite: true }));
  },
  startersDownloadVersion: function () {
    return src('starters/**/README.md')
      .pipe(replace(pkg.version_current, pkg.version))
      .pipe(dest('starters', { overwrite: true }));
  },
  packageCurrentVersion: function () {
    return src('package.json')
      .pipe(replace('"version_current": "' + pkg.version_current + '"', '"version_current": "' + pkg.version + '"'))
      .pipe(dest('.', { overwrite: true }));
  }
};

exports.change_version = series(
  change.startersBloggerpackVersion,
  change.startersDownloadVersion,
  change.packageCurrentVersion
);

/**
 * ------------------------------------------------------------------------
 * Zip
 * ------------------------------------------------------------------------
 */

const starters = {
  blk: {
    name: 'blank',
    files: ['starters/blank/**/{*,.*}']
  },
  bs4: {
    name: 'bootstrap4',
    files: ['starters/bootstrap4/**/{*,.*}']
  }
};

function createPkgJsonTemplate() {
  return through.obj(function (file, enc, cb) {
    if (file.basename === 'package.json') {
      var pkgJson = JSON.parse(file.contents.toString('utf8'));
      pkgJson.devDependencies.bloggerpack = pkg.version;
      pkgJson.devDependencies = sortPackageJson(pkgJson.devDependencies);
      writeJsonFile.sync(path.join(file.base, 'package.template.json'), pkgJson);
    }

    return cb(null, file);
  });
}

const zipStarters = Object.keys(starters);

zipStarters.forEach(function (taskName) {
  task(taskName, function () {
    starters[taskName].files.push('!starters/**/node_modules/**');
    starters[taskName].files.push('!starters/**/package-lock.json');

    return src(starters[taskName].files)
      .pipe(createPkgJsonTemplate())
      .pipe(ignore.exclude('package.json'))
      .pipe(rename(function (path) {
        if (path.basename === 'package.template') {
          path.basename = 'package';
        }
      }))
      .pipe(zip(starters[taskName].name + '-' + pkg.version + '.zip'))
      .pipe(dest('starters-zip'));
  });
});

function cleanStartersZip(cb) {
  del.sync('starters-zip');
  cb();
}

function cleanPkgTemplate(cb) {
  del.sync('starters/**/package.template.json');
  cb();
}

exports.zip_starters = series(
  cleanStartersZip,
  zipStarters.map(function (name) { return name; }),
  cleanPkgTemplate
);
