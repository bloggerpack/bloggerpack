const fs = require('fs');
const should = require('should');

describe('lib', function() {
  describe('extract', function () {
    describe('defaults', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/defaults/foo.txt');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/defaults/empty.txt');
        const bar       = fs.readFileSync('test/lib/extract/output/defaults/dir/bar.txt');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/defaults/dir/empty.txt');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/defaults/foo.txt');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/defaults/empty.txt');
        const xBar      = fs.readFileSync('test/lib/extract/expected/defaults/dir/bar.txt');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/defaults/dir/empty.txt');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
    describe('empty-message', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/empty-message/foo.txt');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/empty-message/empty.txt');
        const bar       = fs.readFileSync('test/lib/extract/output/empty-message/dir/bar.txt');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/empty-message/dir/empty.txt');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/empty-message/foo.txt');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/empty-message/empty.txt');
        const xBar      = fs.readFileSync('test/lib/extract/expected/empty-message/dir/bar.txt');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/empty-message/dir/empty.txt');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
    describe('extname', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/extname/foo.test');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/extname/empty.test');
        const bar       = fs.readFileSync('test/lib/extract/output/extname/dir/bar.test');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/extname/dir/empty.test');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/extname/foo.test');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/extname/empty.test');
        const xBar      = fs.readFileSync('test/lib/extract/expected/extname/dir/bar.test');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/extname/dir/empty.test');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
    describe('first-match-to-end', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/first-match-to-end/foo.txt');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/first-match-to-end/empty.txt');
        const bar       = fs.readFileSync('test/lib/extract/output/first-match-to-end/dir/bar.txt');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/first-match-to-end/dir/empty.txt');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/first-match-to-end/foo.txt');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/first-match-to-end/empty.txt');
        const xBar      = fs.readFileSync('test/lib/extract/expected/first-match-to-end/dir/bar.txt');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/first-match-to-end/dir/empty.txt');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
    describe('footer', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/footer/foo.txt');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/footer/empty.txt');
        const bar       = fs.readFileSync('test/lib/extract/output/footer/dir/bar.txt');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/footer/dir/empty.txt');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/footer/foo.txt');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/footer/empty.txt');
        const xBar      = fs.readFileSync('test/lib/extract/expected/footer/dir/bar.txt');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/footer/dir/empty.txt');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
    describe('header', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/header/foo.txt');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/header/empty.txt');
        const bar       = fs.readFileSync('test/lib/extract/output/header/dir/bar.txt');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/header/dir/empty.txt');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/header/foo.txt');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/header/empty.txt');
        const xBar      = fs.readFileSync('test/lib/extract/expected/header/dir/bar.txt');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/header/dir/empty.txt');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
    describe('newline', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/newline/foo.txt');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/newline/empty.txt');
        const bar       = fs.readFileSync('test/lib/extract/output/newline/dir/bar.txt');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/newline/dir/empty.txt');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/newline/foo.txt');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/newline/empty.txt');
        const xBar      = fs.readFileSync('test/lib/extract/expected/newline/dir/bar.txt');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/newline/dir/empty.txt');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
    describe('same-end-tag', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/same-end-tag/foo.txt');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/same-end-tag/empty.txt');
        const bar       = fs.readFileSync('test/lib/extract/output/same-end-tag/dir/bar.txt');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/same-end-tag/dir/empty.txt');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/same-end-tag/foo.txt');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/same-end-tag/empty.txt');
        const xBar      = fs.readFileSync('test/lib/extract/expected/same-end-tag/dir/bar.txt');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/same-end-tag/dir/empty.txt');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
    describe('same-start-tag', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/same-start-tag/foo.txt');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/same-start-tag/empty.txt');
        const bar       = fs.readFileSync('test/lib/extract/output/same-start-tag/dir/bar.txt');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/same-start-tag/dir/empty.txt');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/same-start-tag/foo.txt');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/same-start-tag/empty.txt');
        const xBar      = fs.readFileSync('test/lib/extract/expected/same-start-tag/dir/bar.txt');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/same-start-tag/dir/empty.txt');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
    describe('same-tag', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/same-tag/foo.txt');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/same-tag/empty.txt');
        const bar       = fs.readFileSync('test/lib/extract/output/same-tag/dir/bar.txt');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/same-tag/dir/empty.txt');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/same-tag/foo.txt');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/same-tag/empty.txt');
        const xBar      = fs.readFileSync('test/lib/extract/expected/same-tag/dir/bar.txt');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/same-tag/dir/empty.txt');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
    describe('space', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/space/foo.txt');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/space/empty.txt');
        const bar       = fs.readFileSync('test/lib/extract/output/space/dir/bar.txt');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/space/dir/empty.txt');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/space/foo.txt');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/space/empty.txt');
        const xBar      = fs.readFileSync('test/lib/extract/expected/space/dir/bar.txt');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/space/dir/empty.txt');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
    describe('tag', function () {
      it('should equal', function() {
        const foo       = fs.readFileSync('test/lib/extract/output/tag/foo.txt');
        const fooEmpty  = fs.readFileSync('test/lib/extract/output/tag/empty.txt');
        const bar       = fs.readFileSync('test/lib/extract/output/tag/dir/bar.txt');
        const barEmpty  = fs.readFileSync('test/lib/extract/output/tag/dir/empty.txt');
        const xFoo      = fs.readFileSync('test/lib/extract/expected/tag/foo.txt');
        const xFooEmpty = fs.readFileSync('test/lib/extract/expected/tag/empty.txt');
        const xBar      = fs.readFileSync('test/lib/extract/expected/tag/dir/bar.txt');
        const xBarEmpty = fs.readFileSync('test/lib/extract/expected/tag/dir/empty.txt');
        String(foo).should.equal(String(xFoo));
        String(fooEmpty).should.equal(String(xFooEmpty));
        String(bar).should.equal(String(xBar));
        String(barEmpty).should.equal(String(xBarEmpty));
      });
    });
  }); // end extract

  describe('skin-import-beautifier', function () {
    it('should equal', function() {
      const file = fs.readFileSync('test/lib/skin-import-beautifier/output/example.css');
      const xFile = fs.readFileSync('test/lib/skin-import-beautifier/expected/example.css');
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
      const file = fs.readFileSync('test/lib/trim/output/example.txt');
      const xFile = fs.readFileSync('test/lib/trim/expected/example.txt');
      String(file).should.equal(String(xFile));
    });
  }); // end trim
});
