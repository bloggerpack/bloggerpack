const path = require('path');
const through = require('through2');
const mergeOptions = require('merge-options');
const stripIndent = require('strip-indent');
const dedent = require('dedent');

module.exports = (opts) => {
  const defaults = {
    start: '<extract-start>',
    end: '</extract-end>',
    header: '/* <filepath> */',
    footer: '',
    extname: '',
    emptyMessage: '/* Empty */'
  };
  opts = mergeOptions(defaults, opts);

  opts.header = opts.header === '' ? '' : dedent(opts.header.trim()) + '\n\n';
  opts.footer = opts.footer === '' ? '\n' : '\n\n' + dedent(opts.footer.trim()) + '\n';
  opts.emptyMessage = opts.emptyMessage === '' ? dedent(defaults.emptyMessage.trim()) : dedent(opts.emptyMessage.trim());

  if (opts.header !== '') {
    opts.emptyMessage = opts.header + opts.emptyMessage;
  }
  if (opts.footer !== '') {
    opts.emptyMessage = opts.emptyMessage + opts.footer;
  } else {
    opts.emptyMessage += '\n';
  }

  return through.obj((file, enc, cb) => {
    let content = file.contents.toString('utf8');
    let relativePath = path.relative(process.cwd(), file.path).replace(/\\/g, '/');
    let pattern = new RegExp(`${opts.start}((.|\\n)*?)${opts.end}`);
    let extract = pattern.exec(content);

    extract = extract ? '\n\n\n\n' + extract[1] + '\n\n\n\n' : '';
    extract = extract.trim();
    extract = extract !== '' ? opts.header + extract + opts.footer : '';

    if (extract === '') {
      extract = opts.emptyMessage;
    }

    extract = extract.replace(/<filepath>/g, relativePath);
    extract = stripIndent(extract);

    file.extname = opts.extname === '' ? file.extname : opts.extname;
    file.contents = new Buffer.from(extract);

    return cb(null, file);
  });
};
