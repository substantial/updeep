import { expect } from 'chai';
import u from '../lib';

describe('u.reject', () => {
  it('can reject by index', () => {
    const result = u.reject((_, index) => index === 1, [3, 4, 5]);

    expect(result).to.eql([3, 5]);
  });

  it('freezes the result', () => {
    expect(Object.isFrozen(u.reject('a', []))).to.be.true;
  });
});
