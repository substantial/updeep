import { expect } from 'chai';
import u from '../lib';

describe('u.freeze', () => {
  afterEach(() => {
    delete process.env.NODE_ENV;
  });

  it('freezes objects', () => {
    const obj = {};
    u.freeze(obj);

    expect(Object.isFrozen(obj)).to.be.true;
  });

  it('freezes nested objects', () => {
    const obj = { foo: { bar: 3 } };
    u.freeze(obj);

    expect(Object.isFrozen(obj.foo)).to.be.true;
  });

  it('freezes nested arrays', () => {
    const obj = [[0]];
    u.freeze(obj);

    expect(Object.isFrozen(obj)).to.be.true;
    expect(Object.isFrozen(obj[0])).to.be.true;
  });

  it('ignores functions', () => {
    const obj = { foo: () => 1 };
    u.freeze(obj);

    expect(Object.isFrozen(obj.foo)).to.be.false;
  });

  it('does not freeze children if the parent is already frozen', () => {
    const obj = { foo: {} };
    Object.freeze(obj);
    u.freeze(obj);

    expect(Object.isFrozen(obj.foo)).to.be.false;
  });

  it('does not freeze in production', () => {
    process.env.NODE_ENV = 'production';
    const obj = {};
    u.freeze(obj);

    expect(Object.isFrozen(obj)).to.be.false;
  });

  it('handles null objects', () => {
    const obj = { foo: null };
    u.freeze(obj);
    expect(Object.isFrozen(obj)).to.be.true;
  });

  it('returns the same object', () => {
    const obj = {};
    const result = u.freeze(obj);
    expect(result).to.equal(obj);
  });
});
