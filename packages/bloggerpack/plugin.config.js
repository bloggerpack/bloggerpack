module.exports = {
  configFile: {
    eslint: './.eslintrc.json',
    stylelint: './.stylelintrc',
    banner: './banner.txt',
    data: './data.json'
  },
  template: {
    src: {
      dir: './template',
      filename: 'preview.njk'
    },
    build: {
      dir: './dist',
      filename: 'preview.xml'
    },
    tag: {
      start: "<template to='bp:template'>",
      end: '</template>'
    }
  },
  sass: {
    src: {
      dir: './sass',
      filename: 'index.scss'
    },
    build: {
      dir: './dist',
      filename: 'sass.css'
    },
    extract: {
      root: '',
      dir: './sass/sass-in-template',
      extname: '.scss'
    },
    tag: {
      start: "<style to='bp:sass'>",
      end: '</style>'
    }
  },
  skin: {
    src: {
      dir: './skin',
      filename: 'index.css'
    },
    build: {
      dir: './dist',
      filename: 'skin.css'
    },
    extract: {
      root: '',
      dir: './skin/skin-in-template',
      extname: '.css'
    },
    tag: {
      start: "<style to='bp:skin'>",
      end: '</style>'
    }
  },
  js: {
    src: {
      dir: './js',
      filename: 'index.js'
    },
    build: {
      dir: './dist',
      filename: 'js.js'
    },
    extract: {
      root: '',
      dir: './js/js-in-template',
      extname: '.js'
    },
    tag: {
      start: "<script to='bp:js'>",
      end: '</script>'
    }
  }
};
