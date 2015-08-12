import splitPath from './util/splitPath';
import curry from './util/curry';

function is(path, predicate, object) {
  const parts = splitPath(path);

  let rest = object;
  let part;
  for (part of parts) {
    if (typeof rest === 'undefined') return false;
    rest = rest[part];
  }

  if (typeof predicate === 'function') {
    return predicate(rest);
  }

  return predicate === rest;
}

export default curry(is);
