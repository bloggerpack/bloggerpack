const {src, dest, series} = require('gulp');
const debug = require('gulp-debug');
const del = require('del');

const trim = require('../../../lib/trim');

function test() {
  return src([
      'src/example.txt'
    ], {allowEmpty: true})
    .pipe(trim())
    .pipe(debug())
    .pipe(dest('output', {overwrite: true}))
}

function clean(cb) {
  del.sync(['output']);
  cb();
}

// gulp build --gulpfile test/lib/trim/gulpfile.js
exports.build = series(clean, test);
