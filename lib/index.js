import freeze from './freeze';
import _in from './in';
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
u.in = _in;
u.freeze = freeze;
u.map = map;
u.omit = omit;
u.reject = reject;
u.withDefault = withDefault;

export default u;
