/* eslint no-console:0, no-unused-vars:0 */
const Benchmark = require('benchmark');

const u = require('../lib');
const _ = require('lodash');
const { curry2, curry4 } = require('../lib/util/curry');

const add4 = (a, b, c, d) => a + b + c + d;
const add2 = (a, b) => a + b;
const fakeCurryAdd = x => y => x + y;
const lodashCurryAdd2 = _.curry(add2);
const updeepCurryAdd2 = curry2(add2);
const lodashCurryAdd4 = _.curry(add4);
const updeepCurryAdd4 = curry4(add4);
// const updeepCurryBig = curry.curryBig(add);

const array = [0, 1, 2, 3, 4, 5];
// const doUpdate = u(x => x + 1);

function log(str) {
  if (typeof document !== 'undefined') {
    console.log(str);
    const el = document.getElementById('perf');
    el.innerHTML = el.innerHTML + str;
  }
}

function createSuite(suiteName, tests) {
  const suite = Benchmark.Suite(); // eslint-disable

  return () => {
    log(`<h2>${suiteName}</h2><ul>`);

    _.each(tests, (fn, testName) => {
      suite.add(testName, fn);
    });

    suite.on('cycle', (event) => {
      log(`<li>${String(event.target)}</li>`);
    })
    .on('complete', () => {
      log('</ul>');
    })
    .run({ async: true });
  };
}


const curryVsLodash = createSuite('Curry', {
  'updeep curry': () => {
    updeepCurryAdd4(3)(4)(5)(6);
    updeepCurryAdd4(3, 4, 5, 6);
    updeepCurryAdd4(u._, 4, u._, 6)(3, 4);
    updeepCurryAdd2(3)(4);
    updeepCurryAdd2(3, 4);
  },
  'lodash curry': () => {
    lodashCurryAdd4(3)(4)(5)(6);
    lodashCurryAdd4(3, 4, 5, 6);
    lodashCurryAdd4(_, 4, _, 6)(3, 4);
    lodashCurryAdd2(3)(4);
    lodashCurryAdd2(3, 4);
  },
});

const mapVsLodash = createSuite('Map', {
  '_.map': () => _.map(array, fakeCurryAdd(8)),
  'u.map': () => u.map(fakeCurryAdd(8), array),
});

const fn = (a, b, c, d, e) => a + b + c + d + e;
const fnControl = (a, b, c, d, e) => fn(a, b, c, d, e);
const fnApply = (...args) => fn(...args);
const fnDestructure = (...args) => {
  const [a, b, c, d, e] = args;
  return fn(a, b, c, d, e);
};
const applyVsDestructure = createSuite('apply vs destructure', {
  control: () => fnControl(1, 2, 3, 4, 5),
  apply: () => fnApply(1, 2, 3, 4, 5),
  destructure: () => fnDestructure(1, 2, 3, 4, 5),
});

curryVsLodash();
mapVsLodash();
// applyVsDestructure();
