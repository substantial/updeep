import { expect } from 'chai'
import { curry1, curry2, curry3, curry4, _ } from '../../lib/util/curry'

describe('curry1', () => {
  it('can curry one arguments', () => {
    const addOne = curry1(x => x + 1)
    expect(addOne(3)).to.equal(4)
    expect(addOne()(3)).to.equal(4)
  })

  it('will take up to two extra arguments', () => {
    const curried = curry1((a, b, c) => [a, b, c])
    expect(curried(1, 2, 3, 4)).to.eql([1, 2, 3])
  })

  it('returns a fn with arity of 1', () => {
    const curried = curry1((a, b, c) => [a, b, c])
    expect(curried).to.have.length(1)
  })
})

describe('curry2', () => {
  it('can curry two arguments', () => {
    const add = curry2((x, y) => x + y)
    expect(add(3)(4)).to.equal(7)
    expect(add()(3)()(4)).to.equal(7)
    expect(add(3, 4)).to.equal(7)
  })

  it('will take up to two extra arguments', () => {
    const curried = curry2((a, b, c, d) => [a, b, c, d])
    expect(curried(1, 2, 3, 4, 5)).to.eql([1, 2, 3, 4])
  })

  it('can use the placeholder', () => {
    const curried = curry2((a, b, c, d) => [a, b, c, d])
    expect(curried(_, 2)(1, 3, 4)).to.eql([1, 2, 3, 4])
  })

  it('returns a fn with arity of 2', () => {
    const curried = curry2((a, b, c, d) => [a, b, c, d])
    expect(curried).to.have.length(2)
  })
})

describe('curry3', () => {
  it('can curry three arguments', () => {
    const add = curry3((x, y, z) => x + y + z)
    expect(add(3, _)(4)(5)).to.equal(12)
    expect(add()(3)()(4, 5)).to.equal(12)
    expect(add(3, 4, 5)).to.equal(12)
  })

  it('will take up to two extra arguments', () => {
    const curried = curry3((a, b, c, d, e) => [a, b, c, d, e])
    expect(curried(1, 2, 3, 4, 5, 6)).to.eql([1, 2, 3, 4, 5])
  })

  it('can use the placeholder', () => {
    const curried = curry3((a, b, c, d, e) => [a, b, c, d, e])
    expect(curried(_, 2)('a', 3, 4, 5)).to.eql(['a', 2, 3, 4, 5])
    expect(curried('b', _, 3)(2, 4, 5)).to.eql(['b', 2, 3, 4, 5])
    expect(curried(_, 2, 3)('c', 4, 5)).to.eql(['c', 2, 3, 4, 5])
    expect(curried(_, _, 3)('d', 2, 4, 5)).to.eql(['d', 2, 3, 4, 5])
  })

  it('returns a fn with arity of 3', () => {
    const curried = curry3((a, b, c, d, e) => [a, b, c, d, e])
    expect(curried).to.have.length(3)
  })
})

describe('curry4', () => {
  it('can curry four arguments', () => {
    const add = curry4((x, y, z, u) => x + y + z + u)
    expect(add(3, _)(4)(5)(6)).to.equal(18)
    expect(add()(3)()(4, 5, 6)).to.equal(18)
    expect(add(3, 4, 5, 6)).to.equal(18)
  })

  it('will take up to two extra arguments', () => {
    const curried = curry4((a, b, c, d, e, f) => [a, b, c, d, e, f])
    expect(curried(1, 2, 3, 4, 5, 6, 7)).to.eql([1, 2, 3, 4, 5, 6])
  })

  it('can use the placeholder', () => {
    const curried = curry4((a, b, c, d, e, f) => [a, b, c, d, e, f])
    expect(curried(_, 2)('a', 3, 4, 5, 6)).to.eql(['a', 2, 3, 4, 5, 6])
    expect(curried(_, 2, 3)('b', 4, 5, 6)).to.eql(['b', 2, 3, 4, 5, 6])
    expect(curried(_, 2, 3, 4)('c', 5, 6)).to.eql(['c', 2, 3, 4, 5, 6])

    expect(curried('d', _, 3)(2, 4, 5, 6)).to.eql(['d', 2, 3, 4, 5, 6])
    expect(curried('e', _, 3, 4)(2, 5, 6)).to.eql(['e', 2, 3, 4, 5, 6])

    expect(curried('f', 2, _, 4)(3, 5, 6)).to.eql(['f', 2, 3, 4, 5, 6])

    expect(curried(_, _, 3)('g', 2, 4, 5, 6)).to.eql(['g', 2, 3, 4, 5, 6])
    expect(curried(_, _, 3, 4)('h', 2, 5, 6)).to.eql(['h', 2, 3, 4, 5, 6])
    expect(curried(_, 2, _, 4)('i', 3, 5, 6)).to.eql(['i', 2, 3, 4, 5, 6])

    expect(curried('j', _, _, 4)(2, 3, 5, 6)).to.eql(['j', 2, 3, 4, 5, 6])

    expect(curried(_, _, _, 4)('k', 2, 3, 5, 6)).to.eql(['k', 2, 3, 4, 5, 6])
  })

  it('returns a fn with arity of 4', () => {
    const curried = curry4((a, b, c, d, e, f) => [a, b, c, d, e, f])
    expect(curried).to.have.length(4)
  })
})
