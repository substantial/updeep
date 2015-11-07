import isEmpty from './isEmpty';

function isIntAndInRange(value, maxIndex) {
  if (isNaN(value)) {
    return false;
  }
  const x = parseFloat(value);
  return (x | 0) === x && (x >= 0 && x <= maxIndex);
}

function isArrayUpdate(updates) {
  const keys = Object.keys(updates);
  const maxIndex = keys.length - 1;
  for (const updateKey of keys) {
    if (!isIntAndInRange(updateKey, maxIndex)) { return false; }
  }

  return true;
}

function arrayOrObject(updates) {
  if (!isEmpty(updates) && isArrayUpdate(updates)) {
    return [];
  }

  return {};
}

function defaultObject(object, updates) {
  if (typeof object === 'undefined' || object === null) {
    return arrayOrObject(updates);
  }

  return object;
}

export default defaultObject;
