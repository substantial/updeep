const omit = require('lodash/object/omit');
const curry = require('lodash/function/curry');

module.exports = curry((predicate, collection) => omit(collection, predicate));
