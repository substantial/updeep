import update from './update';
import wrap from './wrap';

function updateIf(predicate, updates, object) {
  const test = typeof predicate === 'function' ?
    predicate(object) :
    predicate;

  if (!test) {
    return object;
  }

  return update(updates, object);
}

export default wrap(updateIf);
