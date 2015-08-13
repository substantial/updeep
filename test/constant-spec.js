import expect from 'expect';
import u from '../lib';

describe('u.constant', () => {
  it('returns what it is given... constantly', () => {
    const func = u.constant(4);

    expect(func()).toBe(4);
    expect(func('hi')).toBe(4);
    expect(func('hi', 8)).toBe(4);
    expect(func(4)).toBe(4);
  });

  it('freezes the result', () => {
    expect(Object.isFrozen(u.constant({})())).toBe(true);
  });
});
