import wrap from './wrap';
import isEmpty from './util/isEmpty';
import defaultObject from './util/defaultObject';

function reduce(object, callback, initialValue) {
  return Object.keys(object).reduce((acc, key) => {
    return callback(acc, object[key], key);
  }, initialValue);
}

function resolveUpdates(updates, object) {
  return reduce(updates, (acc, value, key) => {
    let updatedValue = value;

    if (!Array.isArray(value) && value !== null && typeof value === 'object') {
      updatedValue = update(value, object[key]);
    } else if (typeof value === 'function') {
      updatedValue = value(object[key]);
    }

    if (object[key] !== updatedValue) {
      acc[key] = updatedValue;
    }

    return acc;
  }, {});
}

function updateArray(updates, object) {
  const newArray = [...object];

  Object.keys(updates).forEach((key) => {
    newArray[key] = updates[key];
  });

  return newArray;
}

/**
 * Recursively update an object or array.
 *
 * Can update with values:
 * update({ foo: 3 }, { foo: 1, bar: 2 });
 * // => { foo: 3, bar: 2 }
 *
 * Or with a function:
 * update({ foo: x => (x + 1) }, { foo: 2 });
 * // => { foo: 3 }
 *
 * @function
 * @name update
 * @param {Object|Function} updates
 * @param {Object|Array}    object to update
 * @return {Object|Array}   new object with modifications
 */
function update(updates, object, ...args) {
  if (typeof updates === 'function') {
    return updates(object, ...args);
  }

  if (updates === null || typeof updates !== 'object') {
    return updates;
  }

  const defaultedObject = defaultObject(object, updates);

  const resolvedUpdates = resolveUpdates(updates, defaultedObject);

  if (isEmpty(resolvedUpdates)) {
    return defaultedObject;
  }

  if (Array.isArray(defaultedObject)) {
    return updateArray(resolvedUpdates, defaultedObject);
  }

  return { ...defaultedObject, ...resolvedUpdates };
}

export default wrap(update, 2);
