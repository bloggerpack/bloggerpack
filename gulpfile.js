const bloggerpack = require('./bloggerpack').create();
const gulp = bloggerpack.gulp();

exports.build = bloggerpack.build;
exports.watch = bloggerpack.watch;
