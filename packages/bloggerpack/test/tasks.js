const fs = require('fs');
const should = require('should');

describe('tasks', function () {
  describe('js', function () {
    describe('js-in-template', function () {
      it('should equal', function() {
        const file1 = fs.readFileSync('test/tasks/js/src/js/js-in-template/template-parts/example1.js');
        const file2 = fs.readFileSync('test/tasks/js/src/js/js-in-template/template-parts/example2.js');
        const file3 = fs.readFileSync('test/tasks/js/src/js/js-in-template/template-parts/example3.js');
        const xFile1 = fs.readFileSync('test/tasks/js/expected/js-in-template/template-parts/example1.js');
        const xFile2 = fs.readFileSync('test/tasks/js/expected/js-in-template/template-parts/example2.js');
        const xFile3 = fs.readFileSync('test/tasks/js/expected/js-in-template/template-parts/example3.js');
        String(file1).should.equal(String(xFile1));
        String(file2).should.equal(String(xFile2));
        String(file3).should.equal(String(xFile3));
      });
    });
    describe('dist', function () {
      it('should equal', function() {
        const file = fs.readFileSync('test/tasks/js/src/js/dist/script.js');
        const xFile = fs.readFileSync('test/tasks/js/expected/dist/script.js');
        String(file).should.equal(String(xFile));
      });
    });
  }); // end js

  describe('sass', function () {
    describe('sass-in-template', function () {
      it('should equal', function() {
        const file1 = fs.readFileSync('test/tasks/sass/src/sass/sass-in-template/template-parts/example1.scss');
        const file2 = fs.readFileSync('test/tasks/sass/src/sass/sass-in-template/template-parts/example2.scss');
        const file3 = fs.readFileSync('test/tasks/sass/src/sass/sass-in-template/template-parts/example3.scss');
        const xFile1 = fs.readFileSync('test/tasks/sass/expected/sass-in-template/template-parts/example1.scss');
        const xFile2 = fs.readFileSync('test/tasks/sass/expected/sass-in-template/template-parts/example2.scss');
        const xFile3 = fs.readFileSync('test/tasks/sass/expected/sass-in-template/template-parts/example3.scss');
        String(file1).should.equal(String(xFile1));
        String(file2).should.equal(String(xFile2));
        String(file3).should.equal(String(xFile3));
      });
    });
    describe('dist', function () {
      it('should equal', function() {
        const file = fs.readFileSync('test/tasks/sass/src/sass/dist/style.css');
        const xFile = fs.readFileSync('test/tasks/sass/expected/dist/style.css');
        String(file).should.equal(String(xFile));
      });
    });
  }); // end sass

  describe('skin', function () {
    describe('skin-in-template', function () {
      it('should equal', function() {
        const file1 = fs.readFileSync('test/tasks/skin/src/skin/skin-in-template/template-parts/example1.css');
        const file2 = fs.readFileSync('test/tasks/skin/src/skin/skin-in-template/template-parts/example2.css');
        const file3 = fs.readFileSync('test/tasks/skin/src/skin/skin-in-template/template-parts/example3.css');
        const xFile1 = fs.readFileSync('test/tasks/skin/expected/skin-in-template/template-parts/example1.css');
        const xFile2 = fs.readFileSync('test/tasks/skin/expected/skin-in-template/template-parts/example2.css');
        const xFile3 = fs.readFileSync('test/tasks/skin/expected/skin-in-template/template-parts/example3.css');
        String(file1).should.equal(String(xFile1));
        String(file2).should.equal(String(xFile2));
        String(file3).should.equal(String(xFile3));
      });
    });
    describe('dist', function () {
      it('should equal', function() {
        const file = fs.readFileSync('test/tasks/skin/src/skin/dist/style.css');
        const xFile = fs.readFileSync('test/tasks/skin/expected/dist/style.css');
        String(file).should.equal(String(xFile));
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
