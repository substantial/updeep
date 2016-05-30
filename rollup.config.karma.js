import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'test/**/*-spec.js',
  plugins: [
    babel(),
    multiEntry(),
    nodeResolve({
      main: true,
      browser: true,
      preferBuiltins: false,
    }),
    commonjs({
      namedExports: {
        'node_modules/chai/index.js': ['expect'],
      },
    }),
    replace({
      'process.env.NODE_ENV': 'development',
    }),
  ],
  format: 'iife',
  moduleName: 'updeepTest',
  dest: 'test/karma.js',
  sourceMap: true,
};
