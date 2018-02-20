function isFreezable(object) {
  if (object === null) return false
  if (object instanceof RegExp) return false
  if (object instanceof ArrayBuffer) return false

  return Array.isArray(object) || typeof object === 'object'
}

function needsFreezing(object) {
  return isFreezable(object) && !Object.isFrozen(object)
}

function recur(object) {
  Object.freeze(object)

  Object.keys(object).forEach(key => {
    const value = object[key]
    if (needsFreezing(value)) {
      recur(value)
    }
  })

  return object
}

/**
 * Deeply freeze a plain javascript object.
 *
 * If `process.env.NODE_ENV === 'production'`, this returns the original object
 * without freezing.
 *
 * Or if `process.env.UPDEEP_MODE === 'dangerously_never_freeze'`, this returns the original object
 * without freezing.
 *
 * @function
 * @sig a -> a
 * @param  {object} object Object to freeze.
 * @return {object} Frozen object, unless in production, then the same object.
 */
function freeze(object) {
  if (process.env.NODE_ENV === 'production') {
    return object
  }

  if (process.env.UPDEEP_MODE === 'dangerously_never_freeze') {
    return object
  }

  if (needsFreezing(object)) {
    recur(object)
  }

  return object
}

export default freeze
