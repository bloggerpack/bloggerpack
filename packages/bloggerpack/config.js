const path = require('path');
const themePkg = require(path.join(process.cwd(), 'package.json'));
const isPlugin = themePkg.name.includes('@bloggerpack/plugin-') || themePkg.name.includes('bloggerpack-plugin-') ? true : false;
const config = !isPlugin ? require('./theme.config') : require('./plugin.config');

module.exports = config;
