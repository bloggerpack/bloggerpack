module.exports = {
  configFile: {
    eslint: './.eslintrc.json',
    stylelint: './.stylelintrc',
    banner: './banner.txt',
    data: './data.json'
  },
  template: {
    src: {
      dir: './src',
      filename: 'index.njk'
    },
    build: {
      dir: './dist',
      filename: 'theme.xml'
    },
    tag: {
      start: "<template to='bp:template'>",
      end: '</template>'
    }
  },
  sass: {
    src: {
      dir: './src/sass',
      filename: 'index.scss'
    },
    build: {
      dir: './src/dist',
      filename: 'sass.css'
    },
    extract: {
      root: './src',
      dir: './src/sass/sass-in-template',
      extname: '.scss'
    },
    tag: {
      start: "<style to='bp:sass'>",
      end: '</style>'
    }
  },
  skin: {
    src: {
      dir: './src/skin',
      filename: 'index.css'
    },
    build: {
      dir: './src/dist',
      filename: 'skin.css'
    },
    extract: {
      root: './src',
      dir: './src/skin/skin-in-template',
      extname: '.css'
    },
    tag: {
      start: "<style to='bp:skin'>",
      end: '</style>'
    }
  },
  js: {
    src: {
      dir: './src/js',
      filename: 'index.js'
    },
    build: {
      dir: './src/dist',
      filename: 'js.js'
    },
    extract: {
      root: './src',
      dir: './src/js/js-in-template',
      extname: '.js'
    },
    tag: {
      start: "<script to='bp:js'>",
      end: '</script>'
    }
  }
};
