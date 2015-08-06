import update from './update';
import wrap from './wrap';

function updateIfElse(predicate, trueUpdates, falseUpdates, object) {
  const test = typeof predicate === 'function' ?
    predicate(object) :
    predicate;

  const updates = test ? trueUpdates : falseUpdates;

  return update(updates, object);
}

export default wrap(updateIfElse);
