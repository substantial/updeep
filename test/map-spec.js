import expect from 'expect';
import u from '../lib';

describe('u.map', () => {
  it('applies updates to each item in an array', () => {
    const object = [0, 1, 2];
    const inc = x => x + 1;
    const result = u.map(inc, object);

    expect(result).toEqual([1, 2, 3]);
  });

  it('applies updates to each value in an object', () => {
    const object = { a: 0, b: 1, c: 2 };
    const inc = x => x + 1;
    const result = u.map(inc, object);

    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('can update with a regular updates object', () => {
    const object = [{ a: 0 }, { a: 0 }];
    const result = u.map({ a: 1 }, object);

    expect(result).toEqual([{ a: 1 }, { a: 1 }]);
  });

  it('returns the same object if no updates are made', () => {
    const array = [0, 1];
    const ident = x => x;
    let result = u.map(ident, array);

    expect(result).toBe(array);

    const object = { a: 0 };
    result = u.map(ident, object);

    expect(result).toBe(object);
  });

  it('passes the key or index as the second parameter to the iteratee', () => {
    const object = {
      a: { x: 0 },
      b: [3, 3],
    };
    const setToKey = (_, key) => key;
    const result = u.map(u.map(setToKey), object);

    expect(result).toEqual( {
      a: { x: 'x' },
      b: [0, 1],
    });
  });

  it('can be partially applied', () => {
    const object = {
      b: [3, 3],
    };
    const setToKey = (_, key) => key;
    const result = u({
      b: u.map(setToKey),
    }, object);

    expect(result).toEqual( {
      b: [0, 1],
    });
  });

  it('freezes the result', () => {
    expect(Object.isFrozen(u.map({}, {}))).toBe(true);
  });
});
