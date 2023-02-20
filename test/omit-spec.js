import { expect } from 'chai'
import u from '../lib'

describe('u.omit', () => {
  it('can omit a key', () => {
    const result = u({ foo: u.omit('bar') }, { foo: { bar: 7 } })

    expect(result).to.eql({ foo: {} })
  })

  it('freezes the result', () => {
    expect(Object.isFrozen(u.omit('a', {}))).to.be.true
  })

  it('returns empty object when null is provided for the collection', () => {
    const result = u.omit('a', null)

    expect(result).to.eql({})
  })

  it('does not change the object if nothing is omitted', () => {
    const orig = { a: 1 }
    const result = u.omit(['b'], orig)
    expect(result).to.be.equal(orig)
  })
})
