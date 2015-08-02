# Change Log

## [unreleased]
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

[unreleased]: https://github.com/aaronjensen/updeep/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/aaronjensen/updeep/compare/v0.1.3...v0.2.0
[0.1.3]: https://github.com/aaronjensen/updeep/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/aaronjensen/updeep/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/aaronjensen/updeep/compare/v0.1.0...v0.1.1
