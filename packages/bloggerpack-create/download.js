const fs = require('fs');
const path = require('path');
const got = require('got');
const pEvent = require('p-event');
const getStream = require('get-stream');
const decompress = require('decompress');
const chalk = require('chalk');
const packageDotJson = require('./package');
const packageTemplate = require('./package.template');

const download = (uri, output, args) => {
  const gotOpts = {
    https: {
      rejectUnauthorized: true
    }
  };
  const stream = got.stream(uri, gotOpts);

  (async () => {
    await pEvent(stream, 'response').then(res => {
      return Promise.all([getStream(stream, { encoding: 'buffer' }), res]);
    }).then(result => {
      const [data, res] = result;

      return decompress(data, output, {
        map: file => {
          let f = file.path;
          let d = file.data;

          if (f === 'package.json') {
            let newData = packageDotJson(d.toString('utf8'), args);
            file.data = new Buffer.from(newData);
          }

          if (f === 'package.json.template') {
            let newData = packageTemplate(d.toString('utf8'), args);
            file.data = new Buffer.from(newData);
          }

          return file;
        },
        strip: 1
      }).then(files => {
        console.log();
        console.log(`${chalk.green('Success!')} Created ${chalk.cyan(args.projectName)} at ${chalk.cyan(args.projectPath)}`);
        console.log();
        console.log(`You can now navigate to the root ${chalk.cyan(args.projectName)} directory by typing:`);
        console.log();
        console.log(`   ${chalk.cyan('cd')} ${args.projectPath}`);

        files.map(file => {
          let f = file.path;
          let d = file.data;

          if (f === '.bloggerpackcreate') {
            let highlightContent = d.toString('utf8');
            let highlightPattern = /`((.|\\n)*?)`/g;
            let highlightExec = '';
            let highlight = [];
            let highlighted = [];
            let i = 0;

            do {
              highlightExec = highlightPattern.exec(highlightContent);
              if (highlightExec) {
                highlight[i] = highlightExec[0];
                highlighted[i] = highlight[i];
                highlighted[i] = highlighted[i].replace(/`/g, '');
                highlighted[i] = highlighted[i].replace(/`/g, '');
                highlighted[i] = chalk.cyan(highlighted[i]);
              }
              i++;
            } while (highlightExec);

            if (highlight.length !== 0) {
              for (let i = 0; i < highlight.length; i++) {
                highlightContent = highlightContent.replace(highlight[i], highlighted[i]);
              }
              console.log();
              console.log(highlightContent.trim());
            }
            if (highlight.length === 0) {
              console.log();
              console.log(highlightContent.trim());
            }
          }

          if (f === '.git')
            fs.unlinkSync(path.join(args.projectPath, f));
          if (f === '.github')
            fs.unlinkSync(path.join(args.projectPath, f));
          if (f === '.bloggerpackcreate')
            fs.unlinkSync(path.join(args.projectPath, f));
          if (f === '.npmignore')
            fs.unlinkSync(path.join(args.projectPath, f));
          if (f === 'CHANGELOG.md' || f === 'changelog.md')
            fs.unlinkSync(path.join(args.projectPath, f));
          if (f === 'LICENSE' || f === 'license' || f === 'LICENSE.md' || f === 'license.md' || f === 'LICENSE.txt' || f === 'license.txt')
            fs.unlinkSync(path.join(args.projectPath, f));
          if (f === 'node_modules')
            fs.unlinkSync(path.join(args.projectPath, f));

          if (f === 'package.json.template') {
            let oldPath = path.join(args.projectPath, f);
            let newPath = path.join(args.projectPath, 'package.json');
            fs.unlinkSync(path.join(args.projectPath, 'package.json'));
            fs.renameSync(oldPath, newPath);
          }
          if (f === '.bloggerpackcreate.template') {
            let oldPath = path.join(args.projectPath, f);
            let newPath = path.join(args.projectPath, '.bloggerpackcreate');
            fs.renameSync(oldPath, newPath);
          }
        });
      });
    });
  })();

  return stream;
};

module.exports = download;
