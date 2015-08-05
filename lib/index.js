import update from './update';
import omit from './omit';
import reject from './reject';
import withDefault from './withDefault';
import freeze from './freeze';
import curry from 'lodash/function/curry';

function updateAndFreeze(updates, obj) {
  return freeze(update(updates, obj));
}

const updeep = curry(updateAndFreeze);

updeep.omit = omit;
updeep.reject = reject;
updeep.withDefault = withDefault;
updeep.freeze = freeze;

export default updeep;
