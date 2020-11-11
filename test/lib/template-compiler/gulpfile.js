const {src, dest, series} = require('gulp');
const rename = require('gulp-rename');
const debug = require('gulp-debug');
const del = require('del');

const templateCompile = require('../../../lib/template-compiler');

function test_assetTag() {
  var options = {
    context: '',
    start: "<template test='template'>",
    end: '</template>'
  };

  return src('src/asset-tag/index.njk', {allowEmpty: true})
    .pipe(templateCompile(options))
    .pipe(rename('asset-tag.xml'))
    .pipe(debug())
    .pipe(dest('output', {overwrite: true}))
}

function test_extends() {
  var options = {
    context: '',
    start: "<template test='template'>",
    end: '</template>'
  };

  return src('src/extends/index.njk', {allowEmpty: true})
    .pipe(templateCompile(options))
    .pipe(rename('extends.xml'))
    .pipe(debug())
    .pipe(dest('output', {overwrite: true}))
}

function test_path() {
  var options = {
    context: '',
    start: "<template test='template'>",
    end: '</template>'
  };

  return src('src/path/index.njk', {allowEmpty: true})
    .pipe(templateCompile(options))
    .pipe(rename('path.xml'))
    .pipe(debug())
    .pipe(dest('output', {overwrite: true}))
}

function test_templateContext() {
  var options = {
    context: {
      var1: 'val1',
      var2: 'val2',
      var3: {
        var3a: 'val3a',
        var3b: 'val3b'
      }
    },
    start: "<template test='template'>",
    end: '</template>'
  };

  return src('src/template-context/index.njk', {allowEmpty: true})
    .pipe(templateCompile(options))
    .pipe(rename('template-context.xml'))
    .pipe(debug())
    .pipe(dest('output', {overwrite: true}))
}

function test_templateTag() {
  var options = {
    context: '',
    start: "<template test='template'>",
    end: '</template>'
  };

  return src('src/template-tag/index.njk', {allowEmpty: true})
    .pipe(templateCompile(options))
    .pipe(rename('template-tag.xml'))
    .pipe(debug())
    .pipe(dest('output', {overwrite: true}))
}

function clean(cb) {
  del.sync(['output']);
  cb();
}

// gulp build --gulpfile test/lib/template-compiler/gulpfile.js
exports.build = series(
  clean,
  test_assetTag,
  test_extends,
  test_path,
  test_templateContext,
  test_templateTag
);
