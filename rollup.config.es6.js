import config from './rollup.config';

config.entry = 'lib/index.es6.js';
config.format = 'es6';
config.dest = 'dist/updeep.es6.js';
config.exports = 'named';

export default config;
