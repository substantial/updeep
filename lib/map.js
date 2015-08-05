import curry from 'lodash/function/curry';
import mapValues from 'lodash/object/mapValues';
import update from './update';

function map(iteratee, object) {
  const updater = typeof iteratee === 'function' ?
    iteratee :
    val => update(iteratee, val);

  if (Array.isArray(object)) {
    return object.map(updater);
  }

  return mapValues(object, updater);
}

export default curry(map);
