import _omit from 'lodash/omit'
import size from 'lodash/size'
import wrap from './wrap'

function omit(predicate, collection) {
  const result = _omit(collection, predicate)
  return size(result) === size(collection) ? collection : result
}

export default wrap(omit)
