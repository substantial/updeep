import expect from 'expect';
import u from '../lib';

describe('u.reject', () => {
  it('freezes the result', () => {
    expect(Object.isFrozen(u.reject('a', []))).toBe(true);
  });
});
