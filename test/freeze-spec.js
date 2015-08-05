import { expect } from 'chai';
import u from '../lib';

describe('u.freeze', () => {
  afterEach(() => {
    delete process.env.NODE_ENV;
  });

  it('freezes objects', () => {
    const object = {};
    u.freeze(object);

    expect(Object.isFrozen(object)).to.be.true;
  });

  it('freezes nested objects', () => {
    const object = { foo: { bar: 3 } };
    u.freeze(object);

    expect(Object.isFrozen(object.foo)).to.be.true;
  });

  it('freezes nested arrays', () => {
    const object = [[0]];
    u.freeze(object);

    expect(Object.isFrozen(object)).to.be.true;
    expect(Object.isFrozen(object[0])).to.be.true;
  });

  it('ignores functions', () => {
    const object = { foo: () => 1 };
    u.freeze(object);

    expect(Object.isFrozen(object.foo)).to.be.false;
  });

  it('does not freeze children if the parent is already frozen', () => {
    const object = { foo: {} };
    Object.freeze(object);
    u.freeze(object);

    expect(Object.isFrozen(object.foo)).to.be.false;
  });

  it('does not freeze in production', () => {
    process.env.NODE_ENV = 'production';
    const object = {};
    u.freeze(object);

    expect(Object.isFrozen(object)).to.be.false;
  });

  it('handles null objects', () => {
    const object = { foo: null };
    u.freeze(object);
    expect(Object.isFrozen(object)).to.be.true;
  });

  it('returns the same object', () => {
    const object = {};
    const result = u.freeze(object);
    expect(result).to.equal(object);
  });
});
