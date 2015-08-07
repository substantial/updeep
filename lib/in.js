import curry from 'lodash/function/curry';
import update from './update';
import splitPath from './util/splitPath';

function updateIn(path, value, object) {
  const parts = splitPath(path);
  const updates = parts.reduceRight((acc, key) => ({ [key]: acc }), value);

  return update(updates, object);
}

export default curry(updateIn);
