import _reject from 'lodash/reject';
import wrap from './wrap';

function reject(predicate, collection) {
  return _reject(collection, predicate);
}

export default wrap(reject);
