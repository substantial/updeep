import { expect } from 'chai'
import u from '../lib'

describe('u.updateIn', () => {
  it('can update a single path described with a string', () => {
    const object = { a: { b: 0 } }
    const result = u.updateIn('a.b', 3, object)
    expect(result).to.eql({ a: { b: 3 } })
  })

  it('can update a single path described with a string with a function', () => {
    const inc = x => x + 1
    const object = { a: { b: 0 } }
    const result = u.updateIn('a.b', inc, object)
    expect(result).to.eql({ a: { b: 1 } })
  })

  it('can update a single path described with an array', () => {
    const object = { a: { b: 0 } }
    const result = u.updateIn(['a', 'b'], 3, object)
    expect(result).to.eql({ a: { b: 3 } })
  })

  it('can update arrays', () => {
    const object = { a: [0, 0, 0] }
    const result = u.updateIn('a.1', 3, object)
    expect(result).to.eql({ a: [0, 3, 0] })
  })

  it('can be partially applied', () => {
    const object = { a: { b: 0 } }
    const result = u.updateIn('a.b')(3)(object)
    expect(result).to.eql({ a: { b: 3 } })
  })

  it('replaces the object outright if the path is empty', () => {
    const object = {}
    const result = u.updateIn('', 3, object)
    expect(result).to.equal(3)
  })

  it('freezes the result', () => {
    expect(Object.isFrozen(u.updateIn('a', 0, {}))).to.be.true
  })

  it('can multiple elements of an array with *', () => {
    let object = { a: [{ b: 0 }, { b: 1 }, { b: 2 }] }
    let result = u.updateIn('a.*.b', x => x + 1, object)
    expect(result).to.eql({ a: [{ b: 1 }, { b: 2 }, { b: 3 }] })

    object = { a: [0, 1, 2] }
    result = u.updateIn(['a', '*'], x => x + 1, object)
    expect(result).to.eql({ a: [1, 2, 3] })
  })

  it('can update properties named *', () => {
    const object = { '*': 1, x: 1 }
    const result = u.updateIn('*', x => x + 1, object)
    expect(result).to.eql({ '*': 2, x: 1 })
  })
})
