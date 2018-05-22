const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    config: grunt.file.readJSON('src/config.json'),

    clean: {
      'dist': 'dist'
    },

    bake: {
      theme: {
        options: {
          basePath: 'src',
          content: 'src/config.json'
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: 'index.xml',
          dest: 'dist/',
          rename: function (dest, src) {
            return dest + src.replace('index', '<%= config.build.templateFilename %>');
          }
        }]
      },
      themeSkin: {
        options: {
          content: 'src/config.json'
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['skin.css', 'template-skin.css'],
          dest: 'dist/skin'
        }]
      }
    },

    webpack: {
      bundle: webpackConfig
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
      options: {
        level: 1,
        sourceMap: true,
        sourceMapInlineSources: true,
        advanced: false
      },
      bundle: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'dist/bundle/',
          src: ['**/*.css', '!**/*.min.css'],
          dest: 'dist/bundle'
        }]
      },
      docs: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'dist/docs/',
          src: ['**/*.css', '!**/*.min.css', '!bundle/*.css'],
          dest: 'dist/docs'
        }]
      }
    },

    uglify: {
      options: {
        compress: {
          warnings: false
        },
        mangle: true,
        sourceMap: true
      },
      bundle: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'dist/bundle/',
          src: ['**/*.js', '!**/*.min.js'],
          dest: 'dist/bundle'
        }]
      },
      docs: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'dist/docs/',
          src: ['**/*.js', '!**/*.min.js', '!bundle/*.js'],
          dest: 'dist/docs'
        }]
      }
    },

    stylelint: {
      options: {
        configFile: '.stylelintrc',
        formatter: 'string',
        ignoreDisables: false,
        failOnError: true,
        outputFile: '',
        reportNeedlessDisables: false,
        syntax: ''
      },
      bundle: {
        src: 'src/_scss/**/*.scss'
      },
      themeSkin: {
        src: ['src/skin.css', 'src/template-skin.css']
      },
      docs: {
        src: 'src/docs/style.css'
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({ cascade: false })
        ]
      },
      themeSkin: {
        src: ['dist/skin/skin.css', 'dist/skin/template-skin.css']
      },
      docs: {
        src: 'dist/docs/style.css'
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
        cwd: 'dist/',
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
          'src/_scss/**/*.scss'
        ],
        tasks: [
          'clean:dist',
          'stylelint:bundle',
          'webpack:bundle',
          'cssmin:bundle',
          'uglify:bundle',
          'stylelint:themeSkin',
          'bake:themeSkin',
          'postcss:themeSkin',
          'bake:theme',
          'stylelint:docs',
          'markdown:docs',
          'copy:docsFiles',
          'copy:docsBundle',
          'postcss:docs',
          'htmlmin:docs',
          'cssmin:docs'
        ]
      }
    },

    compress: {
      main: {
        options: {
          archive: '<%= config.build.templateFilename %>-dist.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['**'],
          dest: '<%= config.build.templateFilename %>-dist'
        }]
      }
    }

  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // Theme task.
  grunt.registerTask('theme-bundle', ['stylelint:bundle', 'webpack:bundle', 'cssmin:bundle', 'uglify:bundle']);
  grunt.registerTask('theme-compile', ['stylelint:themeSkin', 'bake:themeSkin', 'postcss:themeSkin', 'bake:theme']);
  grunt.registerTask('dist-theme', ['theme-bundle', 'theme-compile']);

  // Docs task.
  grunt.registerTask('docs-compile', ['stylelint:docs', 'markdown:docs', 'copy:docsFiles', 'copy:docsBundle', 'postcss:docs']);
  grunt.registerTask('docs-minify', ['htmlmin:docs', 'cssmin:docs', 'uglify:docs']);
  grunt.registerTask('docs-serve', ['connect:docs']);
  grunt.registerTask('dist-docs', ['docs-compile', 'docs-minify']);

  // Dist task.
  grunt.registerTask('dist', ['clean:dist', 'dist-theme', 'dist-docs']);

  // Default task.
  grunt.registerTask('default', ['dist-theme', 'dist-docs']);

  // Release task.
  grunt.registerTask('prep-release', ['dist', 'compress:main']);
};
