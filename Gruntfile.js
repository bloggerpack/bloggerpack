const sass = require('node-sass');

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  var path = require('path');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    configBase: grunt.file.readJSON('src/config.base.json'),
    configTheme: grunt.file.readJSON('src/config.theme.json'),
    configDocs: grunt.file.readJSON('src/config.docs.json'),

    banner: '/*!\n' +
            ' * {{ base.1.name }} v{{ base.1.version }} ({{ base.1.homepage }})\n' +
            ' * Copyright {{ base.1.date }} {{ base.1.author.name }} ({{ base.1.author.url }})\n' +
            ' * Licensed under {{ base.1.license.name }} ({{ base.1.license.url }})\n' +
            ' */\n',

    clean: {
      'dist': 'dist'
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
      themeSkin: {
        src: ['src/skin.css', 'src/template-skin.css']
      },
      bundle: {
        src: 'src/_scss/**/*.scss'
      },
      docs: {
        src: 'src/_docs/assets/css/docs.css'
      }
    },

    bake: {
      theme: {
        options: {
          basePath: 'src',
          content: function () {
            var files = [{
              path: 'src/config.base.json',
              alias: 'base'
            }, {
              path: 'src/config.theme.json',
              alias: 'theme'
            }, {
              path: 'src/config.docs.json',
              alias: 'docs'
            }];
            return files.reduce(function (content, file) {
              content[file.alias] = grunt.file.readJSON(file.path);
              return content;
            }, {});
          }
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: 'theme.xml',
          dest: 'dist/',
          rename: function (dest, src) {
            return dest + src.replace('theme', 'theme');
          }
        }]
      },
      themeSkin: {
        options: {
          basePath: 'src',
          content: function () {
            var files = [{
              path: 'src/config.base.json',
              alias: 'base'
            }, {
              path: 'src/config.theme.json',
              alias: 'theme'
            }, {
              path: 'src/config.docs.json',
              alias: 'docs'
            }];
            return files.reduce(function (content, file) {
              content[file.alias] = grunt.file.readJSON(file.path);
              return content;
            }, {});
          }
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['skin.css', 'template-skin.css'],
          dest: 'dist/skin'
        }]
      },
      bundle: {
        options: {
          basePath: 'src',
          content: function () {
            var files = [{
              path: 'src/config.base.json',
              alias: 'base'
            }, {
              path: 'src/config.theme.json',
              alias: 'theme'
            }, {
              path: 'src/config.docs.json',
              alias: 'docs'
            }];
            return files.reduce(function (content, file) {
              content[file.alias] = grunt.file.readJSON(file.path);
              return content;
            }, {});
          }
        },
        files: [{
          expand: true,
          cwd: 'dist/bundle/',
          src: ['bundle.css', 'bundle.js'],
          dest: 'dist/bundle'
        }]
      },
      docs: {
        options: {
          basePath: 'src',
          content: function () {
            var files = [{
              path: 'src/config.base.json',
              alias: 'base'
            }, {
              path: 'src/config.theme.json',
              alias: 'theme'
            }, {
              path: 'src/config.docs.json',
              alias: 'docs'
            }];
            return files.reduce(function (content, file) {
              content[file.alias] = grunt.file.readJSON(file.path);
              return content;
            }, {
              "rootDirname": __dirname.split(path.sep).pop()
            });
          }
        },
        files: [{
          expand: true,
          cwd: 'dist/docs/',
          src: ['**/*.html', 'assets/css/**/*.css', 'assets/js/**/*.js'],
          dest: 'dist/docs'
        }]
      }
    },

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      bundle: {
        options: {
          sourceMap: false
        },
        files: {
          'dist/bundle/bundle.css': 'src/_scss/index.scss'
        }
      }
    },

    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        },
        banner: '<%= banner %>',
        transform: [
          ['babelify', {
            'presets': ['@babel/preset-env']
          }]
        ]
      },
      bundle: {
        files: {
          'dist/bundle/bundle.js': 'src/_js/index.js'
        }
      }
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
          cwd: 'src/_docs/',
          src: '**/*.md',
          dest: 'dist/docs',
          ext: '.html'
        }]
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
        src: 'dist/skin/skin.css'
      },
      bundle: {
        src: 'dist/bundle/bundle.css'
      },
      docs: {
        src: 'dist/docs/assets/css/docs.css'
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
          src: 'bundle.css',
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
          src: ['**/*.css', '!**/*.min.css', '!bundle/bundle.css'],
          dest: 'dist/docs'
        }]
      }
    },

    uglify: {
      options: {
        mangle: true,
        sourceMap: true,
        compress: {
          warnings: false
        },
        output: {
          comments: /^!|@preserve|@license|@cc_on/i
        }
      },
      bundle: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'dist/bundle/',
          src: 'bundle.js',
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
          src: ['**/*.js', '!**/*.min.js', '!bundle/bundle.js'],
          dest: 'dist/docs'
        }]
      }
    },

    copy: {
      docsFiles: {
        expand: true,
        cwd: 'src/_docs/',
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
          'src/**/*.json',
          'src/**/*.md',
          'src/**/*.scss'
        ],
        tasks: [
          'clean:dist',
          'stylelint:bundle',
          'sass:bundle',
          'postcss:bundle',
          'browserify:bundle',
          'bake:bundle',
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
          'bake:docs',
          'htmlmin:docs',
          'cssmin:docs',
          'uglify:docs'
        ]
      }
    },

    compress: {
      main: {
        options: {
          archive: __dirname.split(path.sep).pop() + '-dist.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['**'],
          dest: __dirname.split(path.sep).pop() + '-dist'
        }]
      }
    }

  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // Bundle task.
  grunt.registerTask('bundle-lint', ['stylelint:bundle']);
  grunt.registerTask('bundle-compile', ['sass:bundle', 'postcss:bundle', 'browserify:bundle', 'bake:bundle']);
  grunt.registerTask('bundle-minify', ['cssmin:bundle', 'uglify:bundle']);
  grunt.registerTask('dist-bundle', ['bundle-lint', 'bundle-compile', 'bundle-minify']);

  // Theme task.
  grunt.registerTask('theme-lint', ['stylelint:themeSkin']);
  grunt.registerTask('theme-compile', ['bake:themeSkin', 'postcss:themeSkin', 'bake:theme']);
  grunt.registerTask('dist-theme', ['theme-lint', 'theme-compile']);

  // Docs task.
  grunt.registerTask('docs-lint', ['stylelint:docs']);
  grunt.registerTask('docs-compile', ['markdown:docs', 'copy:docsFiles', 'copy:docsBundle', 'postcss:docs', 'bake:docs']);
  grunt.registerTask('docs-minify', ['htmlmin:docs', 'cssmin:docs', 'uglify:docs']);
  grunt.registerTask('docs-serve', ['connect:docs']);
  grunt.registerTask('dist-docs', ['docs-lint', 'docs-compile', 'docs-minify']);

  // Dist task.
  grunt.registerTask('dist', ['clean:dist', 'dist-bundle', 'dist-theme', 'dist-docs']);

  // Test task.
  grunt.registerTask('test', ['dist-bundle', 'dist-theme', 'dist-docs']);

  // Default task.
  grunt.registerTask('default', ['clean:dist', 'test']);

  // Release task.
  grunt.registerTask('release', ['dist', 'compress']);
};
