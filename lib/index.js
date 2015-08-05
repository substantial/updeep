import update from './update';
import updateIn from './updateIn';
import omit from './omit';
import reject from './reject';
import withDefault from './withDefault';
import freeze from './freeze';
import curry from 'lodash/function/curry';

function updateAndFreeze(updates, obj) {
  return freeze(update(updates, obj));
}

function addChains(func) {
  func.u = (updates) => {
    return addChains((...args) => updeep(updates, func(...args)));
  };
  return func;
}

function makeChainable(func) {
  return (...args) => {
    const result = func(...args);

    if (typeof result === 'function') {
      return addChains(result);
    }

    return result;
  };
}

const updeep = makeChainable(curry(updateAndFreeze));

updeep.in = updateIn;
updeep.freeze = freeze;
updeep.omit = omit;
updeep.reject = reject;
updeep.withDefault = withDefault;

export default updeep;
