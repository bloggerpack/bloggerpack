const fs = require('fs');
const {task, src, dest, series} = require('gulp');
const del = require('del');
const zip = require('gulp-zip');
const replace = require('gulp-replace');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const CHANGE = {
  starterBloggerpackVersion: function () {
    return src('starter/**/package.json')
      .pipe(replace('"bloggerpack": "^' + pkg.version_current + '"', '"bloggerpack": "^' + pkg.version + '"'))
      .pipe(dest('starter', {overwrite: true}))
  },
  starterDownloadVersion: function () {
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
  CHANGE.starterBloggerpackVersion,
  CHANGE.starterDownloadVersion,
  CHANGE.packageCurrentVersion
);

// ==============================================

const zipStarter = {
  blk: {
    name: 'blank',
    files: ['starter/blank/**/{*,.*}']
  },
  bs4: {
    name: 'bootstrap4',
    files: ['starter/bootstrap4/**/{*,.*}']
  }
};

const zipStarterTasks = Object.keys(zipStarter);

zipStarterTasks.forEach(function (taskName) {
  task(taskName, function () {
    zipStarter[taskName].files.push('!starter/**/node_modules/**');
    zipStarter[taskName].files.push('!starter/**/package-lock.json');

    return src(zipStarter[taskName].files)
      .pipe(zip(zipStarter[taskName].name + '-' + pkg.version + '.zip'))
      .pipe(dest('starter-zip'));
  });
});

function cleanZipStarter(cb) {
  del.sync('starter-zip');
  cb();
}

exports.zip_starter = series(
  cleanZipStarter,
  zipStarterTasks.map(function (name) {return name;})
);
