import _omit from 'lodash/omit'
import wrap from './wrap'
import size from './util/size'

function omit(predicate, collection) {
  const result = _omit(collection, predicate)

  const changed = size(result) !== size(collection)
  if (changed) {
    return result
  } else {
    return collection
  }
}

export default wrap(omit)
