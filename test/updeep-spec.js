import { expect } from 'chai';
import u from '../lib';

describe('updeep', () => {
  it('does not change anything if no updates are specified', () => {
    const object = { foo: 3, bar: [7, 5] };
    const result = u({}, object);

    expect(result).to.equal(object);
  });

  it('can update with fixed values', () => {
    const object = { foo: 3, bar: [7, 5] };
    const result = u({ foo: 4 }, object);

    expect(result).to.deep.equal({ foo: 4, bar: [7, 5] });
  });

  it('returns the same instance if an update doesn\'t make changes', () => {
    const object = { foo: 3 };
    const result = u({ foo: 3 }, object);

    expect(result).to.equal(object);
  });

  it('can update a nested structure', () => {
    const object = { foo: { bar: 7, bam: 3 }, baz: 32 };
    const result = u({ foo: { bar: 8 } }, object);

    expect(result).to.deep.equal({ foo: { bar: 8, bam: 3 }, baz: 32 });
  });

  it('can update arrays', () => {
    const object = [1, 2, 3];
    const result = u({ 1: 7 }, object);

    expect(result).to.deep.equal([1, 7, 3]);
  });

  it('replaces the object outright if updates are a constant', () => {
    expect(u(3, {})).to.equal(3);
    expect(u(null, {})).to.be.null;
  });

  it('can add an element to an array', () => {
    const object = [];
    const result = u({ 0: 3 }, object);

    expect(result).to.eql([3]);
  });

  it('can update nested arrays', () => {
    const object = { foo: [1, 2, 3], bar: 9 };
    const result = u({ foo: { 1: 7 } }, object);

    expect(result).to.deep.equal({ foo: [1, 7, 3], bar: 9 });
  });

  it('can use functions to update values', () => {
    const inc = (i) => i + 1;
    const object = { foo: 3, bar: 4, baz: 7 };
    const result = u({ foo: inc, bar: inc }, object);

    expect(result).to.deep.equal({ foo: 4, bar: 5, baz: 7 });
  });

  it('can be partially applied', () => {
    const inc = (i) => i + 1;
    const object = { foo: 3 };
    const incFoo = u({ foo: inc });

    const result = incFoo(object);

    expect(result).to.deep.equal({ foo: 4 });
  });

  it('can update if the value is an array', () => {
    const object = {};
    const result = u({ foo: [0, 1] }, object);

    expect(result).to.deep.equal({ foo: [0, 1] });
  });

  it('can use withDefault to default things', () => {
    const object = {};
    const result = u({
      foo: u.withDefault([], { 0: 'bar' }),
    }, object);

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

  it('deeply freezes the result', () => {
    const result = u({ foo: { bar: 3 } }, { foo: { bar: 0 } });

    expect(Object.isFrozen(result)).to.be.true;
    expect(Object.isFrozen(result.foo)).to.be.true;
  });

  it('assigns null values', () => {
    expect(u({isNull: null}, {})).to.eql({isNull: null});
  });

  it('has additional functions', () => {
    expect(u.freeze).to.be.a('function');
    expect(u.if).to.be.a('function');
    expect(u.in).to.be.a('function');
    expect(u.omit).to.be.a('function');
    expect(u.withDefault).to.be.a('function');
  });
});
