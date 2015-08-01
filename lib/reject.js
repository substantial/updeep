import reject from 'lodash/collection/reject';
import curry from 'lodash/function/curry';

export default curry((predicate, collection) => reject(collection, predicate));
