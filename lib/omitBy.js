import { omitBy as _omitBy } from 'lodash'
import wrap from './wrap'

function omitBy(predicate, collection) {
  return _omitBy(collection, predicate)
}

export default wrap(omitBy)
