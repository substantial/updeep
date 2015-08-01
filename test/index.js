import { expect } from 'chai';
import u from '../lib';

describe('updeep', () => {
  it('does not change anything if no updates are specified', () => {
    const obj = { foo: 3, bar: [7, 5] };
    const result = u({}, obj);

    expect(result).to.equal(obj);
  });

  it('can update with fixed values', () => {
    const obj = { foo: 3, bar: [7, 5] };
    const result = u({ foo: 4 }, obj);

    expect(result).to.deep.equal({ foo: 4, bar: [7, 5] });
  });

  it('returns the same instance if an update doesn\'t make changes', () => {
    const obj = { foo: 3 };
    const result = u({ foo: 3 }, obj);

    expect(result).to.equal(obj);
  });

  it('can update a nested structure', () => {
    const obj = { foo: { bar: 7, bam: 3 }, baz: 32 };
    const result = u({ foo: { bar: 8 } }, obj);

    expect(result).to.deep.equal({ foo: { bar: 8, bam: 3 }, baz: 32 });
  });

  it('can update arrays', () => {
    const obj = [1, 2, 3];
    const result = u({ 1: 7 }, obj);

    expect(result).to.deep.equal([1, 7, 3]);
  });

  it('can add an element to an array', () => {
    const obj = [];
    const result = u({ 0: 3 }, obj);

    expect(result).to.eql([3]);
  });

  it('can update nested arrays', () => {
    const obj = { foo: [1, 2, 3], bar: 9 };
    const result = u({ foo: { 1: 7 } }, obj);

    expect(result).to.deep.equal({ foo: [1, 7, 3], bar: 9 });
  });

  it('can use functions to update values', () => {
    const inc = (i) => i + 1;
    const obj = { foo: 3, bar: 4, baz: 7 };
    const result = u({ foo: inc, bar: inc }, obj);

    expect(result).to.deep.equal({ foo: 4, bar: 5, baz: 7 });
  });

  it('is curryable', () => {
    const inc = (i) => i + 1;
    const obj = { foo: 3 };
    const incFoo = u({ foo: inc });

    const result = incFoo(obj);

    expect(result).to.deep.equal({ foo: 4 });
  });

  it('can update if the value is an array', () => {
    const obj = {};
    const result = u({ foo: [0, 1] }, obj);

    expect(result).to.deep.equal({ foo: [0, 1] });
  });

  it('can use withDefault to default things', () => {
    const obj = {};
    const result = u({
      foo: u.withDefault([], {
        0: 'bar'
      })
    }, obj);

    expect(result).to.eql({ foo: ['bar'] });
  });

  it('can update when original object is undefined', () => {
    const result = u({ foo: [0, 1] }, undefined);

    expect(result).to.deep.equal({ foo: [0, 1] });
  });

  it('can take a function as the updater', () => {
    const result = u(i => i + 1, 7);

    expect(result).to.eql(8);
  });

  it('can omit a key', () => {
    const result = u({ foo: u.omit('bar') }, { foo: { bar: 7 } });

    expect(result).to.eql({ foo: {} });
  });
});
