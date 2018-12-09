const path = require('path');
const sass = require('node-sass');

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    configBase: grunt.file.readJSON('src/config.base.json'),
    configTheme: grunt.file.readJSON('src/config.theme.json'),
    configDocs: grunt.file.readJSON('src/config.docs.json'),

    banner: '/*!\n' +
            ' * {{ theme.name }} v{{ theme.version }}\n' +
            ' * Based on {{ base.1.name }}\n' +
            ' */\n' +
            '/*!\n' +
            ' * {{ base.1.name }} v{{ base.1.version }} ({{ base.1.homepage }})\n' +
            ' * Copyright {{ base.1.date }} {{ base.1.author.name }} ({{ base.1.author.url }})\n' +
            ' * Licensed under {{ base.1.license.name }} ({{ base.1.license.url }})\n' +
            ' */\n',

    clean: {
      'dist': ['dist', 'src/tmp']
    },

    bake: {
      xml: {
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
      css: {
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
        files: [
          { src: 'src/skin.css', dest: 'src/tmp/css/skin.css' },
          { src: 'src/template-skin.css', dest: 'src/tmp/css/template-skin.css' },
          { src: 'src/tmp/css/bundle.css', dest: 'src/tmp/css/bundle.css' },
          { src: 'src/tmp/css/xml-css.css', dest: 'src/tmp/css/xml-css.css' }
        ]
      },
      js: {
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
          cwd: 'src/tmp/js/',
          src: 'bundle.js',
          dest: 'src/tmp/js'
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
      css: {
        src: ['src/skin.css', 'src/template-skin.css', 'src/_scss/**/*.scss', 'src/_xml/**/*.css']
      },
      docs: {
        src: 'src/_docs/assets/css/docs.css'
      }
    },

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      css: {
        options: {
          sourceMap: false
        },
        files: {
          'src/tmp/css/bundle.css': 'src/_scss/index.scss'
        }
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({ cascade: false })
        ]
      },
      css: {
        src: 'src/tmp/css/**/*.css'
      },
      docs: {
        src: 'dist/docs/assets/css/docs.css'
      }
    },

    cssmin: {
      options: {
        level: 1,
        sourceMap: true,
        sourceMapInlineSources: true,
        advanced: false
      },
      css: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'src/tmp/css/',
          src: ['**/*.css', '!skin.css', '!template-skin.css'],
          dest: 'src/tmp/css'
        }]
      },
      docs: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'dist/docs/',
          src: ['**/*.css', '!**/*.min.css', '!bundle/css/bundle.css'],
          dest: 'dist/docs'
        }]
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
      js: {
        files: {
          'src/tmp/js/bundle.js': 'src/_js/index.js'
        }
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
      js: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'src/tmp/js/',
          src: 'bundle.js',
          dest: 'src/tmp/js'
        }]
      },
      docs: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'dist/docs/',
          src: ['**/*.js', '!**/*.min.js', '!bundle/js/bundle.js'],
          dest: 'dist/docs'
        }]
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true,
        sourceMap: false
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
        cwd: 'src/tmp/',
        src: ['css/**/*', '!css/skin.css', '!css/template-skin.css', 'js/**/*'],
        dest: 'dist/docs/assets/bundle'
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
          'src/**/*',
          '!src/tmp/**/*'
        ],
        tasks: [
          'clean:dist',

          'stylelint:css',
          'sass:css',
          'concatXmlCss',
          'bake:css',
          'postcss:css',
          'cssmin:css',

          'browserify:js',
          'bake:js',
          'uglify:js',

          'bake:xml',

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
          src: ['**', '.*', '!.git', '!*.zip', '!node_modules/**']
        }]
      }
    }

  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // XML task.
  grunt.registerTask('xml-compile', ['bake:xml']);
  grunt.registerTask('dist-xml', ['xml-compile']);

  // CSS task.
  grunt.registerTask('concatXmlCss', 'Finds CSS in src/_xml folder for concatenation.', function () {
    grunt.file.expand('src/_xml').forEach(function (dir) {
      var concat = grunt.config.get('concat') || {};
      concat[dir] = {
        src: [dir + '/**/*.css'],
        dest: 'src/tmp/css/xml-css.css'
      };
      grunt.config.set('concat', concat);
    });
    grunt.task.run('concat');
  });
  grunt.registerTask('css-lint', ['stylelint:css']);
  grunt.registerTask('css-compile', ['sass:css', 'concatXmlCss', 'bake:css', 'postcss:css']);
  grunt.registerTask('css-minify', ['cssmin:css']);
  grunt.registerTask('dist-css', ['css-lint', 'css-compile', 'css-minify']);

  // JS task.
  grunt.registerTask('js-compile', ['browserify:js', 'bake:js']);
  grunt.registerTask('js-minify', ['uglify:js']);
  grunt.registerTask('dist-js', ['js-compile', 'js-minify']);

  // Docs task.
  grunt.registerTask('docs-lint', ['stylelint:docs']);
  grunt.registerTask('docs-compile', ['markdown:docs', 'copy:docsFiles', 'copy:docsBundle', 'postcss:docs', 'bake:docs']);
  grunt.registerTask('docs-minify', ['htmlmin:docs', 'cssmin:docs', 'uglify:docs']);
  grunt.registerTask('docs-serve', ['connect:docs']);
  grunt.registerTask('dist-docs', ['docs-lint', 'docs-compile', 'docs-minify']);

  // Test task.
  grunt.registerTask('test', ['dist-css', 'dist-js', 'dist-xml', 'dist-docs']);

  // Default task.
  grunt.registerTask('default', ['clean:dist', 'test']);

  // Release task.
  grunt.registerTask('release', ['default', 'compress']);
};
