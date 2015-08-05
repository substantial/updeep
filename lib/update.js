import reduce from 'lodash/collection/reduce';
import isEmpty from 'lodash/lang/isEmpty';
import assign from 'lodash/object/assign';
import wrap from './wrap';

function resolveUpdates(updates, object = {}) {
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
  const newObj = [...object];

  return reduce(updates, (acc, value, index) => {
    acc[index] = value;
    return acc;
  }, newObj);
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

  const resolvedUpdates = resolveUpdates(updates, object);

  if (isEmpty(resolvedUpdates)) {
    return object;
  }

  if (Array.isArray(object)) {
    return updateArray(resolvedUpdates, object);
  }

  return assign({}, object, resolvedUpdates);
}

export default wrap(update);
