import ifElse from './ifElse';
import curry from './util/curry';

export default curry((predicate, trueUpdates, object) =>
  ifElse(predicate, trueUpdates, {}, object)
);
