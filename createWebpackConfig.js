'use strict'; /* eslint strict:0, no-var:0, func-names:0 */
var webpack = require('webpack');

module.exports = function createWebpackConfig(_options) {
  var config;
  var options = _options || {};

  config = {
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
    ],

    module: {
      loaders: [
        { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      ],
    },

    output: {
      library: 'updeep',
      libraryTarget: 'umd',
    },

    resolve: {
      extensions: ['', '.js'],
    },
  };

  config.output.filename = options.filename;

  if (options.minify) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
      },
    }));
  }

  return config;
};
