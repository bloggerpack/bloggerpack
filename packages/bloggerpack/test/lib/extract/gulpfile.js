const { src, dest, series } = require('gulp');
const rename = require('gulp-rename');
const debug = require('gulp-debug');
const del = require('del');

const extract = require('../../../lib/extract');

// ===

function test_optionDefaults() {
  return src('src/foo.txt', { allowEmpty: true })
    .pipe(extract())
    .pipe(debug())
    .pipe(rename({
      basename: 'option-defaults'
    }))
    .pipe(dest('output', { overwrite: true }));
}

function test_optionDefaultsEmpty() {
  return src('src/empty.txt', { allowEmpty: true })
    .pipe(extract())
    .pipe(debug())
    .pipe(rename({
      basename: 'option-defaults-empty'
    }))
    .pipe(dest('output', { overwrite: true }));
}

// ===

function test_optionTag() {
  const options = {
    start: '<tag-start>',
    end: '</tag-end>'
  };
  return src('src/custom-tag.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(rename({
      basename: 'option-tag'
    }))
    .pipe(dest('output', { overwrite: true }));
}

// ===

function test_optionHeader() {
  const options = {
    header: `
      /* Header: <filepath> */
    `
  };
  return src('src/foo.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(rename({
      basename: 'option-header'
    }))
    .pipe(dest('output', { overwrite: true }));
}

// ===

function test_optionFooter() {
  const options = {
    footer: `
      /* Footer: <filepath> */
    `
  };
  return src('src/foo.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(rename({
      basename: 'option-footer'
    }))
    .pipe(dest('output', { overwrite: true }));
}

// ===

function test_optionExtname() {
  const options = {
    extname: '.test'
  };
  return src('src/foo.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(rename({
      basename: 'option-extname'
    }))
    .pipe(dest('output', { overwrite: true }));
}

// ===

function test_optionEmptyMessage() {
  const options = {
    emptyMessage: `
      /* Extract is empty */
    `
  };
  return src('src/empty.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(rename({
      basename: 'option-emptymessage'
    }))
    .pipe(dest('output', { overwrite: true }));
}

// ===

function test_sameTag() {
  return src('src/same-tag.txt', { allowEmpty: true })
    .pipe(extract())
    .pipe(debug())
    .pipe(dest('output', { overwrite: true }));
}

// ===

function test_sameStartTag() {
  return src('src/same-start-tag.txt', { allowEmpty: true })
    .pipe(extract())
    .pipe(debug())
    .pipe(dest('output', { overwrite: true }));
}

// ===

function test_sameEndTag() {
  return src('src/same-end-tag.txt', { allowEmpty: true })
    .pipe(extract())
    .pipe(debug())
    .pipe(dest('output', { overwrite: true }));
}

// ===

function test_firstMatchToEnd() {
  return src('src/first-match-to-end.txt', { allowEmpty: true })
    .pipe(extract())
    .pipe(debug())
    .pipe(dest('output', { overwrite: true }));
}

// ===

function test_newline() {
  return src('src/newline.txt', { allowEmpty: true })
    .pipe(extract())
    .pipe(debug())
    .pipe(dest('output', { overwrite: true }));
}

// ===

function test_space() {
  return src('src/space.txt', { allowEmpty: true })
    .pipe(extract())
    .pipe(debug())
    .pipe(dest('output', { overwrite: true }));
}

// ===

function clean(cb) {
  del.sync(['output']);
  cb();
}

// gulp build --gulpfile packages/bloggerpack/test/lib/extract/gulpfile.js
exports.build = series(
  clean,
  test_optionDefaults,
  test_optionDefaultsEmpty,
  test_optionTag,
  test_optionHeader,
  test_optionFooter,
  test_optionExtname,
  test_optionEmptyMessage,
  test_sameTag,
  test_sameStartTag,
  test_sameEndTag,
  test_firstMatchToEnd,
  test_newline,
  test_space
);
