import freeze from './freeze';
import _in from './in';
import _if from './if';
import map from './map';
import omit from './omit';
import reject from './reject';
import withDefault from './withDefault';
import update from './update';

const u = update;

u.if = _if;
u.in = _in;
u.freeze = freeze;
u.map = map;
u.omit = omit;
u.reject = reject;
u.withDefault = withDefault;

export default u;
