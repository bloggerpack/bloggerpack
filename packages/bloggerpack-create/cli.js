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
    's': {
      alias: 'source',
      type: 'string',
      choices: ['npm', 'git', 'archive'],
      describe: `Set source`,
      demandOption: true
    },
    't': {
      alias: 'template',
      type: 'string',
      describe: `Set starter template`,
      demandOption: true
    }
  })
  .example('')
  .example(`${chalk.yellow('npm\n----------')}`)
  .example('')
  .example(`$ $0 ${chalk.cyan('<project-directory>')} -s ${chalk.cyan('npm')} -t ${chalk.cyan('<package>')}`)
  .example('')
  .example(`${chalk.yellow('# Latest version')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('npm')} -t ${chalk.cyan('package-name')}`)
  .example(`${chalk.yellow('# Latest version with scoped package')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('npm')} -t ${chalk.cyan('@org-name/package-name')}`)
  .example('')
  .example(`${chalk.yellow('# Latest 1.x.x')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('npm')} -t ${chalk.cyan('package-name@1')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('npm')} -t ${chalk.cyan('@org-name/package-name@1')}`)
  .example('')
  .example(`${chalk.yellow('# Latest 1.2.x')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('npm')} -t ${chalk.cyan('package-name@1.2')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('npm')} -t ${chalk.cyan('@org-name/package-name@1.2')}`)
  .example('')
  .example(`${chalk.yellow('# Specific version')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('npm')} -t ${chalk.cyan('package-name@1.2.3')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('npm')} -t ${chalk.cyan('@org-name/package-name@1.2.3')}`)
  .example('')
  .example(`${chalk.yellow('git\n----------')}`)
  .example('')
  .example(`$ $0 ${chalk.cyan('<project-directory>')} -s ${chalk.cyan('git')} -t ${chalk.cyan('<git-host>:<user>/<repo>#<branch|tag>')}`)
  .example('')
  .example(`${chalk.yellow('# Branch')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('git')} -t ${chalk.cyan('github:username/repo-name#main')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('git')} -t ${chalk.cyan('gitlab:username/repo-name#master')}`)
  .example('')
  .example(`${chalk.yellow('# Tag')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('git')} -t ${chalk.cyan('github:username/repo-name#v1.0.0')}`)
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('git')} -t ${chalk.cyan('gitlab:username/repo-name#v1.0.0')}`)
  .example('')
  .example(`${chalk.yellow('archive\n----------')}`)
  .example('')
  .example(`$ $0 ${chalk.cyan('project-name')} -s ${chalk.cyan('archive')} -t ${chalk.cyan('https://example.com/awesome-starter.zip')}`)
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
    let isScope = argv.template.includes('/');
    let isScopeHasVersion = isScope ? argv.template.split('/')[1].includes('@') : false;
    let scopeOrg = isScope ? argv.template.split('/')[0] : '';
    let scopePkgName = isScope ? argv.template.split('/')[1].split('@')[0] : '';
    let scopePkgVersion = isScope && isScopeHasVersion ? argv.template.split('/')[1].split('@')[1] : '';
    let scopePkgVersionLatest = isScope ? await npmLatestVersion(scopeOrg + '/' +scopePkgName) : '';
    let scopePkgVersionLatestX = isScope ? await npmLatestVersion(scopeOrg + '/' +scopePkgName, { version: scopePkgVersion }) : '';
    scopePkgVersion = scopePkgVersion === '' ? scopePkgVersionLatest : scopePkgVersionLatestX;

    // `<name>` or `<name>@<version>`
    let hasVersion = !isScope ? argv.template.includes('@') : false;
    let pkgName = !isScope ? argv.template.split('@')[0] : '';
    let pkgVersion = !isScope && hasVersion ? argv.template.split('@')[1] : '';
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
    let gitHost = argv.template.split(':')[0];
    let gitUserRepo = argv.template.split('#')[0].split(':')[1];
    let gitBranchTag = argv.template.split('#')[1];
    let gitRepo = argv.template.split('/').pop().split('#')[0];

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
    uri = argv.template;
  }

  download(uri, argv._[0], args);
})();
