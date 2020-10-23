const {src, dest, series} = require('gulp');
const rename = require('gulp-rename');
const debug = require('gulp-debug');
const del = require('del');

const templateCompile = require('../../lib/template-compiler');

function test1() {
  var options = {
    context: '',
    start: '::template::',
    end: '::endtemplate::'
  };

  return src('src/asset-tag/index.njk', {allowEmpty: true})
    .pipe(templateCompile(options))
    .pipe(debug())
    .pipe(rename('asset-tag.xml'))
    .pipe(dest('output', {overwrite: true}))
}

function test2() {
  var options = {
    context: '',
    start: '::template::',
    end: '::endtemplate::'
  };

  return src('src/extends/index.njk', {allowEmpty: true})
    .pipe(templateCompile(options))
    .pipe(debug())
    .pipe(rename('extends.xml'))
    .pipe(dest('output', {overwrite: true}))
}

function test3() {
  var options = {
    context: {
      var1: 'val1',
      var2: 'val2',
      var3: {
        var3a: 'val3a',
        var3b: 'val3b'
      }
    },
    start: '::template::',
    end: '::endtemplate::'
  };

  return src('src/template-context/index.njk', {allowEmpty: true})
    .pipe(templateCompile(options))
    .pipe(debug())
    .pipe(rename('template-context.xml'))
    .pipe(dest('output', {overwrite: true}))
}

function test4() {
  var options = {
    context: '',
    start: '::template::',
    end: '::endtemplate::'
  };

  return src('src/template-tag/index.njk', {allowEmpty: true})
    .pipe(templateCompile(options))
    .pipe(debug())
    .pipe(rename('template-tag.xml'))
    .pipe(dest('output', {overwrite: true}))
}

function clean(cb) {
  del.sync(['output']);
  cb();
}

// gulp build --gulpfile lib-test/template-compiler/gulpfile.js
exports.build = series(
  clean,
  test1,
  test2,
  test3,
  test4
);
