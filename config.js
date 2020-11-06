module.exports = {
  configFile: {
    data: './data.json',
    stylelint: './.stylelintrc',
    eslint: './.eslintrc.json',
    banner: './banner.txt'
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
      start: "<template to='bp-template'>",
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
    tag: {
      start: "<style to='bp-sass'>",
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
    tag: {
      start: "<style to='bp-skin'>",
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
    tag: {
      start: "<script to='bp-js'>",
      end: '</script>'
    }
  }
}
