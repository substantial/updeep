import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/updeep.umd.js';
config.moduleName = 'updeep';

export default config;
