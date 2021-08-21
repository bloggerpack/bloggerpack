const fs = require('fs');
const should = require('should');

describe('lib', function() {
  describe('extract', function () {
    describe('first-match-to-end', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/first-match-to-end.txt');
        const xFile      = fs.readFileSync('test/lib/extract/expected/first-match-to-end.txt');
        String(file).should.equal(String(xFile));
      });
    });
    describe('newline', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/newline.txt');
        const xFile      = fs.readFileSync('test/lib/extract/expected/newline.txt');
        String(file).should.equal(String(xFile));
      });
    });
    describe('option-defaults', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/option-defaults.txt');
        const fileEmpty  = fs.readFileSync('test/lib/extract/output/option-defaults-empty.txt');
        const xFile      = fs.readFileSync('test/lib/extract/expected/option-defaults.txt');
        const xFileEmpty = fs.readFileSync('test/lib/extract/expected/option-defaults-empty.txt');
        String(file).should.equal(String(xFile));
        String(fileEmpty).should.equal(String(xFileEmpty));
      });
    });
    describe('option-emptymessage', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/option-emptymessage.txt');
        const xFile      = fs.readFileSync('test/lib/extract/expected/option-emptymessage.txt');
        String(file).should.equal(String(xFile));
      });
    });
    describe('option-extname', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/option-extname.test');
        const xFile      = fs.readFileSync('test/lib/extract/expected/option-extname.test');
        String(file).should.equal(String(xFile));
      });
    });
    describe('option-footer', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/option-footer.txt');
        const xFile      = fs.readFileSync('test/lib/extract/expected/option-footer.txt');
        String(file).should.equal(String(xFile));
      });
    });
    describe('option-header', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/option-header.txt');
        const xFile      = fs.readFileSync('test/lib/extract/expected/option-header.txt');
        String(file).should.equal(String(xFile));
      });
    });
    describe('option-tag', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/option-tag.txt');
        const xFile      = fs.readFileSync('test/lib/extract/expected/option-tag.txt');
        String(file).should.equal(String(xFile));
      });
    });
    describe('same-end-tag', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/same-end-tag.txt');
        const xFile      = fs.readFileSync('test/lib/extract/expected/same-end-tag.txt');
        String(file).should.equal(String(xFile));
      });
    });
    describe('same-start-tag', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/same-start-tag.txt');
        const xFile      = fs.readFileSync('test/lib/extract/expected/same-start-tag.txt');
        String(file).should.equal(String(xFile));
      });
    });
    describe('same-tag', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/same-tag.txt');
        const xFile      = fs.readFileSync('test/lib/extract/expected/same-tag.txt');
        String(file).should.equal(String(xFile));
      });
    });
    describe('space', function () {
      it('should equal', function() {
        const file       = fs.readFileSync('test/lib/extract/output/space.txt');
        const xFile      = fs.readFileSync('test/lib/extract/expected/space.txt');
        String(file).should.equal(String(xFile));
      });
    });
  }); // end extract

  describe('skin-import-beautifier', function () {
    it('should equal', function() {
      const file = fs.readFileSync('test/lib/skin-import-beautifier/output/foo.css');
      const xFile = fs.readFileSync('test/lib/skin-import-beautifier/expected/foo.css');
      String(file).should.equal(String(xFile));
    });
  }); // end skin-import-beautifier

  describe('template-compiler', function () {
    describe('asset-tag', function () {
      it('should equal', function() {
        const file1 = fs.readFileSync('test/lib/template-compiler/output/asset-tag.xml');
        const file2 = fs.readFileSync('test/lib/template-compiler/output/asset-tag-extends.xml');
        const xFile1 = fs.readFileSync('test/lib/template-compiler/expected/asset-tag.xml');
        const xFile2 = fs.readFileSync('test/lib/template-compiler/expected/asset-tag-extends.xml');
        String(file1).should.equal(String(xFile1));
        String(file2).should.equal(String(xFile2));
      });
    });
    describe('extends', function () {
      it('should equal', function() {
        const file = fs.readFileSync('test/lib/template-compiler/output/extends.xml');
        const xFile = fs.readFileSync('test/lib/template-compiler/expected/extends.xml');
        String(file).should.equal(String(xFile));
      });
    });
    describe('path', function () {
      it('should equal', function() {
        const file = fs.readFileSync('test/lib/template-compiler/output/path.xml');
        const xFile = fs.readFileSync('test/lib/template-compiler/expected/path.xml');
        String(file).should.equal(String(xFile));
      });
    });
    describe('template-context', function () {
      it('should equal', function() {
        const file = fs.readFileSync('test/lib/template-compiler/output/template-context.xml');
        const xFile = fs.readFileSync('test/lib/template-compiler/expected/template-context.xml');
        String(file).should.equal(String(xFile));
      });
    });
    describe('template-tag', function () {
      it('should equal', function() {
        const file = fs.readFileSync('test/lib/template-compiler/output/template-tag.xml');
        const xFile = fs.readFileSync('test/lib/template-compiler/expected/template-tag.xml');
        String(file).should.equal(String(xFile));
      });
    });
  }); // end template-compiler

  describe('trim', function () {
    it('should equal', function() {
      const file = fs.readFileSync('test/lib/trim/output/foo.txt');
      const xFile = fs.readFileSync('test/lib/trim/expected/foo.txt');
      String(file).should.equal(String(xFile));
    });
  }); // end trim
});
