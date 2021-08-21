const { src, dest, series } = require('gulp');
const rename = require('gulp-rename');
const debug = require('gulp-debug');
const del = require('del');

const templateCompile = require('../../../lib/template-compiler');

function test_assetTag() {
  return src('src/asset-tag/index.xml', { allowEmpty: true })
    .pipe(templateCompile())
    .pipe(debug())
    .pipe(rename('asset-tag.xml'))
    .pipe(dest('output', { overwrite: true }));
}

function test_assetTag2() {
  return src('src/asset-tag/index-extends.xml', { allowEmpty: true })
    .pipe(templateCompile())
    .pipe(debug())
    .pipe(rename('asset-tag-extends.xml'))
    .pipe(dest('output', { overwrite: true }));
}

function test_extends() {
  return src('src/extends/index.xml', { allowEmpty: true })
    .pipe(templateCompile())
    .pipe(debug())
    .pipe(rename('extends.xml'))
    .pipe(dest('output', { overwrite: true }));
}

function test_path() {
  return src('src/path/index.xml', { allowEmpty: true })
    .pipe(templateCompile())
    .pipe(debug())
    .pipe(rename('path.xml'))
    .pipe(dest('output', { overwrite: true }));
}

function test_templateContext() {
  var options = {
    context: {
      var1: 'value 1',
      var2: 'value 2',
      var3: {
        a: 'value 3a',
        b: 'value 3b'
      }
    }
  };

  return src('src/template-context/index.xml', { allowEmpty: true })
    .pipe(templateCompile(options))
    .pipe(debug())
    .pipe(rename('template-context.xml'))
    .pipe(dest('output', { overwrite: true }));
}

function test_templateTag() {
  var options = {
    start: '<template>',
    end: '</template>'
  };

  return src('src/template-tag/index.xml', { allowEmpty: true })
    .pipe(templateCompile(options))
    .pipe(debug())
    .pipe(rename('template-tag.xml'))
    .pipe(dest('output', { overwrite: true }));
}

function clean(cb) {
  del.sync(['output']);
  cb();
}

// gulp build --gulpfile packages/bloggerpack/test/lib/template-compiler/gulpfile.js
exports.build = series(
  clean,
  test_assetTag,
  test_assetTag2,
  test_extends,
  test_path,
  test_templateContext,
  test_templateTag
);
