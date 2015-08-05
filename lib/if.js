import curry from 'lodash/function/curry';
import update from './update';

function updateIf(predicate, updates, object) {
  const test = typeof predicate === 'function' ?
    predicate(object) :
    predicate;

  if (!test) {
    return object;
  }

  return update(updates, object);
}

export default curry(updateIf);
