import curry from './util/curry'
import freeze from './freeze'

export default function wrap(func, length = func.length) {
  return curry((...args) => freeze(func(...args)), length)
}
