import isEmpty from './isEmpty';

function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  const x = parseFloat(value);
  return (x | 0) === x;
}

function isArrayUpdate(updates) {
  for (const updateKey of Object.keys(updates)) {
    if (!isInt(updateKey)) { return false; }
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
