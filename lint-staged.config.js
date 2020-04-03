'use strict'

module.exports = {
  '*.{js,ts}': ['eslint --fix'],
  '*.{md,json,html,yml}': ['prettier --write'],
}
