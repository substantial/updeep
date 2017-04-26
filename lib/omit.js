import { omit as _omit } from 'lodash'
import wrap from './wrap'

function omit(predicate, collection) {
  return _omit(collection, predicate)
}

export default wrap(omit)
