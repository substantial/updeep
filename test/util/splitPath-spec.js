import { expect } from 'chai';
import splitPath from '../../lib/util/splitPath';

describe('splitPath', () => {
  it('test number path', () => {
    const path = 1;
    const result = splitPath(path);
    expect(result).to.deep.equal(['1']);
  });
  it('test number path', () => {
    const path = 0;
    const result = splitPath(path);
    expect(result).to.deep.equal(['0']);
  });
  it('test array path', () => {
    const path = ['foo', 'bar', 'x'];
    const result = splitPath(path);
    expect(result).to.equal(path);
  });
  it('test string path', () => {
    const path = 'bar.0.y';
    const result = splitPath(path);
    expect(result).to.deep.equal(['bar', '0', 'y']);
  });
});
