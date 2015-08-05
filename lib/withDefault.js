import update from './update';
import curry from 'lodash/function/curry';

function withDefault(defaultValue, updates, object) {
  if (typeof object === 'undefined') {
    return update(updates, defaultValue);
  }

  return update(updates, object);
}

export default curry(withDefault);
