import splitPath from './util/splitPath';
import curry from './util/curry';

function is(path, predicate, object) {
  const parts = splitPath(path);

  let rest = object;
  for (let i = 0; i < parts.length; i += 1) {
    if (typeof rest === 'undefined') return false;
    const part = parts[i];
    rest = rest[part];
  }

  if (typeof predicate === 'function') {
    return predicate(rest);
  }

  return predicate === rest;
}

export default curry(is);
