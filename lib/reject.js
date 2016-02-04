import _reject from 'lodash/reject';
import wrap from './wrap';
import warning from 'warning';

function reject(predicate, collection) {
  warning(false, 'u.reject is going to be removed, please use \'lodash/fp/reject\' from lodash >= 4.1.0 instead.'); // eslint-disable-line max-len
  return _reject(collection, predicate);
}

export default wrap(reject);
