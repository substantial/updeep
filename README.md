# updeep [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] 
> Easily update immutable objects (frozen or not) in a declarative way.


## Install

```sh
$ npm install --save updeep
```


## Usage

```js
var u = require('updeep');

u({ foo: 3 }, { foo: 1, bar: 2 });
// => { foo: 3, bar: 2 }

Or with a function:
u({ foo: x => (x + 1) }, { foo: 2 });
// => { foo: 3 }
```

## License

MIT © [Aaron Jensen](https://twitter.com/aaronjensen)


[npm-image]: https://badge.fury.io/js/updeep.svg
[npm-url]: https://npmjs.org/package/updeep
[travis-image]: https://travis-ci.org/updeep.svg?branch=master
[travis-url]: https://travis-ci.org/updeep
[daviddm-image]: https://david-dm.org/updeep.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/updeep
