import freeze from './freeze';
import _in from './in';
import _if from './if';
import map from './map';
import omit from './omit';
import reject from './reject';
import withDefault from './withDefault';
import update from './update';

import curry from 'lodash/function/curry';

function updateAndFreeze(updates, object) {
  return freeze(update(updates, object));
}

const updeep = curry(updateAndFreeze);

updeep.if = _if;
updeep.in = _in;
updeep.freeze = freeze;
updeep.map = map;
updeep.omit = omit;
updeep.reject = reject;
updeep.withDefault = withDefault;

export default updeep;
