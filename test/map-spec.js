import { expect } from 'chai';
import u from '../lib';

describe('u.map', () => {
  it('applies updates to each item in an array', () => {
    const obj = [0, 1, 2];
    const inc = x => x + 1;
    const result = u.map(inc, obj);

    expect(result).to.eql([1, 2, 3]);
  });

  it('applies updates to each value in an object', () => {
    const obj = { a: 0, b: 1, c: 2 };
    const inc = x => x + 1;
    const result = u.map(inc, obj);

    expect(result).to.eql({ a: 1, b: 2, c: 3 });
  });

  it('can update with a regular updates object', () => {
    const obj = [{ a: 0 }, { a: 0 }];
    const result = u.map({ a: 1 }, obj);

    expect(result).to.eql([{ a: 1 }, { a: 1 }]);
  });

  it('passes the key or index as the second parameter to the iteratee', () => {
    const obj = {
      a: { x: 0 },
      b: [3, 3],
    };
    const setToKey = (_, key) => key;
    const result = u.map(u.map(setToKey), obj);

    expect(result).to.eql( {
      a: { x: 'x' },
      b: [0, 1],
    });
  });

  it('can be partially applied', () => {
    const obj = {
      b: [3, 3],
    };
    const setToKey = (_, key) => key;
    const result = u({
      b: u.map(setToKey),
    }, obj);

    expect(result).to.eql( {
      b: [0, 1],
    });
  });
});
