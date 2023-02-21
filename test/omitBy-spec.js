import { expect } from 'chai'
import u from '../lib'

describe('u.omitBy', () => {
  it('can omitBy with a function', () => {
    const predicate = (value, key) => value === 7 && key === 'bar'
    const result = u(
      { foo: u.omitBy(predicate) },
      { foo: { bar: 7, baz: 'a' } }
    )

    expect(result).to.eql({ foo: { baz: 'a' } })
  })

  it('freezes the result', () => {
    expect(Object.isFrozen(u.omitBy('a', {}))).to.be.true
  })

  it('returns empty object when null is provided for the collection', () => {
    const result = u.omitBy('a', null)

    expect(result).to.eql({})
  })

  it("doesn't change the object if nothing is omitted", () => {
    const orig = { a: 1 }
    const result = u.omitBy(() => false, orig)
    expect(result).to.be.equal(orig)
  })

  it('deals with undefined values', () => {
    const result = u(
      {
        foo: u.omitBy((a) => {
          return a === 'bar'
        }),
      },
      {}
    )
    expect(result).to.eql({ foo: {} })
  })
})
