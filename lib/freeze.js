function isFreezable(obj) {
  if (Object.isFrozen(obj)) {
    return false;
  }

  return Array.isArray(obj) || typeof obj === 'object';
}

function recur(obj) {
  Object.freeze(obj);

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (isFreezable(value)) {
      recur(value);
    }
  });

  return obj;
}

export default function freeze(obj) {
  if (process.env.NODE_ENV === 'production') {
    return obj;
  }

  if (isFreezable(obj)) {
    recur(obj);
  }

  return obj;
}
