module.exports = {
  "extends": require.resolve("../.eslintrc"),
  "rules": {
    "new-cap": [2, {
      "capIsNewExceptions": [
        "Suite"
      ]
    }],
  }
}
