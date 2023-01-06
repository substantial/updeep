import isPlainObject from 'lodash/isPlainObject'
import _omitBy from 'lodash/omitBy'

import wrap from './wrap'
import constant from './constant'

const innerOmitted = {__omitted: true}
export const omitted = constant(innerOmitted)

function isEmpty(object) {
  return !Object.keys(object).length
}

function reduce(object, callback, initialValue) {
  return Object.keys(object).reduce(
    (acc, key) => callback(acc, object[key], key),
    initialValue
  )
}

function resolveUpdates(updates, object) {
  return reduce(
    updates,
    (acc, value, key) => {
      let updatedValue = value

      if (
        !Array.isArray(value) &&
        value !== null &&
        typeof value === 'object'
      ) {
        updatedValue = update(value, object[key]) // eslint-disable-line no-use-before-define
      } else if (typeof value === 'function') {
        updatedValue = value(object[key])
      }

      if (object[key] !== updatedValue) {
        acc[key] = updatedValue // eslint-disable-line no-param-reassign
      }

      return acc
    },
    {}
  )
}

function updateArray(updates, object) {
  const newArray = [...object]

  Object.keys(updates).forEach((key) => {
    newArray[key] = updates[key]
  })

  return newArray
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
    return updates(object, ...args)
  }

  if (!isPlainObject(updates)) {
    return updates
  }

  const defaultedObject =
    typeof object === 'undefined' || object === null ? {} : object

  const resolvedUpdates = resolveUpdates(updates, defaultedObject)

  // remove the u.omitted updates on keys that aren't there,
  // as they are no-op (which is no big deal) but would result in
  // creating a copy of the original object (which is what we
  // want to avoid).
  Object.entries(resolvedUpdates)
    .filter(([_, value]) => value === innerOmitted)
    .filter(([key]) => !defaultedObject.hasOwnProperty(key))
    .forEach(([key]) => delete resolvedUpdates[key])

  if (isEmpty(resolvedUpdates)) {
    return defaultedObject
  }

  if (Array.isArray(defaultedObject)) {
    return updateArray(resolvedUpdates, defaultedObject).filter(
      (value) => value !== innerOmitted
    )
  }

  return _omitBy(
    {...defaultedObject, ...resolvedUpdates},
    (value) => value === innerOmitted
  )
}

export default wrap(update, 2)
