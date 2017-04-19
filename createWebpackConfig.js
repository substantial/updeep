'use strict'; // eslint-disable-line
/* eslint no-var:0, func-names:0, import/no-extraneous-dependencies:0 */

var webpack = require('webpack');

module.exports = function createWebpackConfig(_options) {
  var config;
  var options = _options || {};
  var env = options.env || 'development';

  config = {
    context: options.context,
    entry: options.entry,

    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env),
        },
      }),
    ],

    node: {
      process: false,
    },

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
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          screw_ie8: true,
          warnings: false,
        },
      })
    );
  }

  return config;
};
