# updeep [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Easily update nested frozen objects and arrays in a declarative and immutable
> manner.

## About

Updating deeply nested objects/arrays is a bit of a pain.
updeep makes it painless by allowing you to declare the updates you would like
to make and it will take care of the rest.
It will recursively return the same instance if no changes have been made,
making it ideal for using reference equality checks to detect changes (like
[PureRenderMixin]). Because of this, everything returned by updeep is frozen.

updeep requires [lodash], but works very well with [lodash-fp] or [Ramda]. As a
matter of fact, many of the helpers functions are [curried][currying] [lodash]
functions with their parameters reversed (as [lodash-fp] do).

Note that the parameters may be backwards from what you are used to. updeep
supports [partial application][currying], so the parameter order is:
`updeep(updates, obj)`.

## API and Examples

### Full example
```js
var u = require('updeep');

var person = {
  name: {
    first: 'Bill',
    last: 'Sagat',
  },
  children: ['Marty', 'Ashley'],
  email: 'bill@example.com',
  version: 1
};

var inc = function(i) { return i + 1; }

var newPerson = u({
  name: {
    first: 'Bob',
  },
  children: { 0: 'Mary-Kate' },
  email: 'bob@example.com',
  version: inc
}, person);

// => {
//      name: {
//        first: 'Bob',
//        last: 'Sagat',
//      },
//      children: ['Mary-Kate', 'Ashley'],
//      email: 'bob@example.com',
//      version: 2
//    }
```

### Simple update

```js
u({ x: { b: 3 } }, { x: { a: 0, b: 0 } });
// => { x: { a: 0, b: 3 } }
```

### Multiple updates, including an array

```js
u({ x: { b: 3 }, y: { 1: 4 } }, { x: { a: 0, b: 0 }, y: [0, 0] });
// => { x: { a: 0, b: 3 }, y: [0, 4] }
```

### Use a function

```js
var inc = function(i) { return i + 1; }
u({ x: { b: inc } }, { x: { a: 0, b: 0 } });
// => { x: { a: 0, b: 1 } }
```

### Partial application

```js
var setBTo3 = u({ b: 3 });
setBTo3({ a: 0, b: 0 });
// => { a: 0, b: 3 })
```

### Remove a property

```js
u({ x: u.omit('b') }, { x: { a: 0, b: 0 } });
// => { x: { a: 0 } }
```

### With a default

```js
u({ x: withDefault([], { 0: 3 }) }, {});
// => { x: [3] }
```

### ES6 computed properties

```js
var key = 'b';
u({ x: { [key]: 3 } }, { x: { a: 0, b: 0 } });
// => { x: { a: 0, b: 3 } }
```

See the [tests] for more examples.

## Install

```sh
$ npm install --save updeep
```

Requires [lodash] as a peer dependency, so make sure you have it installed as
well.

## Motivation

While creating reducers for use with [redux], I wanted something that made it
easy to work with frozen objects. Native javascript objects have some nice
advantages over things like [Immutable.js][immutablejs] such as debugging and
destructuring. I wanted something more powerful than [icepick] and more
composable than [React.addons.update].

## Contributing

1. Fork it.
1. Create your feature branch (`git checkout -b my-new-feature`).
1. Run `gulp` to run tests and lint.
1. Commit your changes (`git commit -am 'Added some feature'`).
1. Push to the branch (`git push origin my-new-feature`).
1. Create new Pull Request.

## License

MIT ©2015 [Aaron Jensen](https://twitter.com/aaronjensen)

[npm-image]: https://badge.fury.io/js/updeep.svg
[npm-url]: https://npmjs.org/package/updeep
[travis-image]: https://travis-ci.org/aaronjensen/updeep.svg?branch=master
[travis-url]: https://travis-ci.org/aaronjensen/updeep
[daviddm-image]: https://david-dm.org/aaronjensen/updeep.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/aaronjensen/updeep
[lodash]: http://lodash.com
[lodash-fp]: https://github.com/lodash/lodash-fp
[Ramda]: http://ramdajs.com/
[PureRenderMixin]: https://facebook.github.io/react/docs/pure-render-mixin.html
[redux]: https://github.com/gaearon/redux
[immutablejs]: https://github.com/facebook/immutable-js
[icepick]: https://github.com/aearly/icepick
[React.addons.update]: https://facebook.github.io/react/docs/update.html
[tests]: https://github.com/aaronjensen/updeep/blob/master/test/index.js
[currying]: http://www.datchley.name/currying-vs-partial-application/
