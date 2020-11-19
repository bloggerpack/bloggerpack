var fs = require('fs');
var should = require('should');

describe('lib', function() {
  describe('extract', function () {
    describe('diff-end-tag', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/diff-end-tag.txt');
        var expected = fs.readFileSync('test/lib/extract/expected/diff-end-tag.txt');
        String(file).should.equal(String(expected));
      });
    });
    describe('empty', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/empty.txt');
        var expected = fs.readFileSync('test/lib/extract/expected/empty.txt');
        String(file).should.equal(String(expected));
      });
    });
    describe('js', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/js.js');
        var expected = fs.readFileSync('test/lib/extract/expected/js.js');
        String(file).should.equal(String(expected));
      });
    });
    describe('newline', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/newline.txt');
        var expected = fs.readFileSync('test/lib/extract/expected/newline.txt');
        String(file).should.equal(String(expected));
      });
    });
    describe('no-options', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/no-options.txt');
        var expected = fs.readFileSync('test/lib/extract/expected/no-options.txt');
        String(file).should.equal(String(expected));
      });
    });
    describe('option-footer-only', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/option-footer-only.txt');
        var expected = fs.readFileSync('test/lib/extract/expected/option-footer-only.txt');
        String(file).should.equal(String(expected));
      });
    });
    describe('option-header-only', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/option-header-only.txt');
        var expected = fs.readFileSync('test/lib/extract/expected/option-header-only.txt');
        String(file).should.equal(String(expected));
      });
    });
    describe('option-no-empty-message', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/option-no-empty-message.txt');
        var expected = fs.readFileSync('test/lib/extract/expected/option-no-empty-message.txt');
        String(file).should.equal(String(expected));
      });
    });
    describe('same-end-tag', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/same-end-tag.txt');
        var expected = fs.readFileSync('test/lib/extract/expected/same-end-tag.txt');
        String(file).should.equal(String(expected));
      });
    });
    describe('sass', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/sass.scss');
        var expected = fs.readFileSync('test/lib/extract/expected/sass.scss');
        String(file).should.equal(String(expected));
      });
    });
    describe('skin', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/skin.css');
        var expected = fs.readFileSync('test/lib/extract/expected/skin.css');
        String(file).should.equal(String(expected));
      });
    });
  });

  describe('skin-import-beautifier', function () {
    it('should equal', function() {
      var file = fs.readFileSync('test/lib/skin-import-beautifier/output/example.css');
      var expected = fs.readFileSync('test/lib/skin-import-beautifier/expected/example.css');
      String(file).should.equal(String(expected));
    });
  });

  describe('template-compiler', function () {
    describe('asset-tag', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/template-compiler/output/asset-tag.xml');
        var expected = fs.readFileSync('test/lib/template-compiler/expected/asset-tag.xml');
        String(file).should.equal(String(expected));
      });
    });
    describe('extends', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/template-compiler/output/extends.xml');
        var expected = fs.readFileSync('test/lib/template-compiler/expected/extends.xml');
        String(file).should.equal(String(expected));
      });
    });
    describe('path', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/template-compiler/output/path.xml');
        var expected = fs.readFileSync('test/lib/template-compiler/expected/path.xml');
        String(file).should.equal(String(expected));
      });
    });
    describe('template-context', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/template-compiler/output/template-context.xml');
        var expected = fs.readFileSync('test/lib/template-compiler/expected/template-context.xml');
        String(file).should.equal(String(expected));
      });
    });
    describe('template-tag', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/template-compiler/output/template-tag.xml');
        var expected = fs.readFileSync('test/lib/template-compiler/expected/template-tag.xml');
        String(file).should.equal(String(expected));
      });
    });
  });

  describe('trim', function () {
    it('should equal', function() {
      var file = fs.readFileSync('test/lib/trim/output/example.txt');
      var expected = fs.readFileSync('test/lib/trim/expected/example.txt');
      String(file).should.equal(String(expected));
    });
  });
});
