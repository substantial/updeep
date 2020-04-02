'use strict'

/* eslint strict:0, no-var:0, func-names:0 */

var createWebpackConfig = require('./createWebpackConfig')

var localLaunchers = {
  ChromeNoSandboxHeadless: {
    base: 'Chrome',
    flags: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      // See https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
      '--headless',
      '--disable-gpu',
      '--no-gpu',
      // Without a remote debugging port, Google Chrome exits immediately.
      '--remote-debugging-port=9333',
    ],
  },
}

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    mochaReporter: {
      showDiff: true,
    },

    files: [{ pattern: 'test/**/*.js', watched: false }],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap'],
    },

    webpack: createWebpackConfig(),

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN ||
    // config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(localLaunchers),
    customLaunchers: localLaunchers,
  })
}
