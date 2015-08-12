# updeep
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

[![Dependency Status][daviddm-image]][daviddm-url]
[![peerDependency Status][daviddm-peer-image]][daviddm-peer-url]
[![devDependency Status][daviddm-dev-image]][daviddm-dev-url]

> Easily update nested frozen objects and arrays in a declarative and immutable
> manner.


## About

**NOTE: Before updeep is 1.0, method names or semantics may change without a major version bump, but only if really necessary.**

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
var eq = function(x) { return function(y) { return x == y } };

var newPerson = u({
  // Change first name
  name: { first: 'Bob' },
  // Increment all children's ages
  children: u.map({ age: inc }),
  // Update email
  email: 'bob@example.com',
  // Remove todo
  todo: u.reject(eq('Be funny')),
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

Update as many values as you want, as deeply as you want. The `updates` parameter can either be an object, a function, or a value. Everything returned from `u` is frozen recursively.

If `updates` is an object, for each key/value, it will apply the updates specified in the value to `object[key]`.

If `updates` is a function, it will call the function with `object` and return the value.

If `updates` is a value, it will return that value.

Sometimes, you may want to set an entire object to a property, or a function. In that case, you'll need to use a function to return that value, otherwise it would be interpreted as an update. Ex. `function() { return { a: 0 }; }`.

Also available at `u.update(...)`.

#### Simple update

```js
var person = {
  name: {
    first: 'Jane',
    last: 'West'
  }
};

var result = u({ name: { first: 'Susan' } }, person);

expect(result).toEqual({ name: { first: 'Susan', last: 'West' } });
```

#### Multiple updates, including an array

```js
var person = {
  name: {
    first: 'Mike',
    last: 'Smith'
  },
  scores: [12, 28]
};

var result = u({ name: { last: 'Jones' }, scores: { 1: 36 } }, person);

expect(result).toEqual({ name: { first: 'Mike', last: 'Jones' }, scores: [12, 36] });
```

#### Use a function

```js
function increment(i) { return i + 1; }
var scoreboard = {
  scores: {
    team1: 0,
    team2: 0
  }
};

var result = u({ scores: { team2: increment } }, scoreboard);

expect(result).toEqual({ scores: { team1: 0, team2: 1 } });
```

#### Partial application

```js
function increment(i) { return i + 1; }

var addOneYear = u({ age: increment });
var result = addOneYear({ name: 'Shannon Barnes', age: 62 });

expect(result).toEqual({ name: 'Shannon Barnes', age: 63 });
```

#### ES6 computed properties

```js
var key = 'age';

var result = u({ person: { [key]: 21 } }, { person: { name: 'Olivier P.', age: 20 } });

expect(result).toEqual({ person: { name: 'Olivier P.', age: 21 } });
```

### `u.updateIn(path(, value)(, object))`

Update a single value with a simple string or array path.

```js
var result = u.updateIn('bunny.color', 'brown', { bunny: { color: 'black' } });

expect(result).toEqual({ bunny: { color: 'brown' } });
```

```js
function increment(i) { return i + 1; }

var result = u.updateIn('bunny.age', increment, { bunny: { age: 2 } });

expect(result).toEqual({ bunny: { age: 3 } });
```

```js
var result = u({ pet: u.updateIn(['bunny', 'age'], 3) }, { pet: { bunny: { age: 2 } } });

expect(result).toEqual({ pet: { bunny: { age: 3 } } });
```

### `u.if(predicate(, updates)(, object))`

Apply `updates` if `predicate` is truthy, or if `predicate` is a function.
It evaluates to truthy when called with `object`.

```js
function isEven(x) { return x % 2 === 0; }
function increment(x) { return x + 1; }

var result = u({ value: u.if(isEven, increment) }, { value: 2 });

expect(result).toEqual({ value: 3 });
```

### `u.ifElse(predicate(, trueUpdates)(, falseUpdates)(, object))`

Apply `trueUpdates` if `predicate` is truthy, or if `predicate` is a function.
It evaluates to truthy when called with `object`. Otherwise, apply `falseUpdates`.

```js
function isEven(x) { return x % 2 === 0; }
function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }

var result = u({ value: u.ifElse(isEven, increment, decrement) }, { value: 3 });

expect(result).toEqual({ value: 2 });
```

### `u.map(iteratee(, object))`

If iteratee is a function, map it over the values in `object`.
If it is an object, apply it as updates to each value in `object`,
which is equivalent to  `u.map(u(...), object)`).

```js
function increment(x) { return x + 1; }

var result = u({ values: u.map(increment) }, { values: [0, 1] });

expect(result).toEqual({ values: [1, 2] });
```

```js
function increment(x) { return x + 1; }

var result = u.map(increment, [0, 1, 2]);

expect(result).toEqual([1, 2, 3]);
```

```js
var result = u.map(increment, { a: 0, b: 1, c: 2 });

expect(result).toEqual({ a: 1, b: 2, c: 3 });
```

```js
function increment(x) { return x + 1; }

var result = u.map({ a: 100 }, [{ a: 0 }, { a: 1 }]);

expect(result).toEqual([{ a: 100 }, { a: 100 }]);
```

### `u.omit(predicate(, object))`

Remove properties. See [`_.omit`](https://lodash.com/docs#omit).

```js
var user = { user: { email: 'john@aol.com', username: 'john123', authToken: '1211..' } };

var result = u({ user: u.omit('authToken') }, user);

expect(result).toEqual({ user: { email: 'john@aol.com', username: 'john123' } });
```

```js
var user = {
  user: {
    email: 'john@aol.com',
    username: 'john123',
    authToken: '1211..',
    SSN: 5551234
  }
};

var result = u({ user: u.omit(['authToken', 'SSN']) }, user);

expect(result).toEqual({ user: { email: 'john@aol.com', username: 'john123' } });
```

### `u.reject(predicate(, object))`

Reject items from an array. See [`_.reject`](https://lodash.com/docs#reject).

```js
function isEven(i) { return i % 2 === 0; }

var result = u({ values: u.reject(isEven) }, { values: [1, 2, 3, 4] });

expect(result).toEqual({ values: [1, 3] });
```

### `u.withDefault(default(, updates)(, object))`

Like `u()`, but start with the default value if the original value is undefined.

```js
var result = u({ value: u.withDefault([], { 0: 3 }) }, {});

expect(result).toEqual({ value: [3] });
```

See the [tests] for more examples.

### `u.is(path(, predicate)(, object))`

Returns `true` if the `predicate` matches the `path` applied to the `object`.
If the `predicate` is a function, the result is returned. If not, they are compared with `===`.

```js
var result = u.is('friend.age', 22, { friend: { age: 22 } });

expect(result).toEqual(true);
```

```js
function isEven(i) { return i % 2 === 0; }

var result = u.is('friend.age', isEven, { friend: { age: 22 } });

expect(result).toEqual(true);
```

```js
var person = {
  person: {
    name: {
      first: 'Jen',
      last: 'Matthews'
    }
  }
};

// Update person's last name to Simpson if their first name is Jen
var result = u({
  person: u.if(
    u.is('name.first', 'Jen'),
    u.updateIn('name.last', 'Simpson')
  )
});

expect(result).toEqual({ person: { name: { first: 'Jen', last: 'Simpson' } } });
```

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
[daviddm-dev-image]: https://david-dm.org/substantial/updeep/dev-status.svg
[daviddm-dev-url]:https://david-dm.org/substantial/updeep#info=devDependencies
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
