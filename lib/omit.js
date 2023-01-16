import _omit from 'lodash/omit'
import wrap from './wrap'
import size from './util/size'

function omit(predicate, collection) {
  const result = _omit(collection, predicate)
  return size(result) === size(collection) ? collection : result
}

export default wrap(omit)
