import { expect } from 'chai'
import u from '../lib'

describe('u.constant', () => {
  it('returns what it is given... constantly', () => {
    const func = u.constant(4)

    expect(func()).to.equal(4)
    expect(func('hi')).to.equal(4)
    expect(func('hi', 8)).to.equal(4)
    expect(func(4)).to.equal(4)
  })

  it('freezes the result', () => {
    expect(Object.isFrozen(u.constant({})())).to.be.true
  })
})
