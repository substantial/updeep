import Benchmark from 'benchmark'
import {table} from 'table'
import chalk from 'chalk'

import _ from 'lodash'
import u from '../dist/index.umd.js'
import {curry2, curry4 } from '../lib/util/curry'

const add4 = (a, b, c, d) => a + b + c + d
const add2 = (a, b) => a + b
const fakeCurryAdd = (x) => (y) => x + y
const lodashCurryAdd2 = _.curry(add2)
const updeepCurryAdd2 = curry2(add2)
const lodashCurryAdd4 = _.curry(add4)
const updeepCurryAdd4 = curry4(add4)
// const updeepCurryBig = curry.curryBig(add);

const array = [0, 1, 2, 3, 4, 5]
// const doUpdate = u(x => x + 1);


const log = console.log

function createSuite(suiteName, tests) {
  const results = []

  const suite = Benchmark.Suite({
    onCycle: (event) => {
      results.push(event.target)
    },
    onError: (event) => {
      console.error(event)
    },
  })

  _.each(tests, (fn, testName) => {
    suite.add(testName, fn)
  })

  return () => new Promise((resolve, reject) => {
    suite.on('complete', () => resolve({
      suiteName,
      results,
    })).on('error', reject).run({ async: true})
  })
}

const curryVsLodash = createSuite('Curry', {
  'updeep curry': () => {
    updeepCurryAdd4(3)(4)(5)(6)
    updeepCurryAdd4(3, 4, 5, 6)
    updeepCurryAdd4(u._, 4, u._, 6)(3, 4)
    updeepCurryAdd2(3)(4)
    updeepCurryAdd2(3, 4)
  },
  'lodash curry': () => {
    lodashCurryAdd4(3)(4)(5)(6)
    lodashCurryAdd4(3, 4, 5, 6)
    lodashCurryAdd4(_, 4, _, 6)(3, 4)
    lodashCurryAdd2(3)(4)
    lodashCurryAdd2(3, 4)
  },
})

const mapVsLodash = createSuite('Map', {
  '_.map': () => _.map(array, fakeCurryAdd(8)),
  'u.map': () => u.map(fakeCurryAdd(8), array),
})

const fn = (a, b, c, d, e) => a + b + c + d + e
const fnControl = (a, b, c, d, e) => fn(a, b, c, d, e)
const fnApply = (...args) => fn(...args)
const fnDestructure = (...args) => {
  const [a, b, c, d, e] = args
  return fn(a, b, c, d, e)
}
const applyVsDestructure = createSuite('apply vs destructure', {
  control: () => fnControl(1, 2, 3, 4, 5),
  apply: () => fnApply(1, 2, 3, 4, 5),
  destructure: () => fnDestructure(1, 2, 3, 4, 5),
})

const printSuiteResults = (suiteResults) => {
  const HEADERS = ['Suite Name', 'Results (fastest first)'].map(s => chalk.bold(s))

  const data = suiteResults.reduce((acc, {suiteName, results}) => {
    const row = [
      chalk.cyan(suiteName),
      results.sort((a, b) => -a.compare(b)).map(String).join('\n'),
    ]

    acc.push(row)
    return acc
  }, [HEADERS])

  log(table(data))
}


Promise.all([
  curryVsLodash(),
  mapVsLodash(),
  // applyVsDestructure(),
]).then(printSuiteResults)
