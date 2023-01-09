import _omit from 'lodash/omit'
import wrap from './wrap'

export const size = (obj) =>
  Array.isArray(obj) ? obj.length : Object.keys(obj).length

function omit(predicate, collection) {
  const result = _omit(collection, predicate)
  return size(result) === size(collection) ? collection : result
}

export default wrap(omit)
