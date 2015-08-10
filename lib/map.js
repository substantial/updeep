import update from './update';
import wrap from './wrap';

function forEach(object, callback) {
  if (Array.isArray(object)) {
    object.forEach(callback);
  } else {
    Object.keys(object).forEach((key) => callback(object[key], key));
  }
}

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
