module.exports = {
  "extends": require.resolve("../.eslintrc"),
  env: {
    es6: true,
  },
  "rules": {
    "new-cap": [2, {
      "capIsNewExceptions": [
        "Suite"
      ]
    }],
  }
}
