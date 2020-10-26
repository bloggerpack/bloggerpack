var fs = require('fs');
var should = require('should');

describe('lib', function() {
  describe('extract', function () {
    describe('js', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/js.js');
        var expected = fs.readFileSync('test/lib/extract/expected/js.js');
        String(file).should.equal(String(expected));
      });
    });
    describe('js empty', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/empty/js.js');
        var expected = fs.readFileSync('test/lib/extract/expected/empty/js.js');
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
    describe('sass empty', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/empty/sass.scss');
        var expected = fs.readFileSync('test/lib/extract/expected/empty/sass.scss');
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
    describe('skin empty', function () {
      it('should equal', function() {
        var file = fs.readFileSync('test/lib/extract/output/empty/skin.css');
        var expected = fs.readFileSync('test/lib/extract/expected/empty/skin.css');
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
