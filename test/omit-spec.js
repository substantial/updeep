import expect from 'expect';
import u from '../lib';

describe('u.omit', () => {
  it('can omit a key', () => {
    const result = u({ foo: u.omit('bar') }, { foo: { bar: 7 } });

    expect(result).toEqual({ foo: {} });
  });

  it('freezes the result', () => {
    expect(Object.isFrozen(u.omit('a', {}))).toBe(true);
  });
});
