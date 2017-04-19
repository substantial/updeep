import { expect } from 'chai'
import splitPath from '../../lib/util/splitPath'

describe('splitPath', () => {
  it('treats a number as a single step path', () => {
    const path = 1
    const result = splitPath(path)
    expect(result).to.deep.equal(['1'])
  })

  it('handles arrays', () => {
    const path = ['foo', 'bar', 'x']
    const result = splitPath(path)
    expect(result).to.equal(path)
  })

  it('handles strings separated by dots', () => {
    const path = 'bar.0.y'
    const result = splitPath(path)
    expect(result).to.deep.equal(['bar', '0', 'y'])
  })
})
