/*eslint-disable */
var babel = require('babel');

module.exports = function(wallaby) {
  return {
    files: [
      'lib/**/*.js',
    ],
    tests: [
      'test/**/*-spec.js',
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel({babel: babel, stage: 1}),
    },
    env: {
      type: 'node',
    },
  };
};
