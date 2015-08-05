function isFreezable(object) {
  if (object === null) return false;

  return Array.isArray(object) ||
    typeof object === 'object';
}

function needsFreezing(object) {
  return isFreezable(object) && !Object.isFrozen(object);
}

function recur(object) {
  Object.freeze(object);

  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (needsFreezing(value)) {
      recur(value);
    }
  });

  return object;
}

export default function freeze(object) {
  if (process.env.NODE_ENV === 'production') {
    return object;
  }

  if (needsFreezing(object)) {
    recur(object);
  }

  return object;
}
