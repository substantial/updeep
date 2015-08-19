import { expect } from 'chai';
import u from '../lib';

describe('u.reject', () => {
  it('freezes the result', () => {
    expect(Object.isFrozen(u.reject('a', []))).to.be.true;
  });
});
