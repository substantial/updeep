import { expect } from 'chai';
import u from '../lib';

describe('u.in', () => {
  it('can update a single path described with a string', () => {
    const obj = { a: { b: 0 } };
    const result = u.in('a.b', 3, obj);
    expect(result).to.eql({ a: { b: 3 } });
  });

  it('can update a single path described with a string with a function', () => {
    const inc = x => x + 1;
    const obj = { a: { b: 0 } };
    const result = u.in('a.b', inc, obj);
    expect(result).to.eql({ a: { b: 1 } });
  });

  it('can update a single path described with an array', () => {
    const obj = { a: { b: 0 } };
    const result = u.in(['a', 'b'], 3, obj);
    expect(result).to.eql({ a: { b: 3 } });
  });

  it('can update arrays', () => {
    const obj = { a: [0, 0, 0] };
    const result = u.in('a.1', 3, obj);
    expect(result).to.eql({ a: [0, 3, 0] });
  });

  it('can be partially applied', () => {
    const obj = { a: { b: 0 } };
    const result = u.in('a.b')(3)(obj);
    expect(result).to.eql({ a: { b: 3 } });
  });
});
