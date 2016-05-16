import { expect } from 'chai';
import u from '../lib/index';

describe('u.ifElse', () => {
  it('does updates with the else if the predicate is false', () => {
    const object = { a: 0 };
    const result = u.ifElse(false, { b: 1 }, { b: 2 }, object);
    expect(result).to.eql({ a: 0, b: 2 });
  });

  it('updates with the true update if the predicate is true', () => {
    const object = { a: 0 };
    const result = u.ifElse(true, { b: 1 }, { b: 4 }, object);
    expect(result).to.eql({ a: 0, b: 1 });
  });

  it('will use the result of a function passed as a predicate', () => {
    const object = { a: 0 };
    const aIsThree = x => x.a === 3;
    const result = u.ifElse(aIsThree, { b: 1 }, { b: 4 }, object);

    expect(result).to.eql({ a: 0, b: 4 });
  });

  it('can be partially applied', () => {
    const object = { a: 2 };
    const isEven = x => x % 2 === 0;
    const inc = x => x + 1;
    const dec = x => x - 1;

    const result = u({
      a: u.ifElse(isEven, inc, dec),
    }, object);

    expect(result).to.eql({ a: 3 });
  });

  it('freezes the result', () => {
    expect(Object.isFrozen(u.ifElse(true, {}, {}, {}))).to.be.true;
    expect(Object.isFrozen(u.ifElse(false, {}, {}, {}))).to.be.true;
  });
});
