const path = require('path');
const themePkg = require(path.join(process.cwd(), 'package.json'));
themePkg.name = themePkg.name ? themePkg.name : '';
const isPlugin = themePkg.name.includes('@bloggerpack/plugin-') || themePkg.name.includes('bloggerpack-plugin-') ? true : false;
const config = !isPlugin ? require('./theme.config') : require('./plugin.config');

module.exports = config;
