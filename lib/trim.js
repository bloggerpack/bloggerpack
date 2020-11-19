const through = require('through2');

module.exports = function () {
  return through.obj(function (file, enc, cb) {
    var content = file.contents.toString('utf8');

    content = '\n\n\n\n' + content + '\n\n\n\n';
    content = content.trim();

    file.contents = new Buffer.from(content);

    return cb(null, file);
  });
};
