const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'none',
  entry: ['./src/_js/index.js', './src/_scss/index.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/bundle')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new webpack.BannerPlugin({
      banner: '/*!\n' +
              ' * {{ base.1.name }} v{{ base.1.version }} ({{ base.1.homepage }})\n' +
              ' * Copyright {{ base.1.date }} {{ base.1.author.name }} ({{ base.1.author.url }})\n' +
              ' * Licensed under {{ base.1.license.name }} ({{ base.1.license.url }})\n' +
              ' */\n',
      raw: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')({ cascade: false })
                ];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
