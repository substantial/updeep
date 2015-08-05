import { expect } from 'chai';
import freeze from '../lib/freeze';

describe('freeze', () => {
  afterEach(() => {
    delete process.env.NODE_ENV;
  });

  it('freezes objects', () => {
    const obj = {};
    freeze(obj);

    expect(Object.isFrozen(obj)).to.be.true;
  });

  it('freezes nested objects', () => {
    const obj = { foo: { bar: 3 } };
    freeze(obj);

    expect(Object.isFrozen(obj.foo)).to.be.true;
  });

  it('freezes nested arrays', () => {
    const obj = [[0]];
    freeze(obj);

    expect(Object.isFrozen(obj)).to.be.true;
    expect(Object.isFrozen(obj[0])).to.be.true;
  });

  it('ignores functions', () => {
    const obj = { foo: () => 1 };
    freeze(obj);

    expect(Object.isFrozen(obj.foo)).to.be.false;
  });

  it('does not freeze children if the parent is already frozen', () => {
    const obj = { foo: {} };
    Object.freeze(obj);
    freeze(obj);

    expect(Object.isFrozen(obj.foo)).to.be.false;
  });

  it('does not freeze in production', () => {
    process.env.NODE_ENV = 'production';
    const obj = {};
    freeze(obj);

    expect(Object.isFrozen(obj)).to.be.false;
  });

  it('handles null objects', () => {
    const obj = { foo: null };
    freeze(obj);
    expect(Object.isFrozen(obj)).to.be.true;
  });

  it('returns the same object', () => {
    const obj = {};
    const result = freeze(obj);
    expect(result).to.equal(obj);
  });
});
