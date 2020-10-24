const {src, dest, series} = require('gulp');
const debug = require('gulp-debug');
const del = require('del');

const skinImportBeautifier =  require('../../../lib/skin-import-beautifier');

function test() {
  return src([
      'src/example.css'
    ], {allowEmpty: true})
    .pipe(skinImportBeautifier())
    .pipe(debug())
    .pipe(dest('output', {overwrite: true}))
}

function clean(cb) {
  del.sync(['output']);
  cb();
}

// gulp build --gulpfile test/lib/skin-import-beautifier/gulpfile.js
exports.build = series(clean, test);
