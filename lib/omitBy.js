import _omitBy from 'lodash/omitBy'
import { size } from './omit'
import wrap from './wrap'

function omitBy(predicate, collection) {
  const result = _omitBy(collection, predicate)
  return size(result) === size(collection) ? collection : result
}

export default wrap(omitBy)
