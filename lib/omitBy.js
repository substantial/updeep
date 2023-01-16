import _omitBy from 'lodash/omitBy'
import size from './util/size'
import wrap from './wrap'

function omitBy(predicate, collection) {
  const result = _omitBy(collection, predicate)

  const changed = size(result) !== size(collection)
  if (changed) {
    return result
  } else {
    return collection
  }
}

export default wrap(omitBy)
