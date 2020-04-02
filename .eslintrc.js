const config = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    node: true,
  },
  "extends": [
    "airbnb-base",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "bracketSpacing": true,
        "semi": false,
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ],
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
      files: ['**/*.d.ts'],
      rules: {
        strict: 'off',
        'no-var': 'off',
      },
    },
  ]
}

module.exports = config
