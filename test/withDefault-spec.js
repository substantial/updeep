import { expect } from 'chai';
import u from '../lib/index';

describe('u.withDefault', () => {
  it('uses the default as the basis for the update if the object is undefined', () => {
    const inc = x => x + 1;
    const result = u.withDefault({ a: 0 }, { a: inc }, undefined);

    expect(result).to.eql({ a: 1 });
  });

  it('uses ignores the default if the object is defined', () => {
    const inc = x => x + 1;
    const result = u.withDefault({ a: 0 }, { a: inc }, { a: 3 });

    expect(result).to.eql({ a: 4 });
  });

  it('can be partially applied', () => {
    const object = {};
    const result = u({
      foo: u.withDefault([], { 0: 'bar' }),
    }, object);

    expect(result).to.eql({ foo: ['bar'] });
  });

  it('freezes the result', () => {
    expect(Object.isFrozen(u.withDefault({}, { a: 1 })(undefined))).to.be.true;
  });
});
