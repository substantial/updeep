import { expect } from 'chai'
import size from '../../lib/util/size'

describe('size', () => {
  it('handles null values', () => {
    const obj = null
    const result = size(obj)
    expect(result).to.equal(0)
  })

  it('handles arrays', () => {
    const obj = ['foo', 'bar', 'x']
    const result = size(obj)
    expect(result).to.equal(3)
  })

  it('handles objects', () => {
    const obj = { foo: "bar" }
    const result = size(obj)
    expect(result).to.equal(1)
  })
})
