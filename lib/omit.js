import _omit from 'lodash/omit';
import wrap from './wrap';
import warning from 'warning';

function omit(predicate, collection) {
  warning(false, 'u.omit is going to be removed, please use \'lodash/fp/omit\' from lodash >= 4.1.0 instead.'); // eslint-disable-line max-len
  return _omit(collection, predicate);
}

export default wrap(omit);
