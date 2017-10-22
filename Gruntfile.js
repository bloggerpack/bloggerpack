module.exports = function(grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      'dist': 'dist',
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

    watch: {
      template: {
        files: [
          'src/**/*.xml',
          'src/**/*.css',
          'src/**/*.js',
          'src/config.json'
        ],
        tasks: [
          'clean:dist',
          'template-compile'
        ]
      }
    },

    compress: {
      main: {
        options: {
          archive: 'blogger-starter-<%= pkg.version %>-dist.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['**'],
          dest: 'blogger-starter-<%= pkg.version %>-dist'
        }]
      }
    }

  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // Template task.
  grunt.registerTask('template-compile', ['bake:main']);

  // Test task.
  grunt.registerTask('test', ['template-compile']);

  // Default task.
  grunt.registerTask('default', ['test']);

  // Release task.
  grunt.registerTask('prep-release', ['default', 'compress:main']);
};
