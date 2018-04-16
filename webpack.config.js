const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const extractSass = new ExtractTextPlugin({
  filename: 'bundle.css'
})

module.exports = {
  entry: './build.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/bundle')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader', // translates CSS into CommonJS modules
            options: {
              minimize: true
            }
          }, {
            loader: 'postcss-loader', // run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    extractSass
  ]
};
