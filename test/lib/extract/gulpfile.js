const {src, dest, series} = require('gulp');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const del = require('del');

const extract = require('../../../lib/extract');

function test_optionHeaderOnly() {
  var options = {
    start: '',
    end: '',
    header: '/* Header (<filepath>) */',
    footer: '',
    emptyMessage: '/* Extract is empty */'
  };

  return src([
      'src/example-empty1.njk',
      'src/example-empty2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(debug())
    .pipe(concat('option-header-only.txt'))
    .pipe(dest('output', {overwrite: true}));
}

function test_optionFooterOnly() {
  var options = {
    start: '',
    end: '',
    header: '',
    footer: '/* Footer */',
    emptyMessage: '/* Extract is empty */'
  };

  return src([
      'src/example-empty1.njk',
      'src/example-empty2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(debug())
    .pipe(concat('option-footer-only.txt'))
    .pipe(dest('output', {overwrite: true}));
}

function test_optionNoEmptyMessage() {
  var options = {
    start: '',
    end: '',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: ''
  };

  return src([
      'src/example-empty1.njk',
      'src/example-empty2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(debug())
    .pipe(concat('option-no-empty-message.txt'))
    .pipe(dest('output', {overwrite: true}));
}

function test_noOptions() {
  return src([
      'src/example-empty1.njk',
      'src/example-empty2.njk'
    ], {allowEmpty: true})
    .pipe(extract())
    .pipe(debug())
    .pipe(concat('no-options.txt'))
    .pipe(dest('output', {overwrite: true}));
}

function test_sameEndTag() {
  var options = {
    start: '<the-tag>',
    end: '</end>',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* Extract is empty */'
  };

  return src([
      'src/example-same-end-tag.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(debug())
    .pipe(concat('same-end-tag.txt'))
    .pipe(dest('output', {overwrite: true}));
}

function test_diffEndTag() {
  var options = {
    start: '<the-tag>',
    end: '</the-tag>',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* Extract is empty */'
  };

  return src([
      'src/example-diff-end-tag.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(debug())
    .pipe(concat('diff-end-tag.txt'))
    .pipe(dest('output', {overwrite: true}));
}

function test_empty() {
  var options = {
    start: '',
    end: '',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* Extract is empty */'
  };

  return src([
      'src/example-empty1.njk',
      'src/example-empty2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(debug())
    .pipe(concat('empty.txt'))
    .pipe(dest('output', {overwrite: true}));
}

function test_sass() {
  var options = {
    start: "<style test='sass'>",
    end: '</style>',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* Sass-in-Template is empty */'
  };

  return src([
      'src/example1.njk',
      'src/example2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(debug())
    .pipe(concat('sass.scss'))
    .pipe(dest('output', {overwrite: true}));
}

function test_skin() {
  var options = {
    start: "<style test='skin'>",
    end: '</style>',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* Skin-in-Template is empty */'
  };

  return src([
      'src/example1.njk',
      'src/example2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(debug())
    .pipe(concat('skin.css'))
    .pipe(dest('output', {overwrite: true}));
}

function test_js() {
  var options = {
    start: "<script test='js'>",
    end: '</script>',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* JS-in-Template is empty */'
  };

  return src([
      'src/example1.njk',
      'src/example2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(debug())
    .pipe(concat('js.js'))
    .pipe(dest('output', {overwrite: true}));
}

function clean(cb) {
  del.sync(['output']);
  cb();
}

// gulp build --gulpfile test/lib/extract/gulpfile.js
exports.build = series(
  clean,
  test_optionHeaderOnly,
  test_optionFooterOnly,
  test_optionNoEmptyMessage,
  test_noOptions,
  test_sameEndTag,
  test_diffEndTag,
  test_empty,
  test_sass,
  test_skin,
  test_js
);
