import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'test/**/*-spec.js',
  plugins: [
    babel(),
    multiEntry(),
    nodeResolve({
      jsnext: true,
      main: true,
    }),
    commonjs({
      namedExports: {
        'node_modules/chai/index.js': ['expect'],
      },
    }),
  ],
  format: 'iife',
  moduleName: 'updeepTest',
  intro: 'require("source-map-support").install();',
  dest: 'test/karma.js',
  sourceMap: true,
};
