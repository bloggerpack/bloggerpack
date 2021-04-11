const path = require('path');
const glob = require('glob');
const through = require('through2');
const mergeOptions = require('merge-options');
const nunjucks = require('nunjucks');
const stripIndent = require('strip-indent');
const prettier = require('prettier');
const { HTML } = require('@taufik-nurrohman/quote');

module.exports = (opts) => {
  const defaults = {
    context: '',
    start: '<template-start>',
    end: '</template-end>'
  };
  opts = mergeOptions(defaults, opts);

  const templateExtract = (content) => {
    let pattern = new RegExp(`${opts.start}((.|\\n)*?)${opts.end}`);

    content = pattern.exec(content);
    content = content ? '\n\n\n\n' + content[1] + '\n\n\n\n' : '';
    content = stripIndent(content).trim();

    return content !== '' ? content + '\n' : '';
  };

  const assetPattern  = /({%\s*asset\s*")(.*?)("\s*%})/g;
  const assetPattern2 = /({%\s*asset\s*')(.*?)('\s*%})/g;

  return through.obj((file, enc, cb) => {
    let njkOpts = {
      autoescape: false,
      trimBlocks: true,
      lstripBlocks: true,
      watch: false,
      noCache: true
    };
    let njkContext = {
      ...opts.context
    };

    const env = new nunjucks.Environment([
      new nunjucks.FileSystemLoader([
        file.base,
        ...glob.sync(path.join(file.base, '**/*')),
        ...glob.sync(path.join(process.cwd(), '**/*'))
      ]),
      new nunjucks.NodeResolveLoader()
    ], njkOpts);

    function TemplateExtension() {
      this.tags = ['template'];

      this.parse = (parser, nodes, lexer) => {
        let tok = parser.nextToken();

        let args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);

        return new nodes.CallExtension(this, 'run', args);
      };

      this.run = (environment, file, kwargs) => {
        let content = new nunjucks.runtime.SafeString(env.render(file, environment.ctx));

        return templateExtract(content);
      };
    }
    env.addExtension('TemplateExtension', new TemplateExtension());

    function AssetExtension() {
      this.tags = ['asset'];

      this.parse = (parser, nodes, lexer) => {
        let tok = parser.nextToken();

        let args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);

        if (args.children.length > 0)
          return new nodes.CallExtension(this, 'fileTag', args);

        let body = parser.parseUntilBlocks('endasset');
        parser.advanceAfterBlockEnd();

        return new nodes.CallExtension(this, 'blockTag', args, [body]);
      };

      this.fileTag = (environment, file, kwargs) => {
        let content = new nunjucks.runtime.SafeString(env.render(file, environment.ctx));

        content = '\n\n\n\n' + content + '\n\n\n\n';
        content = stripIndent(content).trim();

        return content + '\n';
      };

      this.blockTag = (environment, body) => {
        let content = '\n\n\n\n' + body() + '\n\n\n\n';

        content = stripIndent(content).trim();

        let tpl = '';
        tpl += '<!-- prettier-ignore -->\n';
        tpl += '<prettier-ignore>\n';
        tpl += content + '\n';
        tpl += '</prettier-ignore>\n';

        return new nunjucks.runtime.SafeString(tpl);
      };
    }
    env.addExtension('AssetExtension', new AssetExtension());

    env.on('load', function(name, source, loader) {
      source.src = source.src.replace(assetPattern, '<bloggerpack% asset "$2" %bloggerpack>');
      source.src = source.src.replace(assetPattern2, '<bloggerpack% asset "$2" %bloggerpack>');
    });

    let content = templateExtract(file.contents.toString('utf8'));

    content = content.replace(assetPattern, '<bloggerpack% asset "$2" %bloggerpack>');
    content = content.replace(assetPattern2, '<bloggerpack% asset "$2" %bloggerpack>');

    try {
      env.renderString(content, njkContext, function (err, res) {
        if (err) {
          console.log(err);
          return cb();
        }

        res = res
              .replace(/<bloggerpack%/g, '{%')
              .replace(/%bloggerpack>/g, '%}')
              .replace(/<img>/g, '\<b:tag name=\'img\'>')
              .replace(/<\/img>/g, '\<\/b:tag>')
              .replace(/<input>/g, '\<b:tag name=\'input\'>')
              .replace(/<\/input>/g, '\<\/b:tag>');
        res = env.renderString(res, njkContext);

        let extendsRes = templateExtract(res);
        let prettierOpts = {
          parser: 'html',
          printWidth: 500,
          tabWidth: 2,
          useTabs: false,
          singleQuote: true,
          htmlWhitespaceSensitivity: 'css'
        };

        if (extendsRes !== '') {
          extendsRes = prettier.format(extendsRes, prettierOpts);
          res = extendsRes;
        } else {
          res = prettier.format(res, prettierOpts);
        }

        res = res
              .replace(/^.*<!-- prettier-ignore -->\n/gm, '')
              .replace(/^.*<prettier-ignore>\n/gm, '')
              .replace(/^.*<\/prettier-ignore>\n/gm, '');

        res = HTML.singleQuote(res);

        file.contents = new Buffer.from(res);

        return cb(null, file);
      });
    } catch (error) {
      console.error(error);
      return cb();
    }
  });
};
