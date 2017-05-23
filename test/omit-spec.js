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
})
