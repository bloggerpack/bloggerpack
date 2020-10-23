const path = require('path');
const through = require('through2');
const mergeOptions = require('merge-options');
const stripIndent = require('strip-indent');

module.exports = function (opts) {
  var defaults = {
    start: '',
    end: '',
    header: '/* <filepath> */',
    footer: '',
    emptyMessage: '/* Empty */'
  };
  opts = mergeOptions(defaults, opts);

  opts.header = opts.header === '' ? '' : opts.header + '\n\n';
  opts.footer = opts.footer === '' ? '\n' : '\n\n' + opts.footer + '\n';
  opts.emptyMessage = opts.header !== '' ? opts.header + opts.emptyMessage : opts.emptyMessage;

  return through.obj(function (file, enc, cb) {
    var contents = file.contents.toString('utf8');
    var relativePath = path.relative(process.cwd(), file.path).replace(/\\/g, '/');
    var pattern = new RegExp(`${opts.start}((.|\\n)*?)${opts.end}`);
    var extract = pattern.exec(contents);

    extract = extract ? extract[1] : '';
    extract = extract.trim();
    extract = extract !== '' ? opts.header + extract + opts.footer : '';

    if (extract === '') {
      extract = opts.emptyMessage === '' ? '' : opts.emptyMessage + '\n';
    }

    extract = extract.replace(/<filepath>/g, relativePath);
    extract = stripIndent(extract);

    file.contents = new Buffer.from(extract);

    return cb(null, file);
  });
};
