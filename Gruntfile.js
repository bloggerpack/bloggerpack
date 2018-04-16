const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      'dist': 'dist'
    },

    bake: {
      main: {
        options: {
          basePath: 'src'
        },
        files: {
          'dist/theme.xml': 'src/index.xml'
        }
      }
    },
    
    webpack: {
      main: webpackConfig
    },

    watch: {
      main: {
        files: [
          'src/**/*.xml',
          'src/**/*.css',
          'src/**/*.js',
          'src/index.scss',
          'src/_scss/**/*.scss',
          '!src/bundle/**'
        ],
        tasks: [
          'clean:dist',
          'webpack:main',
          'bake:main'
        ]
      }
    },

    compress: {
      main: {
        options: {
          archive: 'blogger-starter-dist.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['**'],
          dest: 'blogger-starter-dist'
        }]
      }
    }

  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // Default task.
  grunt.registerTask('default', ['clean:dist', 'webpack:main', 'bake:main']);

  // Release task.
  grunt.registerTask('prep-release', ['default', 'compress:main']);
};
