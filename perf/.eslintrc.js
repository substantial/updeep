module.exports = {
  extends: require.resolve('../.eslintrc.js'),
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
