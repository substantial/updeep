import curry from 'lodash/function/curry';
import update from './update';

function updateIn(path, value, object) {
  const parts = Array.isArray(path) ? path : path.split('.');
  const updates = parts.reduceRight((acc, key) => ({ [key]: acc }), value);

  return update(updates, object);
}

export default curry(updateIn);
