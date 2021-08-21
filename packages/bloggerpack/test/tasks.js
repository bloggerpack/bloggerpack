const fs = require('fs');
const should = require('should');

describe('tasks', function () {
  describe('js', function () {
    describe('js-in-template', function () {
      it('should equal', function() {
        const file1 = fs.readFileSync('test/tasks/js/src/js/js-in-template/template-parts/foo.js');
        const file2 = fs.readFileSync('test/tasks/js/src/js/js-in-template/template-parts/bar.js');
        const file3 = fs.readFileSync('test/tasks/js/src/js/js-in-template/template-parts/baz.js');
        const xFile1 = fs.readFileSync('test/tasks/js/expected/js-in-template/template-parts/foo.js');
        const xFile2 = fs.readFileSync('test/tasks/js/expected/js-in-template/template-parts/bar.js');
        const xFile3 = fs.readFileSync('test/tasks/js/expected/js-in-template/template-parts/baz.js');
        String(file1).should.equal(String(xFile1));
        String(file2).should.equal(String(xFile2));
        String(file3).should.equal(String(xFile3));
      });
    });
    describe('dist', function () {
      describe('script', function () {
        it('should equal', function() {
          const file = fs.readFileSync('test/tasks/js/src/js/dist/script.js');
          const xFile = fs.readFileSync('test/tasks/js/expected/dist/script.js');
          String(file).should.equal(String(xFile));
        });
      });
      describe('script-foo', function () {
        it('should equal', function() {
          const file = fs.readFileSync('test/tasks/js/src/js/dist/script-foo.js');
          const xFile = fs.readFileSync('test/tasks/js/expected/dist/script-foo.js');
          String(file).should.equal(String(xFile));
        });
      });
      describe('script-bar-baz', function () {
        it('should equal', function() {
          const file = fs.readFileSync('test/tasks/js/src/js/dist/script-bar-baz.js');
          const xFile = fs.readFileSync('test/tasks/js/expected/dist/script-bar-baz.js');
          String(file).should.equal(String(xFile));
        });
      });
    });
  }); // end js

  describe('sass', function () {
    describe('sass-in-template', function () {
      it('should equal', function() {
        const file1 = fs.readFileSync('test/tasks/sass/src/sass/sass-in-template/template-parts/foo.scss');
        const file2 = fs.readFileSync('test/tasks/sass/src/sass/sass-in-template/template-parts/bar.scss');
        const file3 = fs.readFileSync('test/tasks/sass/src/sass/sass-in-template/template-parts/baz.scss');
        const xFile1 = fs.readFileSync('test/tasks/sass/expected/sass-in-template/template-parts/foo.scss');
        const xFile2 = fs.readFileSync('test/tasks/sass/expected/sass-in-template/template-parts/bar.scss');
        const xFile3 = fs.readFileSync('test/tasks/sass/expected/sass-in-template/template-parts/baz.scss');
        String(file1).should.equal(String(xFile1));
        String(file2).should.equal(String(xFile2));
        String(file3).should.equal(String(xFile3));
      });
    });
    describe('dist', function () {
      describe('style', function () {
        it('should equal', function() {
          const file = fs.readFileSync('test/tasks/sass/src/sass/dist/style.css');
          const xFile = fs.readFileSync('test/tasks/sass/expected/dist/style.css');
          String(file).should.equal(String(xFile));
        });
      });
      describe('style-foo', function () {
        it('should equal', function() {
          const file = fs.readFileSync('test/tasks/sass/src/sass/dist/style-foo.css');
          const xFile = fs.readFileSync('test/tasks/sass/expected/dist/style-foo.css');
          String(file).should.equal(String(xFile));
        });
      });
      describe('style-bar-baz', function () {
        it('should equal', function() {
          const file = fs.readFileSync('test/tasks/sass/src/sass/dist/style-bar-baz.css');
          const xFile = fs.readFileSync('test/tasks/sass/expected/dist/style-bar-baz.css');
          String(file).should.equal(String(xFile));
        });
      });
    });
  }); // end sass

  describe('skin', function () {
    describe('skin-in-template', function () {
      it('should equal', function() {
        const file1 = fs.readFileSync('test/tasks/skin/src/skin/skin-in-template/template-parts/foo.css');
        const file2 = fs.readFileSync('test/tasks/skin/src/skin/skin-in-template/template-parts/bar.css');
        const file3 = fs.readFileSync('test/tasks/skin/src/skin/skin-in-template/template-parts/baz.css');
        const xFile1 = fs.readFileSync('test/tasks/skin/expected/skin-in-template/template-parts/foo.css');
        const xFile2 = fs.readFileSync('test/tasks/skin/expected/skin-in-template/template-parts/bar.css');
        const xFile3 = fs.readFileSync('test/tasks/skin/expected/skin-in-template/template-parts/baz.css');
        String(file1).should.equal(String(xFile1));
        String(file2).should.equal(String(xFile2));
        String(file3).should.equal(String(xFile3));
      });
    });
    describe('dist', function () {
      describe('style', function () {
        it('should equal', function() {
          const file = fs.readFileSync('test/tasks/skin/src/skin/dist/style.css');
          const xFile = fs.readFileSync('test/tasks/skin/expected/dist/style.css');
          String(file).should.equal(String(xFile));
        });
      });
      describe('style-foo', function () {
        it('should equal', function() {
          const file = fs.readFileSync('test/tasks/skin/src/skin/dist/style-foo.css');
          const xFile = fs.readFileSync('test/tasks/skin/expected/dist/style-foo.css');
          String(file).should.equal(String(xFile));
        });
      });
      describe('style-bar-baz', function () {
        it('should equal', function() {
          const file = fs.readFileSync('test/tasks/skin/src/skin/dist/style-bar-baz.css');
          const xFile = fs.readFileSync('test/tasks/skin/expected/dist/style-bar-baz.css');
          String(file).should.equal(String(xFile));
        });
      });
    });
  }); // end skin

  describe('template', function () {
    describe('theme', function () {
      it('should equal', function() {
        const file = fs.readFileSync('test/tasks/template/dist/theme.xml');
        const xFile = fs.readFileSync('test/tasks/template/expected/theme.xml');
        String(file).should.equal(String(xFile));
      });
    });
    describe('theme-foo', function () {
      it('should equal', function() {
        const file = fs.readFileSync('test/tasks/template/dist/theme-foo.xml');
        const xFile = fs.readFileSync('test/tasks/template/expected/theme-foo.xml');
        String(file).should.equal(String(xFile));
      });
    });
    describe('theme-bar-baz', function () {
      it('should equal', function() {
        const file = fs.readFileSync('test/tasks/template/dist/theme-bar-baz.xml');
        const xFile = fs.readFileSync('test/tasks/template/expected/theme-bar-baz.xml');
        String(file).should.equal(String(xFile));
      });
    });
  }); // end template
});
