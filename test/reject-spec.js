import { expect } from 'chai';
import u from '../lib/index';

describe('u.reject', () => {
  it('can reject by index', () => {
    const result = u.reject((_, index) => index === 1, [3, 4, 5]);

    expect(result).to.eql([3, 5]);
  });

  it('can reject with callback shorthand', () => {
    const result = u.reject('bad', [{ bad: true }, { bad: false }]);

    expect(result).to.eql([{ bad: false }]);
  });

  it('freezes the result', () => {
    expect(Object.isFrozen(u.reject('a', []))).to.be.true;
  });
});
