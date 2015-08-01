import { expect } from 'chai';
import updeep from '../lib';

describe('updeep', () => {
  it('does not change anything if no updates are specified', () => {
    const obj = { foo: 3, bar: [7, 5] };
    const result = updeep({}, obj);

    expect(result).to.equal(obj);
  });

  it('can update with fixed values', () => {
    const obj = { foo: 3, bar: [7, 5] };
    const result = updeep({ foo: 4 }, obj);

    expect(result).to.deep.equal({ foo: 4, bar: [7, 5] });
  });

  it('returns the same instance if an update doesn\'t make changes', () => {
    const obj = { foo: 3 };
    const result = updeep({ foo: 3 }, obj);

    expect(result).to.equal(obj);
  });

  it('can update a nested structure', () => {
    const obj = { foo: { bar: 7, bam: 3 }, baz: 32 };
    const result = updeep({ foo: { bar: 8 } }, obj);

    expect(result).to.deep.equal({ foo: { bar: 8, bam: 3 }, baz: 32 });
  });

  it('can update arrays', () => {
    const obj = [1, 2, 3];
    const result = updeep({ 1: 7 }, obj);

    expect(result).to.deep.equal([1, 7, 3]);
  });

  it('can add an element to an array', () => {
    const obj = [];
    const result = updeep({ 0: 3 }, obj);

    expect(result).to.eql([3]);
  });

  it('can update nested arrays', () => {
    const obj = { foo: [1, 2, 3], bar: 9 };
    const result = updeep({ foo: { 1: 7 } }, obj);

    expect(result).to.deep.equal({ foo: [1, 7, 3], bar: 9 });
  });

  it('can use functions to update values', () => {
    const inc = (i) => i + 1;
    const obj = { foo: 3, bar: 4, baz: 7 };
    const result = updeep({ foo: inc, bar: inc }, obj);

    expect(result).to.deep.equal({ foo: 4, bar: 5, baz: 7 });
  });

  it('is curryable', () => {
    const inc = (i) => i + 1;
    const obj = { foo: 3 };
    const incFoo = updeep({ foo: inc });

    const result = incFoo(obj);

    expect(result).to.deep.equal({ foo: 4 });
  });

  it('can update if the value is an array', () => {
    const obj = {};
    const result = updeep({ foo: [0, 1] }, obj);

    expect(result).to.deep.equal({ foo: [0, 1] });
  });

  it('can use withDefault to default things', () => {
    const obj = {};
    const result = updeep({
      foo: updeep.withDefault([], {
        0: 'bar'
      })
    }, obj);

    expect(result).to.eql({ foo: ['bar'] });
  });

  it('can update when original object is undefined', () => {
    const result = updeep({ foo: [0, 1] }, undefined);

    expect(result).to.deep.equal({ foo: [0, 1] });
  });

  it('can take a function as the updater', () => {
    const result = updeep(i => i + 1, 7);

    expect(result).to.eql(8);
  });
});
