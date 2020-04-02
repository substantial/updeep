'use strict'

module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{md,json,html,yml,css,sass,scss,rb,rake,graphql}': ['prettier --write'],
}
