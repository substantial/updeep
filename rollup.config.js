import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const pkg = require('./package.json')

export default {
  entry: 'lib/index.js',
  plugins: [babel()],
  external: [
    'lodash/map',
    'lodash/isPlainObject',
    'lodash/reject',
    'lodash/forEach',
    'lodash/mapValues',
    'lodash/omit',
    'lodash/omitBy',
  ],
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'updeep',
      sourceMap: true,
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true,
    },
  ],
}
