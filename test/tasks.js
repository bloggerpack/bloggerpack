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
  describe('js-in-template', function () {
    it('should equal', function() {
      var file = fs.readFileSync('test/tasks/js/src/js/js-in-template.js');
      var expected = fs.readFileSync('test/tasks/js/expected/js-in-template.js');
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
  describe('sass-in-template', function () {
    it('should equal', function() {
      var file = fs.readFileSync('test/tasks/sass/src/sass/_sass-in-template.scss');
      var expected = fs.readFileSync('test/tasks/sass/expected/_sass-in-template.scss');
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
  describe('skin-in-template', function () {
    it('should equal', function() {
      var file = fs.readFileSync('test/tasks/skin/src/skin/skin-in-template.css');
      var expected = fs.readFileSync('test/tasks/skin/expected/skin-in-template.css');
      String(file).should.equal(String(expected));
    });
  });
});
