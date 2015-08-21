/* eslint no-shadow:0, no-param-reassign:0 */
export const _ = '@@updeep/placeholder';

function countArguments(args, max) {
  let n = args.length;
  if (n > max) n = max;

  while (args[n - 1] === _) {
    n--;
  }

  return n;
}

export function curry1(fn) {
  return function curried(a, ...[b, c]) {
    const n = countArguments(arguments);

    if (n >= 1) return fn(a, b, c);
    return curried;
  };
}

export function curry2(fn) {
  return function curried(a, b, ...[c, d]) {
    const n = countArguments(arguments, 2);

    if (b === _ || c === _ || d === _) {
      throw new Error('Can only use placeholder on first argument of this function.');
    }

    if (n >= 2) {
      if (a === _) return curry1((a, c, d) => fn(a, b, c, d));
      return fn(a, b, c, d);
    }

    if (n === 1) return curry1((b, c, d) => fn(a, b, c, d));
    return curried;
  };
}

export function curry3(fn) {
  return function curried(a, b, c, ...[d, e]) {
    const n = countArguments(arguments, 3);

    if (c === _ || d === _ || e === _) {
      throw new Error('Can only use placeholder on first or second argument of this function.');
    }

    if (n >= 3) {
      if (a === _) {
        if (b === _) return curry2((a, b, d, e) => fn(a, b, c, d, e));
        return curry1((a, d, e) => fn(a, b, c, d, e));
      }
      if (b === _) return curry1((b, d, e) => fn(a, b, c, d, e));
      return fn(a, b, c, d, e);
    }

    if (n === 2) {
      if (a === _) return curry2((a, c, d, e) => fn(a, b, c, d, e));
      return curry1((c, d, e) => fn(a, b, c, d, e));
    }

    if (n === 1) return curry2((b, c, d, e) => fn(a, b, c, d, e));

    return curried;
  };
}

export function curry4(fn) {
  return function curried(a, b, c, d, ...[e, f]) {
    const n = countArguments(arguments, 4);

    if (d === _ || e === _ || f === _) {
      throw new Error('Can only use placeholder on first, second or third argument of this function.');
    }

    if (n >= 4) {
      if (a === _) {
        if (b === _) {
          if (c === _) return curry3((a, b, c, e, f) => fn(a, b, c, d, e, f));
          return curry2((a, b, e, f) => fn(a, b, c, d, e, f));
        }
        if (c === _) return curry2((a, c, e, f) => fn(a, b, c, d, e, f));
        return curry1((a, e, f) => fn(a, b, c, d, e, f));
      }
      if (b === _) {
        if (c === _) return curry2((b, c, e, f) => fn(a, b, c, d, e, f));
        return curry1((b, e, f) => fn(a, b, c, d, e, f));
      }
      if (c === _) return curry1((c, e, f) => fn(a, b, c, d, e, f));
      return fn(a, b, c, d, e, f);
    }

    if (n === 3) {
      if (a === _) {
        if (b === _) return curry3((a, b, d, e, f) => fn(a, b, c, d, e, f));
        return curry2((a, d, e, f) => fn(a, b, c, d, e, f));
      }
      if (b === _) return curry2((b, d, e, f) => fn(a, b, c, d, e, f));
      return curry1((d, e, f) => fn(a, b, c, d, e, f));
    }

    if (n === 2) {
      if (a === _) return curry3((a, c, d, e, f) => fn(a, b, c, d, e, f));
      return curry2((c, d, e, f) => fn(a, b, c, d, e, f));
    }

    if (n === 1) return curry3((b, c, d, e, f) => fn(a, b, c, d, e, f));
    return curried;
  };
}

export default function curry(fn, length = fn.length) {
  return [
    fn,
    curry1,
    curry2,
    curry3,
    curry4,
  ][length](fn);
}
