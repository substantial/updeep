import _reject from 'lodash/reject';
import wrap from './wrap';

function reject(predicate, collection) {
  const result = _reject(collection, predicate);
  const equal = collection.length === result.length;

  return equal ?
    collection :
    result;
}

export default wrap(reject);
