function isFreezable(obj) {
  return Array.isArray(obj) ||
    typeof obj === 'object';
}

function needsFreezing(obj) {
  return isFreezable(obj) && !Object.isFrozen(obj);
}

function recur(obj) {
  Object.freeze(obj);

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (needsFreezing(value)) {
      recur(value);
    }
  });

  return obj;
}

export default function freeze(obj) {
  if (process.env.NODE_ENV === 'production') {
    return obj;
  }

  if (needsFreezing(obj)) {
    recur(obj);
  }

  return obj;
}
