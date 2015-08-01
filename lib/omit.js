import omit from 'lodash/object/omit';
import curry from 'lodash/function/curry';

export default curry((predicate, collection) => omit(collection, predicate));
