import { forEach } from 'lodash'
import { map as mapArray } from 'lodash'
import { mapValues as mapObject } from 'lodash'
import update from './update'
import wrap from './wrap'

function shallowEqual(object, otherObject) {
  let equal = true
  // eslint-disable-next-line consistent-return
  forEach(otherObject, (value, key) => {
    if (value !== object[key]) {
      equal = false

      // exit early
      return false
    }
  })

  return equal
}

function map(iteratee, object) {
  const updater = typeof iteratee === 'function' ? iteratee : update(iteratee)

  const mapper = Array.isArray(object) ? mapArray : mapObject

  const newObject = mapper(object, updater)
  const equal = shallowEqual(object, newObject)

  return equal ? object : newObject
}

export default wrap(map)
