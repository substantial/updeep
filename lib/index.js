import freeze from './freeze';
import updateIn from './updateIn';
import is from './is';
import ifElse from './ifElse';
import map from './map';
import omit from './omit';
import reject from './reject';
import withDefault from './withDefault';
import update from './update';

import { placeholder as _ } from 'lodash/function/curry';

const u = update;

u.if = ifElse(_, _, {});
u.ifElse = ifElse;
u.updateIn = updateIn;
u.is = is;
u.freeze = freeze;
u.map = map;
u.omit = omit;
u.reject = reject;
u.withDefault = withDefault;

export default u;
