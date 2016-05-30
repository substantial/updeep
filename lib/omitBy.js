import _omitBy from 'lodash/omitBy';
import wrap from './wrap';

function omitBy(predicate, collection) {
  return _omitBy(collection, predicate);
}

export default wrap(omitBy);
