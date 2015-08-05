import { expect } from 'chai';
import u from '../lib';

describe('u.if', () => {
  it('does not update if the predicate is false', () => {
    const obj = { a: 0 };
    const result = u.if(false, { b: 1 }, obj);
    expect(result).to.eql(obj);
  });

  it('does update if the predicate is true', () => {
    const obj = { a: 0 };
    const result = u.if(true, { b: 1 }, obj);
    expect(result).to.eql({ a: 0, b: 1 });
  });

  it('will use the result of a function passed as a predicate', () => {
    const obj = { a: 0 };
    const aIsThree = x => x.a === 3;
    const result = u.if(aIsThree, { b: 1 }, obj);

    expect(result).to.eql({ a: 0 });
  });

  it('can be partially applied', () => {
    const obj = { a: 2 };
    const isEven = x => x % 2 === 0;
    const inc = x => x + 1;

    const result = u({
      a: u.if(isEven, inc),
    }, obj);

    expect(result).to.eql({ a: 3 });
  });
});
