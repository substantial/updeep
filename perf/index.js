const Benchmark = require('benchmark');

const u = require('../lib');
const _ = require('lodash');

const suite = Benchmark.Suite(); // eslint-disable

const add = (x, y) => x + y;
const fakeCurryAdd = x => y => x + y;
const curryAdd = _.curry(add);

const array = [0, 1, 2, 3, 4, 5];

suite
  .add('regular function call', () => {
    add(3, 4);
  })
  .add('fake curry', () => {
    fakeCurryAdd(3)(4);
  })
  .add('curry full call', () => {
    curryAdd(3, 4);
  })
  .add('curry partial call', () => {
    curryAdd(3)(4);
  })
  .add('_.map', () => {
    _.map(array, curryAdd(8));
  })
  .add('u.map', () => {
    u.map(curryAdd(8), array);
  })
  .add('_.map no changes', () => {
    _.map(array, x => x);
  })
  .add('u.map no changes', () => {
    u.map(x => x, array);
  })

  .on('cycle', (event) => {
    if (typeof document !== 'undefined') {
      const el = document.getElementById('perf');
      el.innerHTML = el.innerHTML + String(event.target) + '<br>';
    }
  })
  .run({ async: true });
