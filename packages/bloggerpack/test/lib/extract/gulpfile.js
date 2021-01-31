const { src, dest, series } = require('gulp');
const debug = require('gulp-debug');
const del = require('del');

const extract = require('../../../lib/extract');

// ===

function test_defaults() {
  return src('src/defaults/**/*.txt', { allowEmpty: true })
    .pipe(extract())
    .pipe(debug())
    .pipe(dest('output/defaults', { overwrite: true }));
}

// ===

function test_tag() {
  const options = {
    start: '<example>',
    end: '</example>'
  };
  return src('src/tag/**/*.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(dest('output/tag', { overwrite: true }));
}

// ===

function test_header() {
  const options = {
    header: `
      /* Header: <filepath> */
    `
  };
  return src('src/header/**/*.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(dest('output/header', { overwrite: true }));
}

// ===

function test_footer() {
  const options = {
    footer: `
      /* Footer: <filepath> */
    `
  };
  return src('src/footer/**/*.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(dest('output/footer', { overwrite: true }));
}

// ===

function test_extname() {
  const options = {
    extname: '.test'
  };
  return src('src/extname/**/*.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(dest('output/extname', { overwrite: true }));
}

// ===

function test_emptyMessage() {
  const options = {
    emptyMessage: `
      /* Extract is empty */
    `
  };
  return src('src/empty-message/**/*.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(dest('output/empty-message', { overwrite: true }));
}

// ===

function test_sameTag() {
  const options = {
    start: '<example>',
    end: '</end>'
  };
  return src('src/same-tag/**/*.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(dest('output/same-tag', { overwrite: true }));
}

// ===

function test_sameStartTag() {
  const options = {
    start: '<example>',
    end: '</end>'
  };
  return src('src/same-start-tag/**/*.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(dest('output/same-start-tag', { overwrite: true }));
}

// ===

function test_sameEndTag() {
  const options = {
    start: '<example>',
    end: '</end>'
  };
  return src('src/same-end-tag/**/*.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(dest('output/same-end-tag', { overwrite: true }));
}

// ===

function test_firstMatchToEnd() {
  const options = {
    start: '<example>',
    end: '</end>'
  };
  return src('src/first-match-to-end/**/*.txt', { allowEmpty: true })
    .pipe(extract(options))
    .pipe(debug())
    .pipe(dest('output/first-match-to-end', { overwrite: true }));
}

// ===

function test_newline() {
  return src('src/newline/**/*.txt', { allowEmpty: true })
    .pipe(extract())
    .pipe(debug())
    .pipe(dest('output/newline', { overwrite: true }));
}

// ===

function test_space() {
  return src('src/space/**/*.txt', { allowEmpty: true })
    .pipe(extract())
    .pipe(debug())
    .pipe(dest('output/space', { overwrite: true }));
}

// ===

function clean(cb) {
  del.sync(['output']);
  cb();
}

// gulp build --gulpfile packages/bloggerpack/test/lib/extract/gulpfile.js
exports.build = series(
  clean,
  test_defaults,
  test_tag,
  test_header,
  test_footer,
  test_extname,
  test_emptyMessage,
  test_sameTag,
  test_sameStartTag,
  test_sameEndTag,
  test_firstMatchToEnd,
  test_newline,
  test_space
);
