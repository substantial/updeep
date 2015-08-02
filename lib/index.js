import update from './update';
import omit from './omit';
import reject from './reject';
import withDefault from './withDefault';
import freeze from './freeze';
import curry from 'lodash/function/curry';

function updateAndFreeze(updates, obj) {
  return freeze(update(updates, obj));
}

const curried = curry(updateAndFreeze);

curried.omit = omit;
curried.reject = reject;
curried.withDefault = withDefault;

export default curried;
