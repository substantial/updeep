import reduce from 'lodash/collection/reduce';
import isEmpty from 'lodash/lang/isEmpty';
import curry from 'lodash/function/curry';
import assign from 'lodash/object/assign';

function resolveUpdates(updates, obj = {}) {
  return reduce(updates, (acc, value, key) => {
    if (!Array.isArray(value) && typeof value === 'object') {
      value = update(value, obj[key]);
    } else if (typeof value === 'function') {
      value = value(obj[key]);
    }

    if (obj[key] !== value) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

function updateArray(updates, obj) {
  const newObj = [...obj];

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
 */
function update(updates, obj) {
  if (typeof updates === 'function') {
    return updates(obj);
  }

  const resolvedUpdates = resolveUpdates(updates, obj);

  if (isEmpty(resolvedUpdates)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return updateArray(resolvedUpdates, obj);
  }

  return assign({}, obj, resolvedUpdates);
}

export default curry(update);
