const path = require('path');
const glob = require('glob');
const through = require('through2');
const mergeOptions = require('merge-options');
const nunjucks = require('nunjucks');
const stripIndent = require('strip-indent');
const prettier = require('prettier');
const { HTML } = require('@taufik-nurrohman/quote');

module.exports = function (opts) {
  var defaults = {
    context: '',
    start: '<template-start>',
    end: '</template-end>'
  };
  opts = mergeOptions(defaults, opts);

  function templateExtract(content) {
    var pattern = new RegExp(`${opts.start}((.|\\n)*?)${opts.end}`);
    content = pattern.exec(content);
    content = content ? '\n\n\n\n' + content[1] + '\n\n\n\n' : '';
    content = content.trim();
    content = stripIndent(content);

    return content !== '' ? content + '\n' : '';
  }

  return through.obj(function (file, enc, cb) {
    var njkOpts = {
      autoescape: false,
      trimBlocks: true,
      lstripBlocks: true,
      watch: false,
      noCache: false
    };
    var njkContext = {
      ...opts.context
    };

    var compile = new nunjucks.Environment([
      new nunjucks.FileSystemLoader([
        file.base,
        ...glob.sync(path.join(file.base, '**/*'))
      ]),
      new nunjucks.NodeResolveLoader()
    ], njkOpts);

    function TemplateExtension() {
      this.tags = ['template'];

      this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);

        return new nodes.CallExtension(this, 'run', args);
      };

      this.run = function (environment, file, kwargs) {
        var content = new nunjucks.runtime.SafeString(compile.render(file, environment.ctx));

        return templateExtract(content);
      };
    }
    compile.addExtension('TemplateExtension', new TemplateExtension());

    function AssetExtension() {
      this.tags = ['asset'];

      this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);

        if (args.children.length > 0)
          return new nodes.CallExtension(this, 'fileTag', args);

        var body = parser.parseUntilBlocks('endasset');
        parser.advanceAfterBlockEnd();

        return new nodes.CallExtension(this, 'blockTag', args, [body]);
      };

      this.fileTag = function (environment, file, kwargs) {
        var content = new nunjucks.runtime.SafeString(compile.render(file, environment.ctx));
        content = '\n\n\n\n' + content + '\n\n\n\n';
        content = content.trim();
        content = stripIndent(content);

        if (kwargs) {
          if (kwargs.tag_start && kwargs.tag_end) {
            var tpl = '';
            tpl += '<!-- prettier-ignore -->\n<prettier-ignore>\n';
            tpl += kwargs.tag_start + '\n';
            tpl += content + '\n';
            tpl += kwargs.tag_end + '\n';
            tpl += '</prettier-ignore>\n';

            return tpl;
          }
          if (kwargs.type === 'style') {
            var tpl = '';
            tpl += '<!-- prettier-ignore -->\n<prettier-ignore>\n';
            tpl += "<b:if cond='!data:view.isLayoutMode'>\n";
            tpl += "<style>\n";
            tpl += content + '\n';
            tpl += "</style>\n";
            tpl += "</b:if>\n";
            tpl += '</prettier-ignore>\n';

            return tpl;
          }
          if (kwargs.type === 'skin') {
            var tpl = '';
            tpl += '<!-- prettier-ignore -->\n<prettier-ignore>\n';
            tpl += "<b:if cond='!data:view.isLayoutMode'>\n";
            tpl += "<b:skin>\n";
            tpl += "<![CDATA[\n";
            tpl += content + '\n';
            tpl += "]]>\n";
            tpl += "</b:skin>\n";
            tpl += "</b:if>\n";
            tpl += '</prettier-ignore>\n';

            return tpl;
          }
          if (kwargs.type === 'script') {
            var tpl = '';
            tpl += '<!-- prettier-ignore -->\n<prettier-ignore>\n';
            tpl += "<script>\n";
            tpl += "//<![CDATA[\n";
            tpl += content + '\n';
            tpl += "//]]>\n";
            tpl += "</script>\n";
            tpl += '</prettier-ignore>\n';

            return tpl;
          }
        } else {
          return content + '\n';
        }
      };

      this.blockTag = function (environment, body) {
        var body = '\n\n\n\n' + body() + '\n\n\n\n';

        body = stripIndent(body);
        body = body.trim();

        var tpl = '';
        tpl += '<!-- prettier-ignore -->\n<prettier-ignore>\n';
        tpl += body + '\n';
        tpl += '</prettier-ignore>\n';

        return new nunjucks.runtime.SafeString(tpl);
      };
    }
    compile.addExtension('AssetExtension', new AssetExtension());

    var content = templateExtract(file.contents.toString('utf8'));

    try {
      compile.renderString(content, njkContext, function (err, res) {
        if (err) {
          console.log(err);
          return cb();
        }

        res = res
              .replace(/{\?/g, '{%')
              .replace(/\?}/g, '%}')
              .replace(/<img>/g, '\<b:tag name=\'img\'>')
              .replace(/<\/img>/g, '\<\/b:tag>')
              .replace(/<input>/g, '\<b:tag name=\'input\'>')
              .replace(/<\/input>/g, '\<\/b:tag>');
        res = compile.renderString(res, njkContext);

        var extendsRes = templateExtract(res);
        var prettierOpts = {
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
      console.log(error);
      return cb();
    }
  });
};
