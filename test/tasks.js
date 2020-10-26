var fs = require('fs');
var should = require('should');

describe('tasks', function () {
  describe('js', function () {
    it('should equal', function() {
      var file = fs.readFileSync('test/tasks/js/src/dist/js.js');
      var expected = fs.readFileSync('test/tasks/js/expected/js.js');
      String(file).should.equal(String(expected));
    });
  });
  describe('js auto-extract', function () {
    it('should equal', function() {
      var file = fs.readFileSync('test/tasks/js/src/js/auto-extract.js');
      var expected = fs.readFileSync('test/tasks/js/expected/auto-extract.js');
      String(file).should.equal(String(expected));
    });
  });

  describe('sass', function () {
    it('should equal', function() {
      var file = fs.readFileSync('test/tasks/sass/src/dist/sass.css');
      var expected = fs.readFileSync('test/tasks/sass/expected/sass.css');
      String(file).should.equal(String(expected));
    });
  });
  describe('sass auto-extract', function () {
    it('should equal', function() {
      var file = fs.readFileSync('test/tasks/sass/src/sass/_auto-extract.scss');
      var expected = fs.readFileSync('test/tasks/sass/expected/_auto-extract.scss');
      String(file).should.equal(String(expected));
    });
  });

  describe('skin', function () {
    it('should equal', function() {
      var file = fs.readFileSync('test/tasks/skin/src/dist/skin.css');
      var expected = fs.readFileSync('test/tasks/skin/expected/skin.css');
      String(file).should.equal(String(expected));
    });
  });
  describe('skin auto-extract', function () {
    it('should equal', function() {
      var file = fs.readFileSync('test/tasks/skin/src/skin/auto-extract.css');
      var expected = fs.readFileSync('test/tasks/skin/expected/auto-extract.css');
      String(file).should.equal(String(expected));
    });
  });
});
