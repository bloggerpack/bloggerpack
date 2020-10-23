const through = require('through2');
const stripCssComments = require('strip-css-comments');

module.exports = function () {
  return through.obj(function (file, enc, cb) {
    var content = file.contents.toString('utf8');

    content = stripCssComments(content, {
      preserve: false,
      whitespace: false
    });

    content = content
              .trim()
              .replace(/\n/g, '')
              .replace(/\s{2,}/g, ' ')
              .replace(/;@/g, '; @')
              .replace(/;\s/g, ';')
              .replace(/\;/g, ';\n\n')
              .trim()
              + '\n';

    file.contents = new Buffer.from(content);

    return cb(null, file);
  });
};
