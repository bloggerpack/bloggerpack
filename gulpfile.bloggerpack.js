const bloggerpack = require('./bloggerpack').create();
// const {src, dest, watch, series, parallel} = bloggerpack.gulp();

exports.build = bloggerpack.build;
exports.watch = bloggerpack.watch;
