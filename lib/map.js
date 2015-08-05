import mapValues from 'lodash/object/mapValues';
import update from './update';
import wrap from './wrap';

function map(iteratee, object) {
  const updater = update(iteratee);

  if (Array.isArray(object)) {
    return object.map(updater);
  }

  return mapValues(object, updater);
}

export default wrap(map);
