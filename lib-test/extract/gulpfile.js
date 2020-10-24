const {src, dest, series} = require('gulp');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const del = require('del');

const extract = require('../../lib/extract');

function test_sass() {
  var options = {
    start: '>>>sass',
    end: '>>>endsass',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* Sass-in-Template is empty */'
  };

  return src([
      'src/example1.njk',
      'src/example2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(concat('sass.scss'))
    .pipe(debug())
    .pipe(dest('output', {overwrite: true}));
}

function test_empty_sass() {
  var options = {
    start: '>>>sass',
    end: '>>>endsass',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* Sass-in-Template is empty */'
  };

  return src([
      'src/example-empty1.njk',
      'src/example-empty2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(concat('sass.scss'))
    .pipe(debug())
    .pipe(dest('output/empty', {overwrite: true}));
}

function test_skin() {
  var options = {
    start: '>>>skin',
    end: '>>>endskin',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* Skin-in-Template is empty */'
  };

  return src([
      'src/example1.njk',
      'src/example2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(concat('skin.css'))
    .pipe(debug())
    .pipe(dest('output', {overwrite: true}));
}

function test_empty_skin() {
  var options = {
    start: '>>>skin',
    end: '>>>endskin',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* Skin-in-Template is empty */'
  };

  return src([
      'src/example-empty1.njk',
      'src/example-empty2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(concat('skin.css'))
    .pipe(debug())
    .pipe(dest('output/empty', {overwrite: true}));
}

function test_js() {
  var options = {
    start: '>>>js',
    end: '>>>endjs',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* JS-in-Template is empty */'
  };

  return src([
      'src/example1.njk',
      'src/example2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(concat('js.js'))
    .pipe(debug())
    .pipe(dest('output', {overwrite: true}));
}

function test_empty_js() {
  var options = {
    start: '>>>js',
    end: '>>>endjs',
    header: '/* Header (<filepath>) */',
    footer: '/* Footer */',
    emptyMessage: '/* JS-in-Template is empty */'
  };

  return src([
      'src/example-empty1.njk',
      'src/example-empty2.njk'
    ], {allowEmpty: true})
    .pipe(extract(options))
    .pipe(concat('js.js'))
    .pipe(debug())
    .pipe(dest('output/empty', {overwrite: true}));
}

function clean(cb) {
  del.sync(['output']);
  cb();
}

// gulp build --gulpfile lib-test/extract/gulpfile.js
exports.build = series(
  clean,
  test_sass,
  test_skin,
  test_js,
  test_empty_sass,
  test_empty_skin,
  test_empty_js
);
