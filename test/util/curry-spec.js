import { expect } from 'chai';
import { curry1, curry2, curry3, curry4 } from '../../lib/util/curry';

describe('curry1', () => {
  it('can curry one arguments', () => {
    const addOne = curry1((x) => x + 1);
    expect(addOne(3)).to.equal(4);
    expect(addOne()(3)).to.equal(4);
  });

  it('will take up to two extra arguments', () => {
    const curried = curry1((a, b, c) => [a, b, c]);
    expect(curried(1, 2, 3, 4)).to.eql([1, 2, 3]);
  });
});

describe('curry2', () => {
  it('can curry two arguments', () => {
    const add = curry2((x, y) => x + y);
    expect(add(3)(4)).to.equal(7);
    expect(add()(3)()(4)).to.equal(7);
    expect(add(3, 4)).to.equal(7);
  });

  it('will take up to two extra arguments', () => {
    const curried = curry2((a, b, c, d) => [a, b, c, d]);
    expect(curried(1, 2, 3, 4, 5)).to.eql([1, 2, 3, 4]);
  });
});

describe('curry3', () => {
  it('can curry three arguments', () => {
    const add = curry3((x, y, z) => x + y + z);
    expect(add(3)(4)(5)).to.equal(12);
    expect(add()(3)()(4, 5)).to.equal(12);
    expect(add(3, 4, 5)).to.equal(12);
  });

  it('will take up to two extra arguments', () => {
    const curried = curry3((a, b, c, d, e) => [a, b, c, d, e]);
    expect(curried(1, 2, 3, 4, 5, 6)).to.eql([1, 2, 3, 4, 5]);
  });
});

describe('curry4', () => {
  it('can curry four arguments', () => {
    const add = curry4((x, y, z, u) => x + y + z + u);
    expect(add(3)(4)(5)(6)).to.equal(18);
    expect(add()(3)()(4, 5, 6)).to.equal(18);
    expect(add(3, 4, 5, 6)).to.equal(18);
  });

  it('will take up to two extra arguments', () => {
    const curried = curry4((a, b, c, d, e, f) => [a, b, c, d, e, f]);
    expect(curried(1, 2, 3, 4, 5, 6, 7)).to.eql([1, 2, 3, 4, 5, 6]);
  });
});
