/* eslint no-shadow:0 */
export function curry1(fn) {
  return function curried(a, b, c) {
    const n = arguments.length;

    if (n >= 1) return fn(a, b, c);
    return curried;
  };
}

export function curry2(fn) {
  return function curried(a, b, c, d) {
    const n = arguments.length;

    if (n >= 2) return fn(a, b, c, d);
    if (n === 1) return curry1((b, c, d) => fn(a, b, c, d));
    return curried;
  };
}

export function curry3(fn) {
  return function curried(a, b, c, d, e) {
    const n = arguments.length;

    if (n >= 3) return fn(a, b, c, d, e);
    if (n === 2) return curry1((c, d, e) => fn(a, b, c, d, e));
    if (n === 1) return curry2((b, c, d, e) => fn(a, b, c, d, e));
    return curried;
  };
}
