import update from './update';
import wrap from './wrap';
import forEach from 'lodash/collection/forEach';

function clone(object) {
  if (Array.isArray(object)) {
    return [...object];
  }

  return { ...object };
}

function map(iteratee, object) {
  const updater = typeof iteratee === 'function' ?
    iteratee :
    update(iteratee);

  let newObject;

  forEach(object, (value, index) => {
    const newValue = updater(value, index);

    if (newValue === value) return;

    newObject = newObject || clone(object);

    newObject[index] = newValue;
  });

  return newObject || object;
}

export default wrap(map);
