'use strict'; /* eslint strict:0, no-var:0, func-names:0 */

var path = require('path');

var config = require('../createWebpackConfig')({
  context: __dirname,
  entry: [
    'webpack/hot/dev-server',
    './index.js',
  ],
  minify: false,
  env: 'production',
});

config.output = {
  path: path.join(__dirname, './build'),
  publicPath: '/assets/',
  filename: 'perf.js',
};

config.devServer = {
  contentBase: __dirname,
  noInfo: true,
  hot: true,
  inline: true,
};

config.module.noParse = [
  /benchmark\.js$/,
];

module.exports = config;
