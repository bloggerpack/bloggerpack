const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      'dist': 'dist',
      'bundle': 'src/bundle'
    },

    bake: {
      theme: {
        options: {
          basePath: 'src'
        },
        files: {
          'dist/themes/theme.xml': 'src/index.xml'
        }
      }
    },

    webpack: {
      main: webpackConfig
    },

    markdown: {
      docs: {
        options: {
          template: 'src/docs/template.jst',
          templateContext: {},
          contextBinder: true,
          contextBinderMark: '@@@',
          autoTemplate: true,
          autoTemplateFormat: 'jst',
          markdownOptions: {
            gfm: true,
            highlight: 'manual',
            codeLines: {
              before: '<span>',
              after: '</span>'
            }
          }
        },
        files: [{
          expand: true,
          cwd: 'src/docs/',
          src: '**/*.md',
          dest: 'dist/docs',
          ext: '.html'
        }]
      }
    },

    htmlmin: {
      docs: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'dist/docs/',
          src: '**/*.html',
          dest: 'dist/docs'
        }]
      }
    },

    cssmin: {
      docs: {
        files: [{
          expand: true,
          cwd: 'dist/docs/',
          src: ['**/*.css', '!**/*.min.css'],
          dest: 'dist/docs'
        }]
      }
    },

    copy: {
      docsFiles: {
        expand: true,
        cwd: 'src/docs/',
        src: ['**/*', '!**/*.md', '!**/*.jst'],
        dest: 'dist/docs'
      },
      docsBundle: {
        expand: true,
        cwd: 'src/',
        src: 'bundle/*',
        dest: 'dist/docs'
      }
    },

    connect: {
      docs: {
        options: {
          port: 9001,
          keepalive: true,
          base: 'dist/docs'
        }
      }
    },

    watch: {
      main: {
        files: [
          'src/**/*.xml',
          'src/**/*.html',
          'src/**/*.css',
          'src/**/*.js',
          'src/**/*.jst',
          'src/**/*.md',
          'src/index.scss',
          'src/_scss/**/*.scss',
          '!src/bundle/**'
        ],
        tasks: [
          'clean:dist',
          'clean:bundle',
          'webpack:main',
          'bake:theme',
          'markdown:docs',
          'copy:docsFiles',
          'copy:docsBundle',
          'htmlmin:docs',
          'cssmin:docs'
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

  // Theme task.
  grunt.registerTask('theme-bundle', ['clean:bundle', 'webpack:main']);
  grunt.registerTask('theme-compile', ['bake:theme']);
  grunt.registerTask('dist-theme', ['theme-bundle', 'theme-compile']);

  // Docs task.
  grunt.registerTask('docs-compile', ['markdown:docs', 'copy:docsFiles', 'copy:docsBundle']);
  grunt.registerTask('docs-minify', ['htmlmin:docs', 'cssmin:docs']);
  grunt.registerTask('docs-serve', ['connect:docs']);
  grunt.registerTask('dist-docs', ['docs-compile', 'docs-minify']);

  // Dist task.
  grunt.registerTask('dist', ['clean:dist', 'dist-theme', 'dist-docs']);

  // Default task.
  grunt.registerTask('default', ['dist-theme', 'dist-docs']);

  // Release task.
  grunt.registerTask('prep-release', ['dist', 'compress:main']);
};
