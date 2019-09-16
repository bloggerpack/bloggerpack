const path = require('path');
const sass = require('node-sass');
const Fiber = require('fibers');

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    config: grunt.file.readJSON('src/config.json'),

    banner: '/*!\n' +
            ' * {{ config.theme.name }} v{{ config.theme.version }}\n' +
            ' * Based on Bloggerpack (https://github.com/wrapblogger/bloggerpack)\n' +
            ' */\n',

    clean: {
      'dist': 'dist',
      'tmp': 'src/tmp'
    },

    bake: {
      options: {
        content: function () {
          var files = [
            {
              path: 'src/config.json',
              alias: 'config'
            }, {
              path: 'package.json',
              alias: 'pkg'
            }
          ];
          return files.reduce(function (content, file) {
            content[file.alias] = grunt.file.readJSON(file.path);
            return content;
          }, {
            'rootDir': __dirname.split(path.sep).pop()
          });
        }
      },
      theme: {
        options: {
          basePath: 'src'
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: 'theme.xml',
          dest: 'dist'
        }]
      },
      coreCss: {
        options: {
          basePath: 'src'
        },
        files: [{
          expand: true,
          cwd: 'dist/css/',
          src: 'main.css',
          dest: 'dist/css'
        }]
      },
      coreJs: {
        options: {
          basePath: 'src'
        },
        files: [{
          expand: true,
          cwd: 'dist/js/',
          src: 'main.js',
          dest: 'dist/js'
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
      coreCss: {
        src: [
          'src/**/*.scss',
          'src/**/*.css',
          '!src/_plugins/**/*.scss',
          '!src/_plugins/**/*.css',
          '!src/skin.css',
          '!src/template-skin.css'
        ]
      }
    },

    sass: {
      options: {
        implementation: sass,
        fiber: Fiber,
        outputStyle: 'expanded',
        sourceMap: false,
        sourceMapContents: false
      },
      coreCss: {
        files: [
          { 'dist/css/main.css': 'src/_scss/index.scss' }
        ]
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({ cascade: false })
        ]
      },
      coreCss: {
        src: 'dist/css/**/*.css'
      }
    },

    cssmin: {
      options: {
        level: 1,
        sourceMap: false,
        sourceMapInlineSources: false,
        advanced: false
      },
      coreCss: {
        files: [{
          expand: true,
          cwd: 'dist/css/',
          src: '**/*.css',
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },

    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        },
        transform: [
          ['babelify', {
            'presets': ['@babel/preset-env'],
            'plugins': ['babel-plugin-root-import']
          }]
        ]
      },
      coreJs: {
        files: [
          { 'dist/js/main.js': 'src/_js/index.js' }
        ]
      }
    },

    uglify: {
      options: {
        mangle: true,
        sourceMap: false,
        compress: {
          warnings: false
        },
        output: {
          comments: /^!|@preserve|@license|@cc_on/i
        }
      },
      coreJs: {
        files: [{
          expand: true,
          cwd: 'dist/js/',
          src: 'main.js',
          dest: 'dist/js',
          ext: '.min.js'
        }]
      }
    },

    header: {
      coreCss: {
        options: {
          text: '<%= banner %>'
        },
        files: {
          'dist/css/main.css': 'dist/css/main.css'
        }
      },
      coreJs: {
        options: {
          text: '<%= banner %>'
        },
        files: {
          'dist/js/main.js': 'dist/js/main.js'
        }
      }
    },

    watch: {
      main: {
        files: ['src/**/*'],
        tasks: ['default']
      }
    },

    compress: {
      theme: {
        options: {
          archive: __dirname.split(path.sep).pop() + '-<%= config.theme.version %>.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [{
          expand: true,
          src: [
            '**',
            '.*',
            '!.git',
            '!*.zip',
            '!node_modules/**'
          ]
        }]
      }
    }

  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // Theme task.
  grunt.registerTask('theme-compile', ['bake:theme']);
  grunt.registerTask('dist-theme', ['theme-compile']);

  // CSS task.
  grunt.registerTask('concat-styles', 'Finds Sass/CSS for concatenation.', function () {
    grunt.file.expand('src').forEach(function (dir) {
      var concat = {
        options: {
          sourceMap: false
        }
      };
      concat[dir] = {
        src: [
          dir + '/_views/**/*.scss',
          dir + '/_defaultmarkups/**/*.scss',
          dir + '/_plugins/**/*.scss',
          dir + '/_views/**/*.css',
          dir + '/_defaultmarkups/**/*.css',
          dir + '/_plugins/**/*.css',
          '!' + dir + '/_views/**/!*.scss',
          '!' + dir + '/_defaultmarkups/**/!*.scss',
          '!' + dir + '/_plugins/**/!*.scss',
          '!' + dir + '/_views/**/!*.css',
          '!' + dir + '/_defaultmarkups/**/!*.css',
          '!' + dir + '/_plugins/**/!*.css'
        ],
        dest: 'src/tmp/concatenated-styles.scss'
      };
      grunt.config.set('concat', concat);
    });
    grunt.task.run('concat');
  });
  grunt.registerTask('css-lint', ['stylelint:coreCss']);
  grunt.registerTask('css-compile', ['concat-styles', 'sass:coreCss', 'postcss:coreCss', 'header:coreCss', 'bake:coreCss']);
  grunt.registerTask('css-minify', ['cssmin:coreCss']);
  grunt.registerTask('dist-css', ['css-lint', 'css-compile', 'css-minify']);

  // JS task.
  grunt.registerTask('concat-js', 'Finds JavaScript for concatenation.', function () {
    grunt.file.expand('src').forEach(function (dir) {
      var concat = {
        options: {
          sourceMap: false
        }
      };
      concat[dir] = {
        src: [
          dir + '/_views/**/*.js',
          dir + '/_defaultmarkups/**/*.js',
          dir + '/_plugins/**/*.js',
          '!' + dir + '/_views/**/!*.js',
          '!' + dir + '/_defaultmarkups/**/!*.js',
          '!' + dir + '/_plugins/**/!*.js'
        ],
        dest: 'src/tmp/concatenated-js.js'
      };
      grunt.config.set('concat', concat);
    });
    grunt.task.run('concat');
  });
  grunt.registerTask('js-compile', ['concat-js', 'browserify:coreJs', 'header:coreJs', 'bake:coreJs']);
  grunt.registerTask('js-minify', ['uglify:coreJs']);
  grunt.registerTask('dist-js', ['js-compile', 'js-minify']);

  // Test task.
  grunt.registerTask('test', ['clean:dist', 'clean:tmp', 'dist-css', 'dist-js', 'dist-theme']);

  // Default task.
  grunt.registerTask('default', ['test', 'clean:tmp']);

  // Release task.
  grunt.registerTask('release', ['default', 'compress:theme']);
};
