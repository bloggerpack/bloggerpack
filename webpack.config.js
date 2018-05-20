const webpack = require('webpack');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'bundle.css'
})

module.exports = {
  mode: 'none',
  entry: './build.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/bundle')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')({ cascade: false })
                ]
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new StyleLintPlugin(),
    extractSass
  ]
};
