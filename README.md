# updeep
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![peerDependency Status][daviddm-peer-image]][daviddm-peer-url]

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
`updeep(updates, object)`.

## API and Examples

### Full example
```js
var u = require('updeep');

var person = {
  name: { first: 'Bill', last: 'Sagat' },
  children: [
    { name: 'Mary-Kate', age: 7 },
    { name: 'Ashley', age: 7 }
  ],
  todo: [
    'Be funny',
    'Manage household'
  ],
  email: 'bill@example.com',
  version: 1
};

var inc = function(i) { return i + 1; }

var newPerson = u({
  // Change first name
  name: { first: 'Bob' },
  // Increment all children's ages
  children: u.map({ age: inc }),
  // Update email
  email: 'bob@example.com',
  // Remove todo
  todo: u.reject('Be funny'),
  // Increment version
  version: inc
}, person);
// => {
//  name: { first: 'Bob', last: 'Sagat' },
//  children: [
//    { name: 'Mary-Kate', age: 8 },
//    { name: 'Ashley', age: 8 }
//  ],
//  todo: [
//    'Manage household'
//  ],
//  email: 'bob@example.com',
//  version: 2
//}
```

**NOTE**: All functions are curried, so if you see `f(x(, y))`, it can be called with either `f(x, y)` or `f(x)(y)`.

### `u(updates(, object))`

#### Simple update

```js
u({ x: { b: 3 } }, { x: { a: 0, b: 0 } });
// => { x: { a: 0, b: 3 } }
```

#### Multiple updates, including an array

```js
u({ x: { b: 3 }, y: { 1: 4 } }, { x: { a: 0, b: 0 }, y: [0, 0] });
// => { x: { a: 0, b: 3 }, y: [0, 4] }
```

#### Use a function

```js
function inc(i) { return i + 1; }
u({ x: { b: inc } }, { x: { a: 0, b: 0 } });
// => { x: { a: 0, b: 1 } }
```

#### Partial application

```js
var setBTo3 = u({ b: 3 });
setBTo3({ a: 0, b: 0 });
// => { a: 0, b: 3 })
```

#### ES6 computed properties

```js
var key = 'b';
u({ x: { [key]: 3 } }, { x: { a: 0, b: 0 } });
// => { x: { a: 0, b: 3 } }
```

### `u.in(path(, value)(, object))`

Update a single value with a simple string or array path.

```js
u.in('a.b', 3, { a: { b: 0 } });
// => { a: { b: 3 } };
```

```js
function inc(i) { return i + 1; }
u.in('a.b', inc, { a: { b: 0 } });
// => { a: { b: 1 } };
```

```js
u({
  x: u.in(['a', 'b'], 3)
}, { x: { a: { b: 0 } } });
// => { x: { a: { b: 3 } } };
```

### `u.if(predicate(, updates)(, object))`

Apply updates only if `predicate` is truthy or, if `predicate` is a function,
it evaluates to truthy when called with `object`.

```js
var object = { a: 2 };
function isEven(x) { return x % 2 === 0; }
function inc(x) { return x + 1; }

u({
  a: u.if(isEven, inc),
}, object);
// => { a: 3 }
```

### `u.map(iteratee(, object))`

If iteratee is a function, map it over the values in `object`.
If it is an object, apply it as updates to each value in `object`,
which is equivalent to  `u.map(u(...), object)`).

```js
function inc(x) { return x + 1; }
u({
  a: u.map(inc)
}, { a: [0, 1] });
// => { a: [1, 2] }
```

```js
function inc(x) { return x + 1; }
u.map(inc, [0, 1, 2]);
// => [1, 2, 3]

u.map(inc, { a: 0, b: 1, c: 2});
// => { a: 1, b: 2, c: 3}
```

```js
u.map({ a: 2 }, [{ a: 0 }, { a: 1 }]);
// => [{ a: 2 }, { a: 2 }]
```

### `u.omit(predicate(, object))`

Remove properties. See [`_.omit`](https://lodash.com/docs#omit).

```js
u({ x: u.omit('b') }, { x: { a: 0, b: 0, c: 0 } });
// => { x: { a: 0, c: 0 } }
```

```js
u({ x: u.omit(['b', 'c']) }, { x: { a: 0, b: 0, c: 0 } });
// => { x: { a: 0 } }
```

### `u.reject(predicate(, object))`

Reject items from an array. See [`_.reject`](https://lodash.com/docs#reject).

```js
function even(i) { return i % 2 === 0 };
u({ x: u.reject(even) }, { x: [1, 2, 3, 4] });
// => { x: [1, 3] }
```

### `u.withDefault(default(, updates)(, object))`

Like `u()`, but start with the default value if the original value is undefined.

```js
u({ x: u.withDefault([], { 0: 3 }) }, {});
// => { x: [3] }
```

See the [tests] for more examples.

## Install

```sh
$ npm install --save updeep
```

Requires [lodash] as a peer dependency, so make sure you have it installed as
well.

## Configuration

If `NODE_ENV` is `"production"`, updeep will not attempt to freeze objects.
This may yield a slight performance gain.

## Motivation

While creating reducers for use with [redux], I wanted something that made it
easy to work with frozen objects. Native javascript objects have some nice
advantages over things like [Immutable.js][immutablejs] such as debugging and
destructuring. I wanted something more powerful than [icepick] and more
composable than [React.addons.update].

If you're manipulating massive amounts of data frequently, you may want to
benchmark, as [Immutable.js][immutablejs] should be more efficient in that
case.

## Contributing

1. Fork it.
1. Create your feature branch (`git checkout -b my-new-feature`).
1. Run `gulp` to run tests and lint.
1. Commit your changes (`git commit -am 'Added some feature'`).
1. Push to the branch (`git push origin my-new-feature`).
1. Create new Pull Request.

## Releasing New Version

1. Login to npm, if you don't have access to the package, ask for it.

    ```bash
    $ npm login
    ```
1. Make sure the build passes (best to let it pass on travis, but you can run it locally):

    ```bash
    $ gulp
    ```
1. Bump the version:

    ```bash
    $ npm version major|minor|patch
    ```
1. Update the `CHANGELOG.md`.
  1. Add the new version and corresponding notes.
  1. Add a link to the new version.
  1. Update the `unreleased` link compare to be based off of the new version.
1. Publish and push:

    ```bash
    $ npm publish
    $ git push master --follow-tags
    ```

## License

MIT ©2015 [Substantial](http://substantial.com)

[npm-image]: https://badge.fury.io/js/updeep.svg
[npm-url]: https://npmjs.org/package/updeep
[travis-image]: https://travis-ci.org/substantial/updeep.svg?branch=master
[travis-url]: https://travis-ci.org/substantial/updeep
[daviddm-image]: https://david-dm.org/substantial/updeep.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/substantial/updeep
[daviddm-peer-image]: https://david-dm.org/substantial/updeep/peer-status.svg
[daviddm-peer-url]:https://david-dm.org/substantial/updeep#info=peerDependencies
[codeclimate-image]: https://codeclimate.com/github/substantial/updeep/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/substantial/updeep
[lodash]: http://lodash.com
[lodash-fp]: https://github.com/lodash/lodash-fp
[Ramda]: http://ramdajs.com/
[PureRenderMixin]: https://facebook.github.io/react/docs/pure-render-mixin.html
[redux]: https://github.com/gaearon/redux
[immutablejs]: https://github.com/facebook/immutable-js
[icepick]: https://github.com/aearly/icepick
[React.addons.update]: https://facebook.github.io/react/docs/update.html
[tests]: https://github.com/substantial/updeep/blob/master/test/index.js
[currying]: http://www.datchley.name/currying-vs-partial-application/
