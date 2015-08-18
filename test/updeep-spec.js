import expect from 'expect';
import u from '../lib';

describe('updeep', () => {
  it('does not change anything if no updates are specified', () => {
    const object = { foo: 3, bar: [7, 5] };
    const result = u({}, object);

    expect(result).toBe(object);
  });

  it('can update with fixed values', () => {
    const object = { foo: 3, bar: [7, 5] };
    const result = u({ foo: 4 }, object);

    expect(result).toEqual({ foo: 4, bar: [7, 5] });
  });

  it('returns the same instance if an update doesn\'t make changes', () => {
    const object = { foo: 3 };
    const result = u({ foo: 3 }, object);

    expect(result).toBe(object);
  });

  it('can update a nested structure', () => {
    const object = { foo: { bar: 7, bam: 3 }, baz: 32 };
    const result = u({ foo: { bar: 8 } }, object);

    expect(result).toEqual({ foo: { bar: 8, bam: 3 }, baz: 32 });
  });

  it('can update arrays', () => {
    const object = [1, 2, 3];
    const result = u({ 1: 7 }, object);

    expect(result).toEqual([1, 7, 3]);
  });

  it('replaces the object outright if updates are a constant', () => {
    expect(u(3, {})).toBe(3);
    expect(u(null, {})).toBe(null);
  });

  it('can add an element to an array', () => {
    const object = [];
    const result = u({ 0: 3 }, object);

    expect(result).toEqual([3]);
  });

  it('can update nested arrays', () => {
    const object = { foo: [1, 2, 3], bar: 9 };
    const result = u({ foo: { 1: 7 } }, object);

    expect(result).toEqual({ foo: [1, 7, 3], bar: 9 });
  });

  it('can use functions to update values', () => {
    const inc = (i) => i + 1;
    const object = { foo: 3, bar: 4, baz: 7 };
    const result = u({ foo: inc, bar: inc }, object);

    expect(result).toEqual({ foo: 4, bar: 5, baz: 7 });
  });

  it('can be partially applied', () => {
    const inc = (i) => i + 1;
    const object = { foo: 3 };
    const incFoo = u({ foo: inc });

    const result = incFoo(object);

    expect(result).toEqual({ foo: 4 });
  });

  it('passes additional arguments on to updates if it is a function', () => {
    const func = (_, x) => x;
    const result = u(func, 0, 4);

    expect(result).toBe(4);
  });

  it('can update if the value is an array', () => {
    const object = {};
    const result = u({ foo: [0, 1] }, object);

    expect(result).toEqual({ foo: [0, 1] });
  });

  it('can update when original object is undefined', () => {
    const result = u({ foo: [0, 1] }, undefined);

    expect(result).toEqual({ foo: [0, 1] });
  });

  it('can take a function as the updater', () => {
    const result = u(i => i + 1, 7);

    expect(result).toEqual(8);
  });

  it('deeply freezes the result', () => {
    const result = u({ foo: { bar: 3 } }, { foo: { bar: 0 } });

    expect(Object.isFrozen(result)).toBe(true);
    expect(Object.isFrozen(result.foo)).toBe(true);
  });

  it('assigns null values', () => {
    expect(u({isNull: null}, {})).toEqual({isNull: null});
  });

  it('can use a placeholder to partially apply', () => {
    function increment(i) { return i + 1; }
    const updateJoe = u(u._, { name: 'Joe Merrill', age: 21 });
    const result = updateJoe({ age: increment });

    expect(result).toEqual({ name: 'Joe Merrill', age: 22 });
  });

  it('defaults to an empty object when null or undefined', () => {
    let result = u({ a: { b: 0 } }, { a: null });
    expect(result).toEqual({ a: { b: 0 } });

    result = u({ a: { b: 0 } }, { a: undefined });
    expect(result).toEqual({ a: { b: 0 } });

    result = u({ a: { b: 0 } }, { });
    expect(result).toEqual({ a: { b: 0 } });
  });

  it('preserves empty objects when empty updates are specified', () => {
    const result = u({ a: {} }, {});
    expect(result).toEqual({ a: {} });
  });
});
