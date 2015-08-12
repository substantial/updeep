/* eslint no-console:0, no-unused-vars:0 */
const Benchmark = require('benchmark');

const u = require('../lib');
const _ = require('lodash');
const { curry4 } = require('../lib/util/curry');

const add = (a, b, c, d) => a + b + c + d;
const fakeCurryAdd = x => y => x + y;
const curryAdd = _.curry(add);
const updeepCurry = curry4(add);
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
  'updeep curry partial call': () => updeepCurry(3)(4)(5)(6),
  'lodash curry partial call': () => curryAdd(3)(4)(5)(6),
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
  'control': () => fnControl(1, 2, 3, 4, 5),
  'apply': () => fnApply(1, 2, 3, 4, 5),
  'destructure': () => fnDestructure(1, 2, 3, 4, 5),
});

curryVsLodash();
mapVsLodash();
// applyVsDestructure();
