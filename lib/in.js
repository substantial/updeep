import curry from 'lodash/function/curry';
import reject from 'lodash/collection/reject';
import update from './update';

function updateIn(path, value, object) {
  const parts = Array.isArray(path) ?
    path :
    reject(path.split('.'), x => !x);

  const updates = parts.reduceRight((acc, key) => ({ [key]: acc }), value);

  return update(updates, object);
}

export default curry(updateIn);
