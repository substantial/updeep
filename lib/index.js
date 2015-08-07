import freeze from './freeze';
import is from './is';
import ifElse from './ifElse';
import map from './map';
import omit from './omit';
import reject from './reject';
import update from './update';
import updateIn from './updateIn';
import withDefault from './withDefault';

import { placeholder as _ } from 'lodash/function/curry';

const u = update;

u.if = ifElse(_, _, {});
u.ifElse = ifElse;
u.is = is;
u.freeze = freeze;
u.map = map;
u.omit = omit;
u.reject = reject;
u.update = update;
u.updateIn = updateIn;
u.withDefault = withDefault;

export default u;
