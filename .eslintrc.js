const config = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    node: true,
  },
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "no-confusing-arrow": "off",
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }]
  },
  overrides: [
    {
      files: ['lib/**/*'],
      env: {
        es6: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      files: ['test/**/*'] ,
      env: {
        mocha: true
      },
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        "no-unused-expressions": 0
      }
    },
    {
      files: ['**/*.@(ts|tsx)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-var': 'off',
        'no-useless-constructor': 'off',
        strict: 'off',
      },
    },
  ]
}

module.exports = config
