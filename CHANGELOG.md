# Change Log

## [unreleased]

## [0.4.0]
* Add `u.if` and `u.ifElse` to conditionally update objects.
* Add `u.map` to update all values in an array or object.
* Replace object outright if null or constant provided as `updates`.
* Freeze objects returned by helper methods that use `update` like `withDefault`, `map`, `in`, etc. Previously, only `u` did freezing.

## [0.3.1]
* Actually expose `u.in`.

## [0.3.0]
* Add `u.freeze` to freeze an object deeply. (https://github.com/substantial/updeep/issues/7)
* Add `u.in` to update a single value in an object with a specified path. (https://github.com/substantial/updeep/issues/6)

## [0.2.3]
* Fix cannot update value to null (https://github.com/substantial/updeep/issues/8)
* Add umd distribution builds via webpack. (https://github.com/aaronjensen/updeep/issues/3)

## [0.2.2]
* Fix `Object.isFrozen` breaking on null in chrome. (https://github.com/aaronjensen/updeep/pull/5)

## [0.2.1]
* Fix `Object.isFrozen` breaking on non-freezables in PhantomJS. (https://github.com/aaronjensen/updeep/issues/1)

## [0.2.0]
* Freeze objects returned by default. It doesn't actually make sense to return
  unfrozen objects, as the original object could be mutated and it would
  affect the new object. Object freezing is disabled if `NODE_ENV` is
  `"production'`.
* Update README with example for `reject`.

## [0.1.3]
* Update README.

## [0.1.2]
* Fix package description.

## [0.1.1]
* Update README and description.

## 0.1.0
* Initial release

[unreleased]: https://github.com/aaronjensen/updeep/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/aaronjensen/updeep/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/aaronjensen/updeep/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/aaronjensen/updeep/compare/v0.2.3...v0.3.0
[0.2.3]: https://github.com/aaronjensen/updeep/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/aaronjensen/updeep/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/aaronjensen/updeep/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/aaronjensen/updeep/compare/v0.1.3...v0.2.0
[0.1.3]: https://github.com/aaronjensen/updeep/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/aaronjensen/updeep/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/aaronjensen/updeep/compare/v0.1.0...v0.1.1
