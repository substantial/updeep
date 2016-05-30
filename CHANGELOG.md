# Change Log

## [unreleased]

## [0.15.0]
* Add `u.omitBy` (https://github.com/substantial/updeep/pull/60)
* Add `dangerously_never_freeze`, which I wouldn't recommend using unless you
  absolutely have to and you know exactly what the effects will be.
  (https://github.com/substantial/updeep/pull/59)

## [0.14.0]
* Allow updeep to be required from CommonJS (https://github.com/substantial/updeep/pull/56)

## [0.13.0]
* Upgrade to lodash ^4.2.0 (https://github.com/substantial/updeep/pull/50)

## [0.12.0]
* Make lodash a dependency instead of a peerDependency - Thanks @epeli
  (https://github.com/substantial/updeep/issues/43 https://github.com/substantial/updeep/pull/48)

## [0.11.0]
* **BREAKING CHANGE** Revert: "Default to empty array if update keys are integers." A new object will always be created. If you need an array, use `u.withDefault`. (https://github.com/substantial/updeep/pull/42)

## [0.10.1]
* Fix support for Date objects and other non-plain objects (https://github.com/substantial/updeep/issues/36)

## [0.10.0]
* Add support for wildcards (`*`) to `u.updateIn`. (https://github.com/substantial/updeep/issues/27)

## [0.9.0]
* Do not add object during false branch of `u.if`.
  (https://github.com/substantial/updeep/issues/35)

## [0.8.0]
* Default to empty array if update keys are integers. (https://github.com/substantial/updeep/issues/22)

## [0.7.2]
* Fix curried functions not reporting their correct arity. (https://github.com/substantial/updeep/issues/31)

## [0.7.1]
* Fix update omitting empty object. (https://github.com/substantial/updeep/issues/29)

## [0.7.0]
* Add `u._` placeholder for curried functions.
* Add `u.constant` for replacing an object outright. (https://github.com/substantial/updeep/issues/10)
* Fix handling null differently than undefined. `u` and friends will now coerce null to an object if there are updates for it. (https://github.com/substantial/updeep/issues/20)

## [0.6.0]
* Remove support for `_.placeholder` in curried methods. This may come back, but it was necessary for the next item.
* Improve performance of curried methods. (https://github.com/substantial/updeep/issues/16)
* Improve examples in docs, thanks [hedgerh][].
* `u.map` will now return the same instance if nothing changes.
* Improve performance of `u.map`.
* Removed a couple lodash dependencies.

## [0.5.0]
* Add `u.is` to test predicates in a single path. (https://github.com/substantial/updeep/issues/13)
* Rename `u.in` to `u.updateIn`. With `u.is` and `u.if` it was too confusing.
* Make `u` available at `u.update` as well.

## [0.4.0]
* Add `u.if` and `u.ifElse` to conditionally update objects. (https://github.com/substantial/updeep/issues/12)
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

[unreleased]: https://github.com/aaronjensen/updeep/compare/v0.15.0...HEAD
[0.14.0]: https://github.com/aaronjensen/updeep/compare/v0.14.0...v0.15.0
[0.14.0]: https://github.com/aaronjensen/updeep/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/aaronjensen/updeep/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/aaronjensen/updeep/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/aaronjensen/updeep/compare/v0.10.1...v0.11.0
[0.10.1]: https://github.com/aaronjensen/updeep/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/aaronjensen/updeep/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/aaronjensen/updeep/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/aaronjensen/updeep/compare/v0.7.2...v0.8.0
[0.7.2]: https://github.com/aaronjensen/updeep/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/aaronjensen/updeep/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/aaronjensen/updeep/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/aaronjensen/updeep/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/aaronjensen/updeep/compare/v0.4.0...v0.5.0
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

[hedgerh]: https://github.com/hedgerh
