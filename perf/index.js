const Benchmark = require('benchmark');

const u = require('../lib');
const _ = require('lodash');
const { curry2 } = require('../lib/util/curry');

const suite = Benchmark.Suite(); // eslint-disable

const add = (x, y) => x + y;
const fakeCurryAdd = x => y => x + y;
const curryAdd = _.curry(add);
const updeepCurry = curry2(add);
// const updeepCurryBig = curry.curryBig(add);

const array = [0, 1, 2, 3, 4, 5];
// const doUpdate = u(x => x + 1);

suite
.add('updeep curry partial call', () => {
  updeepCurry(3)(4);
})
.add('lodash curry partial call', () => {
  curryAdd(3)(4);
})
.add('_.map', () => {
  _.map(array, fakeCurryAdd(8));
})
.add('u.map', () => {
  u.map(fakeCurryAdd(8), array);
})
// .add('updeep curry', () => {
//   u.map(curryAdd(3), array);
// })
// .add('updeep big curry', () => {
//   u.map(curryAdd(3), array);
// })
// .add('no curry', () => {
//   u.map(x => x + 1, array);
// })
// .add('regular function call', () => {
//   add(3, 4);
// })
// .add('updeep full curry', () => {
//   updeepCurry(3, 4);
// })
// .add('updeep big full curry', () => {
//   updeepCurryBig(3, 4);
// })
// .add('curry full call', () => {
//   curryAdd(3, 4);
// })
// .add('fake curry', () => {
//   fakeCurryAdd(3)(4);
// })
// .add('_.map no changes', () => {
//   _.map(array, x => x);
// })
// .add('u.map no changes', () => {
//   u.map(x => x, array);
// })

.on('cycle', (event) => {
  if (typeof document !== 'undefined') {
    const el = document.getElementById('perf');
    el.innerHTML = el.innerHTML + String(event.target) + '<br>';
  }
})
.run({ async: true });
