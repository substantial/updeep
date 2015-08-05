import update from './update';
import _in from './in';
import _if from './if';
import omit from './omit';
import reject from './reject';
import withDefault from './withDefault';
import freeze from './freeze';
import curry from 'lodash/function/curry';

function updateAndFreeze(updates, obj) {
  return freeze(update(updates, obj));
}

const updeep = curry(updateAndFreeze);

updeep.if = _if;
updeep.in = _in;
updeep.freeze = freeze;
updeep.omit = omit;
updeep.reject = reject;
updeep.withDefault = withDefault;

export default updeep;
