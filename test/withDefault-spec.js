import expect from 'expect';
import u from '../lib';

describe('u.withDefault', () => {
  it('uses the default as the basis for the update if the object is undefined', () => {
    const inc = x => x + 1;
    const result = u.withDefault({ a: 0 }, { a: inc }, undefined);

    expect(result).toEqual({ a: 1 });
  });

  it('uses ignores the default if the object is defined', () => {
    const inc = x => x + 1;
    const result = u.withDefault({ a: 0 }, { a: inc }, { a: 3 });

    expect(result).toEqual({ a: 4 });
  });

  it('can be partially applied', () => {
    const object = {};
    const result = u({
      foo: u.withDefault([], { 0: 'bar' }),
    }, object);

    expect(result).toEqual({ foo: ['bar'] });
  });

  it('freezes the result', () => {
    expect(Object.isFrozen(u.withDefault({}, { a: 1 })(undefined))).toBe(true);
  });
});
