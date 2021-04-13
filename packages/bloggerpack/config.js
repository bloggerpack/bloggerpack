module.exports = {
  configFile: {
    eslint: './.eslintrc.json',
    stylelint: './.stylelintrc.json',
    banner: './banner.txt',
    data: './data.json'
  },
  template: {
    src: {
      dir: './src',
      filename: 'index.xml'
    },
    build: {
      dir: './dist',
      filename: 'theme.xml'
    },
    tag: {
      start: '<bp:template>',
      end: '</bp:template>'
    }
  },
  sass: {
    src: {
      dir: './src/sass',
      filename: 'index.scss'
    },
    build: {
      dir: './src/sass/dist',
      filename: 'style.css'
    },
    extract: {
      root: './src',
      dir: './src/sass/sass-in-template',
      extname: '.scss'
    },
    tag: {
      start: '<bp:sass>',
      end: '</bp:sass>'
    }
  },
  skin: {
    src: {
      dir: './src/skin',
      filename: 'index.css'
    },
    build: {
      dir: './src/skin/dist',
      filename: 'style.css'
    },
    extract: {
      root: './src',
      dir: './src/skin/skin-in-template',
      extname: '.css'
    },
    tag: {
      start: '<bp:skin>',
      end: '</bp:skin>'
    }
  },
  js: {
    src: {
      dir: './src/js',
      filename: 'index.js'
    },
    build: {
      dir: './src/js/dist',
      filename: 'script.js'
    },
    extract: {
      root: './src',
      dir: './src/js/js-in-template',
      extname: '.js'
    },
    tag: {
      start: '<bp:js>',
      end: '</bp:js>'
    }
  }
};
