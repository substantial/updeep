const reject = require('lodash/collection/reject');
const curry = require('lodash/function/curry');

module.exports = curry((predicate, collection) => reject(collection, predicate));
