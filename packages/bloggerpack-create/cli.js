#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const chalk = require('chalk');
const npmLatestVersion = require('latest-version');
const download = require('./download');
const validateProjectName = require('validate-npm-package-name');

yargs
  .scriptName(`npx bloggerpack-create`)
  .usage('')
  .usage(`Usage: $0 ${chalk.cyan('<project-directory>')} [options]`)
  .demandCommand(
    1, 1,
    `Please specify the project directory.`,
    `Project directory can't contain spaces.`
  )
  .check((argv) => {
    const projectName = path.basename(argv._[0]);
    const projectPath = path.resolve(argv._[0]);
    const validationResult = validateProjectName(projectName);

    if (!validationResult.validForNewPackages) {
      console.log();
      console.error(
        chalk.red(`Cannot create a project named ${chalk.cyan(`"${projectName}"`)} because of npm naming restrictions:`)
      );
      console.log();
      [
        ...(validationResult.errors || []),
        ...(validationResult.warnings || []),
      ].forEach(error => {
        console.error(chalk.red(`   * ${error}`));
      });
      console.log();
      console.error(chalk.red('Please choose a different project name.'));
      yargs.showHelp();
      process.exit(1);
    }
    if (fs.existsSync(projectPath)) {
      console.log();
      console.error(chalk.red(`The ${chalk.cyan(projectPath)} already exists.`));
      console.log();
      console.log(chalk.red(`Please choose a different name or path.`));
      yargs.showHelp();
      process.exit(1);
    }

    return true;
  })
  .fail(function (msg, err, yargs) {
    if (err) throw err;
    console.log();
    console.error(chalk.red(msg));
    yargs.showHelp();
    process.exit(1);
  })
  .options({
    'x': {
      alias: 'source',
      type: 'string',
      choices: ['npm', 'git', 'archive'],
      describe: `Set source`,
      demandOption: true
    },
    's': {
      alias: 'starter',
      type: 'string',
      describe: `Set starter theme`,
      demandOption: true
    }
  })
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('npm')} -s=${chalk.cyan('"package-name"')}`, '[npm; normal; latest version]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('npm')} -s=${chalk.cyan('"@scope/package-name"')}`, '[npm; scoped; latest version]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('npm')} -s=${chalk.cyan('"package-name@1"')}`, '[npm; normal; latest 1.x.x version]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('npm')} -s=${chalk.cyan('"@scope/package-name@1"')}`, '[npm; scoped; latest 1.x.x version]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('npm')} -s=${chalk.cyan('"package-name@1.1"')}`, '[npm; normal; latest 1.1.x version]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('npm')} -s=${chalk.cyan('"@scope/package-name@1.1"')}`, '[npm; scoped; latest 1.1.x version]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('npm')} -s=${chalk.cyan('"package-name@1.1.5"')}`, '[npm; normal; specific version]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('npm')} -s=${chalk.cyan('"@scope/package-name@1.1.5"')}`, '[npm; scoped; specific version]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('git')} -s=${chalk.cyan('"github:user/repo#main"')}`, '[git; github; main branch]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('git')} -s=${chalk.cyan('"github:user/repo#v1.0.0"')}`, '[git; github; v1.0.0 tag]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('git')} -s=${chalk.cyan('"gitlab:user/repo#master"')}`, '[git; gitlab; master branch]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('git')} -s=${chalk.cyan('"gitlab:user/repo#v1.0.0"')}`, '[git; gitlab; v1.0.0 tag]')
  .example(`$ $0 ${chalk.cyan('my-theme')} -x=${chalk.cyan('archive')} -s=${chalk.cyan('"https://example.com/awesome-starter.zip"')}`, '[archive]')
  .wrap(null)
  .help('help')
  .alias('h', 'help')
  .describe('help', `Show help`)
  .version()
  .alias('v', 'version')
  .describe('version', `Show version number`);

const argv = yargs.argv;

(async () => {
  const args = {
    projectName: path.basename(argv._[0]),
    projectPath: path.resolve(argv._[0]),
    bpLatestVersion: (await npmLatestVersion('bloggerpack')).trim(),
    argv: argv
  };
  let uri = '';

  if (argv.source === 'npm') {
    // `<@scope>/<name>` or `<@scope>/<name>@<version>`
    let isScope = argv.starter.includes('/');
    let isScopeHasVersion = isScope ? argv.starter.split('/')[1].includes('@') : false;
    let scopeOrg = isScope ? argv.starter.split('/')[0] : '';
    let scopePkgName = isScope ? argv.starter.split('/')[1].split('@')[0] : '';
    let scopePkgVersion = isScope && isScopeHasVersion ? argv.starter.split('/')[1].split('@')[1] : '';
    let scopePkgVersionLatest = isScope ? await npmLatestVersion(scopeOrg + '/' +scopePkgName) : '';
    let scopePkgVersionLatestX = isScope ? await npmLatestVersion(scopeOrg + '/' +scopePkgName, { version: scopePkgVersion }) : '';
    scopePkgVersion = scopePkgVersion === '' ? scopePkgVersionLatest : scopePkgVersionLatestX;

    // `<name>` or `<name>@<version>`
    let hasVersion = !isScope ? argv.starter.includes('@') : false;
    let pkgName = !isScope ? argv.starter.split('@')[0] : '';
    let pkgVersion = !isScope && hasVersion ? argv.starter.split('@')[1] : '';
    let pkgVersionLatest = !isScope ? await npmLatestVersion(pkgName) : '';
    let pkgVersionLatestX = !isScope ? await npmLatestVersion(pkgName, { version: pkgVersion }) : '';
    pkgVersion = pkgVersion === '' ? pkgVersionLatest : pkgVersionLatestX;

    if (isScope) {
      uri = `https://registry.npmjs.org/${scopeOrg}/${scopePkgName}/-/${scopePkgName}-${scopePkgVersion}.tgz`;
    }
    if (!isScope) {
      uri = `https://registry.npmjs.org/${pkgName}/-/${pkgName}-${pkgVersion}.tgz`;
    }
  }

  if (argv.source === 'git') {
    let gitHost = argv.starter.split(':')[0];
    let gitUserRepo = argv.starter.split('#')[0].split(':')[1];
    let gitBranchTag = argv.starter.split('#')[1];
    let gitRepo = argv.starter.split('/').pop().split('#')[0];

    if (gitBranchTag === undefined || gitHost === undefined || gitUserRepo.includes('/') === false) {
      console.log();
      console.error(`Please specify ${chalk.cyan('<git-host>')}, ${chalk.cyan('<user>/<repo>')}, ${chalk.cyan('<branch>')} or ${chalk.cyan('<tag>')}.`);
      console.log();
      console.log(`For example: ${chalk.cyan('<git-host>:<user>/<repo>#<branch|tag>')}`);
      console.log();
      console.log('---');
      yargs.showHelp();
      process.exit(1);
    }

    if (argv.source === 'git' && gitHost === 'github') {
      uri = `https://github.com/${gitUserRepo}/archive/${gitBranchTag}.zip`;
    }
    if (argv.source === 'git' && gitHost === 'gitlab') {
      uri = `https://gitlab.com/${gitUserRepo}/-/archive/${gitBranchTag}/${gitRepo}-${gitBranchTag}.zip`;
    }
  }

  if (argv.source === 'archive') {
    uri = argv.starter;
  }

  download(uri, argv._[0], args);
})();
