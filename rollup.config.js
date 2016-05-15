import babel from 'rollup-plugin-babel';

export default {
  entry: 'lib/index.js',
  external: [
    'lodash/forEach',
    'lodash/isPlainObject',
    'lodash/map',
    'lodash/mapValues',
    'lodash/omit',
    'lodash/reject',
  ],
  globals: {
    'lodash/forEach': '_.forEach',
    'lodash/isPlainObject': '_.isPlainObject',
    'lodash/map': '_.map',
    'lodash/mapValues': '_.mapValues',
    'lodash/omit': '_.omit',
    'lodash/reject': '_.reject',
  },
  sourceMap: true,
  plugins: [babel()],
};
