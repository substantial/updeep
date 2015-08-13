import expect from 'expect';
import u from '../lib';

describe('u.updateIn', () => {
  it('can update a single path described with a string', () => {
    const object = { a: { b: 0 } };
    const result = u.updateIn('a.b', 3, object);
    expect(result).toEqual({ a: { b: 3 } });
  });

  it('can update a single path described with a string with a function', () => {
    const inc = x => x + 1;
    const object = { a: { b: 0 } };
    const result = u.updateIn('a.b', inc, object);
    expect(result).toEqual({ a: { b: 1 } });
  });

  it('can update a single path described with an array', () => {
    const object = { a: { b: 0 } };
    const result = u.updateIn(['a', 'b'], 3, object);
    expect(result).toEqual({ a: { b: 3 } });
  });

  it('can update arrays', () => {
    const object = { a: [0, 0, 0] };
    const result = u.updateIn('a.1', 3, object);
    expect(result).toEqual({ a: [0, 3, 0] });
  });

  it('can be partially applied', () => {
    const object = { a: { b: 0 } };
    const result = u.updateIn('a.b')(3)(object);
    expect(result).toEqual({ a: { b: 3 } });
  });

  it('replaces the object outright if the path is empty', () => {
    const object = {};
    const result = u.updateIn('', 3, object);
    expect(result).toBe(3);
  });

  it('freezes the result', () => {
    expect(Object.isFrozen(u.updateIn('a', 0, {}))).toBe(true);
  });
});
