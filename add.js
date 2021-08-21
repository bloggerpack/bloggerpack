const minimist = require('minimist');
const execSync = require('child_process').execSync;

const options = {
  string: ['package', 'to', 'type'],
  default: {
    package: '',
    to: '',
    type: 'dep'
  }
};

const argv = minimist(process.argv.slice(2), options);

if (argv.package !== '' && argv.to !== '') {
  switch(argv.type) {
    case 'dep':
      execSync(`lerna add ${argv.package} --exact --scope="${argv.to}" --no-bootstrap && npm run bootstrap`, {
        stdio: 'inherit'
      });
      break;
    case 'dev':
      execSync(`lerna add ${argv.package} --exact --scope="${argv.to}" --dev --no-bootstrap && npm run bootstrap`, {
        stdio: 'inherit'
      });
      break;
    case 'peer':
      execSync(`lerna add ${argv.package} --exact --scope="${argv.to}" --peer --no-bootstrap && npm run bootstrap`, {
        stdio: 'inherit'
      });
      break;
    default:
      console.error('Command error.');
  }
} else {
  console.error('Command error.');
}
