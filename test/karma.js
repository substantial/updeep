(function (exports) {
    'use strict';

    var babelHelpers = {};
    babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

    babelHelpers.defineProperty = function (obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    };

    babelHelpers.extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    babelHelpers.toConsumableArray = function (arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      } else {
        return Array.from(arr);
      }
    };

    babelHelpers;


    var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
    function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }

    var assert = __commonjs(function (module) {
    /*!
     * chai
     * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    module.exports = function (chai, util) {

      /*!
       * Chai dependencies.
       */

      var Assertion = chai.Assertion,
          flag = util.flag;

      /*!
       * Module export.
       */

      /**
       * ### assert(expression, message)
       *
       * Write your own test expressions.
       *
       *     assert('foo' !== 'bar', 'foo is not bar');
       *     assert(Array.isArray([]), 'empty arrays are arrays');
       *
       * @param {Mixed} expression to test for truthiness
       * @param {String} message to display on error
       * @name assert
       * @api public
       */

      var assert = chai.assert = function (express, errmsg) {
        var test = new Assertion(null, null, chai.assert);
        test.assert(express, errmsg, '[ negation message unavailable ]');
      };

      /**
       * ### .fail(actual, expected, [message], [operator])
       *
       * Throw a failure. Node.js `assert` module-compatible.
       *
       * @name fail
       * @param {Mixed} actual
       * @param {Mixed} expected
       * @param {String} message
       * @param {String} operator
       * @api public
       */

      assert.fail = function (actual, expected, message, operator) {
        message = message || 'assert.fail()';
        throw new chai.AssertionError(message, {
          actual: actual,
          expected: expected,
          operator: operator
        }, assert.fail);
      };

      /**
       * ### .isOk(object, [message])
       *
       * Asserts that `object` is truthy.
       *
       *     assert.isOk('everything', 'everything is ok');
       *     assert.isOk(false, 'this will fail');
       *
       * @name isOk
       * @alias ok
       * @param {Mixed} object to test
       * @param {String} message
       * @api public
       */

      assert.isOk = function (val, msg) {
        new Assertion(val, msg).is.ok;
      };

      /**
       * ### .isNotOk(object, [message])
       *
       * Asserts that `object` is falsy.
       *
       *     assert.isNotOk('everything', 'this will fail');
       *     assert.isNotOk(false, 'this will pass');
       *
       * @name isNotOk
       * @alias notOk
       * @param {Mixed} object to test
       * @param {String} message
       * @api public
       */

      assert.isNotOk = function (val, msg) {
        new Assertion(val, msg).is.not.ok;
      };

      /**
       * ### .equal(actual, expected, [message])
       *
       * Asserts non-strict equality (`==`) of `actual` and `expected`.
       *
       *     assert.equal(3, '3', '== coerces values to strings');
       *
       * @name equal
       * @param {Mixed} actual
       * @param {Mixed} expected
       * @param {String} message
       * @api public
       */

      assert.equal = function (act, exp, msg) {
        var test = new Assertion(act, msg, assert.equal);

        test.assert(exp == flag(test, 'object'), 'expected #{this} to equal #{exp}', 'expected #{this} to not equal #{act}', exp, act);
      };

      /**
       * ### .notEqual(actual, expected, [message])
       *
       * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
       *
       *     assert.notEqual(3, 4, 'these numbers are not equal');
       *
       * @name notEqual
       * @param {Mixed} actual
       * @param {Mixed} expected
       * @param {String} message
       * @api public
       */

      assert.notEqual = function (act, exp, msg) {
        var test = new Assertion(act, msg, assert.notEqual);

        test.assert(exp != flag(test, 'object'), 'expected #{this} to not equal #{exp}', 'expected #{this} to equal #{act}', exp, act);
      };

      /**
       * ### .strictEqual(actual, expected, [message])
       *
       * Asserts strict equality (`===`) of `actual` and `expected`.
       *
       *     assert.strictEqual(true, true, 'these booleans are strictly equal');
       *
       * @name strictEqual
       * @param {Mixed} actual
       * @param {Mixed} expected
       * @param {String} message
       * @api public
       */

      assert.strictEqual = function (act, exp, msg) {
        new Assertion(act, msg).to.equal(exp);
      };

      /**
       * ### .notStrictEqual(actual, expected, [message])
       *
       * Asserts strict inequality (`!==`) of `actual` and `expected`.
       *
       *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
       *
       * @name notStrictEqual
       * @param {Mixed} actual
       * @param {Mixed} expected
       * @param {String} message
       * @api public
       */

      assert.notStrictEqual = function (act, exp, msg) {
        new Assertion(act, msg).to.not.equal(exp);
      };

      /**
       * ### .deepEqual(actual, expected, [message])
       *
       * Asserts that `actual` is deeply equal to `expected`.
       *
       *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
       *
       * @name deepEqual
       * @param {Mixed} actual
       * @param {Mixed} expected
       * @param {String} message
       * @api public
       */

      assert.deepEqual = function (act, exp, msg) {
        new Assertion(act, msg).to.eql(exp);
      };

      /**
       * ### .notDeepEqual(actual, expected, [message])
       *
       * Assert that `actual` is not deeply equal to `expected`.
       *
       *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
       *
       * @name notDeepEqual
       * @param {Mixed} actual
       * @param {Mixed} expected
       * @param {String} message
       * @api public
       */

      assert.notDeepEqual = function (act, exp, msg) {
        new Assertion(act, msg).to.not.eql(exp);
      };

      /**
      * ### .isAbove(valueToCheck, valueToBeAbove, [message])
      *
      * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`
      *
      *     assert.isAbove(5, 2, '5 is strictly greater than 2');
      *
      * @name isAbove
      * @param {Mixed} valueToCheck
      * @param {Mixed} valueToBeAbove
      * @param {String} message
      * @api public
      */

      assert.isAbove = function (val, abv, msg) {
        new Assertion(val, msg).to.be.above(abv);
      };

      /**
      * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
      *
      * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`
      *
      *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
      *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
      *
      * @name isAtLeast
      * @param {Mixed} valueToCheck
      * @param {Mixed} valueToBeAtLeast
      * @param {String} message
      * @api public
      */

      assert.isAtLeast = function (val, atlst, msg) {
        new Assertion(val, msg).to.be.least(atlst);
      };

      /**
      * ### .isBelow(valueToCheck, valueToBeBelow, [message])
      *
      * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`
      *
      *     assert.isBelow(3, 6, '3 is strictly less than 6');
      *
      * @name isBelow
      * @param {Mixed} valueToCheck
      * @param {Mixed} valueToBeBelow
      * @param {String} message
      * @api public
      */

      assert.isBelow = function (val, blw, msg) {
        new Assertion(val, msg).to.be.below(blw);
      };

      /**
      * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
      *
      * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`
      *
      *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
      *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
      *
      * @name isAtMost
      * @param {Mixed} valueToCheck
      * @param {Mixed} valueToBeAtMost
      * @param {String} message
      * @api public
      */

      assert.isAtMost = function (val, atmst, msg) {
        new Assertion(val, msg).to.be.most(atmst);
      };

      /**
       * ### .isTrue(value, [message])
       *
       * Asserts that `value` is true.
       *
       *     var teaServed = true;
       *     assert.isTrue(teaServed, 'the tea has been served');
       *
       * @name isTrue
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isTrue = function (val, msg) {
        new Assertion(val, msg).is['true'];
      };

      /**
       * ### .isNotTrue(value, [message])
       *
       * Asserts that `value` is not true.
       *
       *     var tea = 'tasty chai';
       *     assert.isNotTrue(tea, 'great, time for tea!');
       *
       * @name isNotTrue
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isNotTrue = function (val, msg) {
        new Assertion(val, msg).to.not.equal(true);
      };

      /**
       * ### .isFalse(value, [message])
       *
       * Asserts that `value` is false.
       *
       *     var teaServed = false;
       *     assert.isFalse(teaServed, 'no tea yet? hmm...');
       *
       * @name isFalse
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isFalse = function (val, msg) {
        new Assertion(val, msg).is['false'];
      };

      /**
       * ### .isNotFalse(value, [message])
       *
       * Asserts that `value` is not false.
       *
       *     var tea = 'tasty chai';
       *     assert.isNotFalse(tea, 'great, time for tea!');
       *
       * @name isNotFalse
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isNotFalse = function (val, msg) {
        new Assertion(val, msg).to.not.equal(false);
      };

      /**
       * ### .isNull(value, [message])
       *
       * Asserts that `value` is null.
       *
       *     assert.isNull(err, 'there was no error');
       *
       * @name isNull
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isNull = function (val, msg) {
        new Assertion(val, msg).to.equal(null);
      };

      /**
       * ### .isNotNull(value, [message])
       *
       * Asserts that `value` is not null.
       *
       *     var tea = 'tasty chai';
       *     assert.isNotNull(tea, 'great, time for tea!');
       *
       * @name isNotNull
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isNotNull = function (val, msg) {
        new Assertion(val, msg).to.not.equal(null);
      };

      /**
       * ### .isNaN
       * Asserts that value is NaN
       *
       *    assert.isNaN('foo', 'foo is NaN');
       *
       * @name isNaN
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isNaN = function (val, msg) {
        new Assertion(val, msg).to.be.NaN;
      };

      /**
       * ### .isNotNaN
       * Asserts that value is not NaN
       *
       *    assert.isNotNaN(4, '4 is not NaN');
       *
       * @name isNotNaN
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */
      assert.isNotNaN = function (val, msg) {
        new Assertion(val, msg).not.to.be.NaN;
      };

      /**
       * ### .isUndefined(value, [message])
       *
       * Asserts that `value` is `undefined`.
       *
       *     var tea;
       *     assert.isUndefined(tea, 'no tea defined');
       *
       * @name isUndefined
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isUndefined = function (val, msg) {
        new Assertion(val, msg).to.equal(undefined);
      };

      /**
       * ### .isDefined(value, [message])
       *
       * Asserts that `value` is not `undefined`.
       *
       *     var tea = 'cup of chai';
       *     assert.isDefined(tea, 'tea has been defined');
       *
       * @name isDefined
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isDefined = function (val, msg) {
        new Assertion(val, msg).to.not.equal(undefined);
      };

      /**
       * ### .isFunction(value, [message])
       *
       * Asserts that `value` is a function.
       *
       *     function serveTea() { return 'cup of tea'; };
       *     assert.isFunction(serveTea, 'great, we can have tea now');
       *
       * @name isFunction
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isFunction = function (val, msg) {
        new Assertion(val, msg).to.be.a('function');
      };

      /**
       * ### .isNotFunction(value, [message])
       *
       * Asserts that `value` is _not_ a function.
       *
       *     var serveTea = [ 'heat', 'pour', 'sip' ];
       *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
       *
       * @name isNotFunction
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isNotFunction = function (val, msg) {
        new Assertion(val, msg).to.not.be.a('function');
      };

      /**
       * ### .isObject(value, [message])
       *
       * Asserts that `value` is an object (as revealed by
       * `Object.prototype.toString`).
       *
       *     var selection = { name: 'Chai', serve: 'with spices' };
       *     assert.isObject(selection, 'tea selection is an object');
       *
       * @name isObject
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isObject = function (val, msg) {
        new Assertion(val, msg).to.be.a('object');
      };

      /**
       * ### .isNotObject(value, [message])
       *
       * Asserts that `value` is _not_ an object.
       *
       *     var selection = 'chai'
       *     assert.isNotObject(selection, 'tea selection is not an object');
       *     assert.isNotObject(null, 'null is not an object');
       *
       * @name isNotObject
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isNotObject = function (val, msg) {
        new Assertion(val, msg).to.not.be.a('object');
      };

      /**
       * ### .isArray(value, [message])
       *
       * Asserts that `value` is an array.
       *
       *     var menu = [ 'green', 'chai', 'oolong' ];
       *     assert.isArray(menu, 'what kind of tea do we want?');
       *
       * @name isArray
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isArray = function (val, msg) {
        new Assertion(val, msg).to.be.an('array');
      };

      /**
       * ### .isNotArray(value, [message])
       *
       * Asserts that `value` is _not_ an array.
       *
       *     var menu = 'green|chai|oolong';
       *     assert.isNotArray(menu, 'what kind of tea do we want?');
       *
       * @name isNotArray
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isNotArray = function (val, msg) {
        new Assertion(val, msg).to.not.be.an('array');
      };

      /**
       * ### .isString(value, [message])
       *
       * Asserts that `value` is a string.
       *
       *     var teaOrder = 'chai';
       *     assert.isString(teaOrder, 'order placed');
       *
       * @name isString
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isString = function (val, msg) {
        new Assertion(val, msg).to.be.a('string');
      };

      /**
       * ### .isNotString(value, [message])
       *
       * Asserts that `value` is _not_ a string.
       *
       *     var teaOrder = 4;
       *     assert.isNotString(teaOrder, 'order placed');
       *
       * @name isNotString
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isNotString = function (val, msg) {
        new Assertion(val, msg).to.not.be.a('string');
      };

      /**
       * ### .isNumber(value, [message])
       *
       * Asserts that `value` is a number.
       *
       *     var cups = 2;
       *     assert.isNumber(cups, 'how many cups');
       *
       * @name isNumber
       * @param {Number} value
       * @param {String} message
       * @api public
       */

      assert.isNumber = function (val, msg) {
        new Assertion(val, msg).to.be.a('number');
      };

      /**
       * ### .isNotNumber(value, [message])
       *
       * Asserts that `value` is _not_ a number.
       *
       *     var cups = '2 cups please';
       *     assert.isNotNumber(cups, 'how many cups');
       *
       * @name isNotNumber
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isNotNumber = function (val, msg) {
        new Assertion(val, msg).to.not.be.a('number');
      };

      /**
       * ### .isBoolean(value, [message])
       *
       * Asserts that `value` is a boolean.
       *
       *     var teaReady = true
       *       , teaServed = false;
       *
       *     assert.isBoolean(teaReady, 'is the tea ready');
       *     assert.isBoolean(teaServed, 'has tea been served');
       *
       * @name isBoolean
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isBoolean = function (val, msg) {
        new Assertion(val, msg).to.be.a('boolean');
      };

      /**
       * ### .isNotBoolean(value, [message])
       *
       * Asserts that `value` is _not_ a boolean.
       *
       *     var teaReady = 'yep'
       *       , teaServed = 'nope';
       *
       *     assert.isNotBoolean(teaReady, 'is the tea ready');
       *     assert.isNotBoolean(teaServed, 'has tea been served');
       *
       * @name isNotBoolean
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.isNotBoolean = function (val, msg) {
        new Assertion(val, msg).to.not.be.a('boolean');
      };

      /**
       * ### .typeOf(value, name, [message])
       *
       * Asserts that `value`'s type is `name`, as determined by
       * `Object.prototype.toString`.
       *
       *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
       *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
       *     assert.typeOf('tea', 'string', 'we have a string');
       *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
       *     assert.typeOf(null, 'null', 'we have a null');
       *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
       *
       * @name typeOf
       * @param {Mixed} value
       * @param {String} name
       * @param {String} message
       * @api public
       */

      assert.typeOf = function (val, type, msg) {
        new Assertion(val, msg).to.be.a(type);
      };

      /**
       * ### .notTypeOf(value, name, [message])
       *
       * Asserts that `value`'s type is _not_ `name`, as determined by
       * `Object.prototype.toString`.
       *
       *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
       *
       * @name notTypeOf
       * @param {Mixed} value
       * @param {String} typeof name
       * @param {String} message
       * @api public
       */

      assert.notTypeOf = function (val, type, msg) {
        new Assertion(val, msg).to.not.be.a(type);
      };

      /**
       * ### .instanceOf(object, constructor, [message])
       *
       * Asserts that `value` is an instance of `constructor`.
       *
       *     var Tea = function (name) { this.name = name; }
       *       , chai = new Tea('chai');
       *
       *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
       *
       * @name instanceOf
       * @param {Object} object
       * @param {Constructor} constructor
       * @param {String} message
       * @api public
       */

      assert.instanceOf = function (val, type, msg) {
        new Assertion(val, msg).to.be.instanceOf(type);
      };

      /**
       * ### .notInstanceOf(object, constructor, [message])
       *
       * Asserts `value` is not an instance of `constructor`.
       *
       *     var Tea = function (name) { this.name = name; }
       *       , chai = new String('chai');
       *
       *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
       *
       * @name notInstanceOf
       * @param {Object} object
       * @param {Constructor} constructor
       * @param {String} message
       * @api public
       */

      assert.notInstanceOf = function (val, type, msg) {
        new Assertion(val, msg).to.not.be.instanceOf(type);
      };

      /**
       * ### .include(haystack, needle, [message])
       *
       * Asserts that `haystack` includes `needle`. Works
       * for strings and arrays.
       *
       *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
       *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
       *
       * @name include
       * @param {Array|String} haystack
       * @param {Mixed} needle
       * @param {String} message
       * @api public
       */

      assert.include = function (exp, inc, msg) {
        new Assertion(exp, msg, assert.include).include(inc);
      };

      /**
       * ### .notInclude(haystack, needle, [message])
       *
       * Asserts that `haystack` does not include `needle`. Works
       * for strings and arrays.
       *
       *     assert.notInclude('foobar', 'baz', 'string not include substring');
       *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
       *
       * @name notInclude
       * @param {Array|String} haystack
       * @param {Mixed} needle
       * @param {String} message
       * @api public
       */

      assert.notInclude = function (exp, inc, msg) {
        new Assertion(exp, msg, assert.notInclude).not.include(inc);
      };

      /**
       * ### .match(value, regexp, [message])
       *
       * Asserts that `value` matches the regular expression `regexp`.
       *
       *     assert.match('foobar', /^foo/, 'regexp matches');
       *
       * @name match
       * @param {Mixed} value
       * @param {RegExp} regexp
       * @param {String} message
       * @api public
       */

      assert.match = function (exp, re, msg) {
        new Assertion(exp, msg).to.match(re);
      };

      /**
       * ### .notMatch(value, regexp, [message])
       *
       * Asserts that `value` does not match the regular expression `regexp`.
       *
       *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
       *
       * @name notMatch
       * @param {Mixed} value
       * @param {RegExp} regexp
       * @param {String} message
       * @api public
       */

      assert.notMatch = function (exp, re, msg) {
        new Assertion(exp, msg).to.not.match(re);
      };

      /**
       * ### .property(object, property, [message])
       *
       * Asserts that `object` has a property named by `property`.
       *
       *     assert.property({ tea: { green: 'matcha' }}, 'tea');
       *
       * @name property
       * @param {Object} object
       * @param {String} property
       * @param {String} message
       * @api public
       */

      assert.property = function (obj, prop, msg) {
        new Assertion(obj, msg).to.have.property(prop);
      };

      /**
       * ### .notProperty(object, property, [message])
       *
       * Asserts that `object` does _not_ have a property named by `property`.
       *
       *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
       *
       * @name notProperty
       * @param {Object} object
       * @param {String} property
       * @param {String} message
       * @api public
       */

      assert.notProperty = function (obj, prop, msg) {
        new Assertion(obj, msg).to.not.have.property(prop);
      };

      /**
       * ### .deepProperty(object, property, [message])
       *
       * Asserts that `object` has a property named by `property`, which can be a
       * string using dot- and bracket-notation for deep reference.
       *
       *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
       *
       * @name deepProperty
       * @param {Object} object
       * @param {String} property
       * @param {String} message
       * @api public
       */

      assert.deepProperty = function (obj, prop, msg) {
        new Assertion(obj, msg).to.have.deep.property(prop);
      };

      /**
       * ### .notDeepProperty(object, property, [message])
       *
       * Asserts that `object` does _not_ have a property named by `property`, which
       * can be a string using dot- and bracket-notation for deep reference.
       *
       *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
       *
       * @name notDeepProperty
       * @param {Object} object
       * @param {String} property
       * @param {String} message
       * @api public
       */

      assert.notDeepProperty = function (obj, prop, msg) {
        new Assertion(obj, msg).to.not.have.deep.property(prop);
      };

      /**
       * ### .propertyVal(object, property, value, [message])
       *
       * Asserts that `object` has a property named by `property` with value given
       * by `value`.
       *
       *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
       *
       * @name propertyVal
       * @param {Object} object
       * @param {String} property
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.propertyVal = function (obj, prop, val, msg) {
        new Assertion(obj, msg).to.have.property(prop, val);
      };

      /**
       * ### .propertyNotVal(object, property, value, [message])
       *
       * Asserts that `object` has a property named by `property`, but with a value
       * different from that given by `value`.
       *
       *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
       *
       * @name propertyNotVal
       * @param {Object} object
       * @param {String} property
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.propertyNotVal = function (obj, prop, val, msg) {
        new Assertion(obj, msg).to.not.have.property(prop, val);
      };

      /**
       * ### .deepPropertyVal(object, property, value, [message])
       *
       * Asserts that `object` has a property named by `property` with value given
       * by `value`. `property` can use dot- and bracket-notation for deep
       * reference.
       *
       *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
       *
       * @name deepPropertyVal
       * @param {Object} object
       * @param {String} property
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.deepPropertyVal = function (obj, prop, val, msg) {
        new Assertion(obj, msg).to.have.deep.property(prop, val);
      };

      /**
       * ### .deepPropertyNotVal(object, property, value, [message])
       *
       * Asserts that `object` has a property named by `property`, but with a value
       * different from that given by `value`. `property` can use dot- and
       * bracket-notation for deep reference.
       *
       *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
       *
       * @name deepPropertyNotVal
       * @param {Object} object
       * @param {String} property
       * @param {Mixed} value
       * @param {String} message
       * @api public
       */

      assert.deepPropertyNotVal = function (obj, prop, val, msg) {
        new Assertion(obj, msg).to.not.have.deep.property(prop, val);
      };

      /**
       * ### .lengthOf(object, length, [message])
       *
       * Asserts that `object` has a `length` property with the expected value.
       *
       *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
       *     assert.lengthOf('foobar', 6, 'string has length of 6');
       *
       * @name lengthOf
       * @param {Mixed} object
       * @param {Number} length
       * @param {String} message
       * @api public
       */

      assert.lengthOf = function (exp, len, msg) {
        new Assertion(exp, msg).to.have.length(len);
      };

      /**
       * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
       *
       * Asserts that `function` will throw an error that is an instance of
       * `constructor`, or alternately that it will throw an error with message
       * matching `regexp`.
       *
       *     assert.throws(fn, 'function throws a reference error');
       *     assert.throws(fn, /function throws a reference error/);
       *     assert.throws(fn, ReferenceError);
       *     assert.throws(fn, ReferenceError, 'function throws a reference error');
       *     assert.throws(fn, ReferenceError, /function throws a reference error/);
       *
       * @name throws
       * @alias throw
       * @alias Throw
       * @param {Function} function
       * @param {ErrorConstructor} constructor
       * @param {RegExp} regexp
       * @param {String} message
       * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
       * @api public
       */

      assert.throws = function (fn, errt, errs, msg) {
        if ('string' === typeof errt || errt instanceof RegExp) {
          errs = errt;
          errt = null;
        }

        var assertErr = new Assertion(fn, msg).to.throw(errt, errs);
        return flag(assertErr, 'object');
      };

      /**
       * ### .doesNotThrow(function, [constructor/regexp], [message])
       *
       * Asserts that `function` will _not_ throw an error that is an instance of
       * `constructor`, or alternately that it will not throw an error with message
       * matching `regexp`.
       *
       *     assert.doesNotThrow(fn, Error, 'function does not throw');
       *
       * @name doesNotThrow
       * @param {Function} function
       * @param {ErrorConstructor} constructor
       * @param {RegExp} regexp
       * @param {String} message
       * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
       * @api public
       */

      assert.doesNotThrow = function (fn, type, msg) {
        if ('string' === typeof type) {
          msg = type;
          type = null;
        }

        new Assertion(fn, msg).to.not.Throw(type);
      };

      /**
       * ### .operator(val1, operator, val2, [message])
       *
       * Compares two values using `operator`.
       *
       *     assert.operator(1, '<', 2, 'everything is ok');
       *     assert.operator(1, '>', 2, 'this will fail');
       *
       * @name operator
       * @param {Mixed} val1
       * @param {String} operator
       * @param {Mixed} val2
       * @param {String} message
       * @api public
       */

      assert.operator = function (val, operator, val2, msg) {
        var ok;
        switch (operator) {
          case '==':
            ok = val == val2;
            break;
          case '===':
            ok = val === val2;
            break;
          case '>':
            ok = val > val2;
            break;
          case '>=':
            ok = val >= val2;
            break;
          case '<':
            ok = val < val2;
            break;
          case '<=':
            ok = val <= val2;
            break;
          case '!=':
            ok = val != val2;
            break;
          case '!==':
            ok = val !== val2;
            break;
          default:
            throw new Error('Invalid operator "' + operator + '"');
        }
        var test = new Assertion(ok, msg);
        test.assert(true === flag(test, 'object'), 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2), 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2));
      };

      /**
       * ### .closeTo(actual, expected, delta, [message])
       *
       * Asserts that the target is equal `expected`, to within a +/- `delta` range.
       *
       *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
       *
       * @name closeTo
       * @param {Number} actual
       * @param {Number} expected
       * @param {Number} delta
       * @param {String} message
       * @api public
       */

      assert.closeTo = function (act, exp, delta, msg) {
        new Assertion(act, msg).to.be.closeTo(exp, delta);
      };

      /**
       * ### .approximately(actual, expected, delta, [message])
       *
       * Asserts that the target is equal `expected`, to within a +/- `delta` range.
       *
       *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
       *
       * @name approximately
       * @param {Number} actual
       * @param {Number} expected
       * @param {Number} delta
       * @param {String} message
       * @api public
       */

      assert.approximately = function (act, exp, delta, msg) {
        new Assertion(act, msg).to.be.approximately(exp, delta);
      };

      /**
       * ### .sameMembers(set1, set2, [message])
       *
       * Asserts that `set1` and `set2` have the same members.
       * Order is not taken into account.
       *
       *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
       *
       * @name sameMembers
       * @param {Array} set1
       * @param {Array} set2
       * @param {String} message
       * @api public
       */

      assert.sameMembers = function (set1, set2, msg) {
        new Assertion(set1, msg).to.have.same.members(set2);
      };

      /**
       * ### .sameDeepMembers(set1, set2, [message])
       *
       * Asserts that `set1` and `set2` have the same members - using a deep equality checking.
       * Order is not taken into account.
       *
       *     assert.sameDeepMembers([ {b: 3}, {a: 2}, {c: 5} ], [ {c: 5}, {b: 3}, {a: 2} ], 'same deep members');
       *
       * @name sameDeepMembers
       * @param {Array} set1
       * @param {Array} set2
       * @param {String} message
       * @api public
       */

      assert.sameDeepMembers = function (set1, set2, msg) {
        new Assertion(set1, msg).to.have.same.deep.members(set2);
      };

      /**
       * ### .includeMembers(superset, subset, [message])
       *
       * Asserts that `subset` is included in `superset`.
       * Order is not taken into account.
       *
       *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
       *
       * @name includeMembers
       * @param {Array} superset
       * @param {Array} subset
       * @param {String} message
       * @api public
       */

      assert.includeMembers = function (superset, subset, msg) {
        new Assertion(superset, msg).to.include.members(subset);
      };

      /**
       * ### .oneOf(inList, list, [message])
       *
       * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
       *
       *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
       *
       * @name oneOf
       * @param {*} inList
       * @param {Array<*>} list
       * @param {String} message
       * @api public
       */

      assert.oneOf = function (inList, list, msg) {
        new Assertion(inList, msg).to.be.oneOf(list);
      };

      /**
      * ### .changes(function, object, property)
      *
      * Asserts that a function changes the value of a property
      *
      *     var obj = { val: 10 };
      *     var fn = function() { obj.val = 22 };
      *     assert.changes(fn, obj, 'val');
      *
      * @name changes
      * @param {Function} modifier function
      * @param {Object} object
      * @param {String} property name
      * @param {String} message _optional_
      * @api public
      */

      assert.changes = function (fn, obj, prop) {
        new Assertion(fn).to.change(obj, prop);
      };

      /**
      * ### .doesNotChange(function, object, property)
      *
      * Asserts that a function does not changes the value of a property
      *
      *     var obj = { val: 10 };
      *     var fn = function() { console.log('foo'); };
      *     assert.doesNotChange(fn, obj, 'val');
      *
      * @name doesNotChange
      * @param {Function} modifier function
      * @param {Object} object
      * @param {String} property name
      * @param {String} message _optional_
      * @api public
      */

      assert.doesNotChange = function (fn, obj, prop) {
        new Assertion(fn).to.not.change(obj, prop);
      };

      /**
      * ### .increases(function, object, property)
      *
      * Asserts that a function increases an object property
      *
      *     var obj = { val: 10 };
      *     var fn = function() { obj.val = 13 };
      *     assert.increases(fn, obj, 'val');
      *
      * @name increases
      * @param {Function} modifier function
      * @param {Object} object
      * @param {String} property name
      * @param {String} message _optional_
      * @api public
      */

      assert.increases = function (fn, obj, prop) {
        new Assertion(fn).to.increase(obj, prop);
      };

      /**
      * ### .doesNotIncrease(function, object, property)
      *
      * Asserts that a function does not increase object property
      *
      *     var obj = { val: 10 };
      *     var fn = function() { obj.val = 8 };
      *     assert.doesNotIncrease(fn, obj, 'val');
      *
      * @name doesNotIncrease
      * @param {Function} modifier function
      * @param {Object} object
      * @param {String} property name
      * @param {String} message _optional_
      * @api public
      */

      assert.doesNotIncrease = function (fn, obj, prop) {
        new Assertion(fn).to.not.increase(obj, prop);
      };

      /**
      * ### .decreases(function, object, property)
      *
      * Asserts that a function decreases an object property
      *
      *     var obj = { val: 10 };
      *     var fn = function() { obj.val = 5 };
      *     assert.decreases(fn, obj, 'val');
      *
      * @name decreases
      * @param {Function} modifier function
      * @param {Object} object
      * @param {String} property name
      * @param {String} message _optional_
      * @api public
      */

      assert.decreases = function (fn, obj, prop) {
        new Assertion(fn).to.decrease(obj, prop);
      };

      /**
      * ### .doesNotDecrease(function, object, property)
      *
      * Asserts that a function does not decreases an object property
      *
      *     var obj = { val: 10 };
      *     var fn = function() { obj.val = 15 };
      *     assert.doesNotDecrease(fn, obj, 'val');
      *
      * @name doesNotDecrease
      * @param {Function} modifier function
      * @param {Object} object
      * @param {String} property name
      * @param {String} message _optional_
      * @api public
      */

      assert.doesNotDecrease = function (fn, obj, prop) {
        new Assertion(fn).to.not.decrease(obj, prop);
      };

      /*!
       * ### .ifError(object)
       *
       * Asserts if value is not a false value, and throws if it is a true value.
       * This is added to allow for chai to be a drop-in replacement for Node's
       * assert class.
       *
       *     var err = new Error('I am a custom error');
       *     assert.ifError(err); // Rethrows err!
       *
       * @name ifError
       * @param {Object} object
       * @api public
       */

      assert.ifError = function (val) {
        if (val) {
          throw val;
        }
      };

      /**
       * ### .isExtensible(object)
       *
       * Asserts that `object` is extensible (can have new properties added to it).
       *
       *     assert.isExtensible({});
       *
       * @name isExtensible
       * @alias extensible
       * @param {Object} object
       * @param {String} message _optional_
       * @api public
       */

      assert.isExtensible = function (obj, msg) {
        new Assertion(obj, msg).to.be.extensible;
      };

      /**
       * ### .isNotExtensible(object)
       *
       * Asserts that `object` is _not_ extensible.
       *
       *     var nonExtensibleObject = Object.preventExtensions({});
       *     var sealedObject = Object.seal({});
       *     var frozenObject = Object.freese({});
       *
       *     assert.isNotExtensible(nonExtensibleObject);
       *     assert.isNotExtensible(sealedObject);
       *     assert.isNotExtensible(frozenObject);
       *
       * @name isNotExtensible
       * @alias notExtensible
       * @param {Object} object
       * @param {String} message _optional_
       * @api public
       */

      assert.isNotExtensible = function (obj, msg) {
        new Assertion(obj, msg).to.not.be.extensible;
      };

      /**
       * ### .isSealed(object)
       *
       * Asserts that `object` is sealed (cannot have new properties added to it
       * and its existing properties cannot be removed).
       *
       *     var sealedObject = Object.seal({});
       *     var frozenObject = Object.seal({});
       *
       *     assert.isSealed(sealedObject);
       *     assert.isSealed(frozenObject);
       *
       * @name isSealed
       * @alias sealed
       * @param {Object} object
       * @param {String} message _optional_
       * @api public
       */

      assert.isSealed = function (obj, msg) {
        new Assertion(obj, msg).to.be.sealed;
      };

      /**
       * ### .isNotSealed(object)
       *
       * Asserts that `object` is _not_ sealed.
       *
       *     assert.isNotSealed({});
       *
       * @name isNotSealed
       * @alias notSealed
       * @param {Object} object
       * @param {String} message _optional_
       * @api public
       */

      assert.isNotSealed = function (obj, msg) {
        new Assertion(obj, msg).to.not.be.sealed;
      };

      /**
       * ### .isFrozen(object)
       *
       * Asserts that `object` is frozen (cannot have new properties added to it
       * and its existing properties cannot be modified).
       *
       *     var frozenObject = Object.freeze({});
       *     assert.frozen(frozenObject);
       *
       * @name isFrozen
       * @alias frozen
       * @param {Object} object
       * @param {String} message _optional_
       * @api public
       */

      assert.isFrozen = function (obj, msg) {
        new Assertion(obj, msg).to.be.frozen;
      };

      /**
       * ### .isNotFrozen(object)
       *
       * Asserts that `object` is _not_ frozen.
       *
       *     assert.isNotFrozen({});
       *
       * @name isNotFrozen
       * @alias notFrozen
       * @param {Object} object
       * @param {String} message _optional_
       * @api public
       */

      assert.isNotFrozen = function (obj, msg) {
        new Assertion(obj, msg).to.not.be.frozen;
      };

      /*!
       * Aliases.
       */

      (function alias(name, as) {
        assert[as] = assert[name];
        return alias;
      })('isOk', 'ok')('isNotOk', 'notOk')('throws', 'throw')('throws', 'Throw')('isExtensible', 'extensible')('isNotExtensible', 'notExtensible')('isSealed', 'sealed')('isNotSealed', 'notSealed')('isFrozen', 'frozen')('isNotFrozen', 'notFrozen');
    };
    });

    var require$$0$1 = (assert && typeof assert === 'object' && 'default' in assert ? assert['default'] : assert);

    var should = __commonjs(function (module) {
    /*!
     * chai
     * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    module.exports = function (chai, util) {
      var Assertion = chai.Assertion;

      function loadShould() {
        // explicitly define this method as function as to have it's name to include as `ssfi`
        function shouldGetter() {
          if (this instanceof String || this instanceof Number || this instanceof Boolean) {
            return new Assertion(this.valueOf(), null, shouldGetter);
          }
          return new Assertion(this, null, shouldGetter);
        }
        function shouldSetter(value) {
          // See https://github.com/chaijs/chai/issues/86: this makes
          // `whatever.should = someValue` actually set `someValue`, which is
          // especially useful for `global.should = require('chai').should()`.
          //
          // Note that we have to use [[DefineProperty]] instead of [[Put]]
          // since otherwise we would trigger this very setter!
          Object.defineProperty(this, 'should', {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        }
        // modify Object.prototype to have `should`
        Object.defineProperty(Object.prototype, 'should', {
          set: shouldSetter,
          get: shouldGetter,
          configurable: true
        });

        var should = {};

        /**
         * ### .fail(actual, expected, [message], [operator])
         *
         * Throw a failure.
         *
         * @name fail
         * @param {Mixed} actual
         * @param {Mixed} expected
         * @param {String} message
         * @param {String} operator
         * @api public
         */

        should.fail = function (actual, expected, message, operator) {
          message = message || 'should.fail()';
          throw new chai.AssertionError(message, {
            actual: actual,
            expected: expected,
            operator: operator
          }, should.fail);
        };

        should.equal = function (val1, val2, msg) {
          new Assertion(val1, msg).to.equal(val2);
        };

        should.Throw = function (fn, errt, errs, msg) {
          new Assertion(fn, msg).to.Throw(errt, errs);
        };

        should.exist = function (val, msg) {
          new Assertion(val, msg).to.exist;
        };

        // negation
        should.not = {};

        should.not.equal = function (val1, val2, msg) {
          new Assertion(val1, msg).to.not.equal(val2);
        };

        should.not.Throw = function (fn, errt, errs, msg) {
          new Assertion(fn, msg).to.not.Throw(errt, errs);
        };

        should.not.exist = function (val, msg) {
          new Assertion(val, msg).to.not.exist;
        };

        should['throw'] = should['Throw'];
        should.not['throw'] = should.not['Throw'];

        return should;
      };

      chai.should = loadShould;
      chai.Should = loadShould;
    };
    });

    var require$$1 = (should && typeof should === 'object' && 'default' in should ? should['default'] : should);

    var expect$1 = __commonjs(function (module) {
    /*!
     * chai
     * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    module.exports = function (chai, util) {
      chai.expect = function (val, message) {
        return new chai.Assertion(val, message);
      };

      /**
       * ### .fail(actual, expected, [message], [operator])
       *
       * Throw a failure.
       *
       * @name fail
       * @param {Mixed} actual
       * @param {Mixed} expected
       * @param {String} message
       * @param {String} operator
       * @api public
       */

      chai.expect.fail = function (actual, expected, message, operator) {
        message = message || 'expect.fail()';
        throw new chai.AssertionError(message, {
          actual: actual,
          expected: expected,
          operator: operator
        }, chai.expect.fail);
      };
    };
    });

    var require$$2 = (expect$1 && typeof expect$1 === 'object' && 'default' in expect$1 ? expect$1['default'] : expect$1);

    var assertions = __commonjs(function (module) {
    /*!
     * chai
     * http://chaijs.com
     * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    module.exports = function (chai, _) {
      var Assertion = chai.Assertion,
          toString = Object.prototype.toString,
          flag = _.flag;

      /**
       * ### Language Chains
       *
       * The following are provided as chainable getters to
       * improve the readability of your assertions. They
       * do not provide testing capabilities unless they
       * have been overwritten by a plugin.
       *
       * **Chains**
       *
       * - to
       * - be
       * - been
       * - is
       * - that
       * - which
       * - and
       * - has
       * - have
       * - with
       * - at
       * - of
       * - same
       *
       * @name language chains
       * @api public
       */

      ['to', 'be', 'been', 'is', 'and', 'has', 'have', 'with', 'that', 'which', 'at', 'of', 'same'].forEach(function (chain) {
        Assertion.addProperty(chain, function () {
          return this;
        });
      });

      /**
       * ### .not
       *
       * Negates any of assertions following in the chain.
       *
       *     expect(foo).to.not.equal('bar');
       *     expect(goodFn).to.not.throw(Error);
       *     expect({ foo: 'baz' }).to.have.property('foo')
       *       .and.not.equal('bar');
       *
       * @name not
       * @api public
       */

      Assertion.addProperty('not', function () {
        flag(this, 'negate', true);
      });

      /**
       * ### .deep
       *
       * Sets the `deep` flag, later used by the `equal` and
       * `property` assertions.
       *
       *     expect(foo).to.deep.equal({ bar: 'baz' });
       *     expect({ foo: { bar: { baz: 'quux' } } })
       *       .to.have.deep.property('foo.bar.baz', 'quux');
       *
       * `.deep.property` special characters can be escaped
       * by adding two slashes before the `.` or `[]`.
       *
       *     var deepCss = { '.link': { '[target]': 42 }};
       *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
       *
       * @name deep
       * @api public
       */

      Assertion.addProperty('deep', function () {
        flag(this, 'deep', true);
      });

      /**
       * ### .any
       *
       * Sets the `any` flag, (opposite of the `all` flag)
       * later used in the `keys` assertion.
       *
       *     expect(foo).to.have.any.keys('bar', 'baz');
       *
       * @name any
       * @api public
       */

      Assertion.addProperty('any', function () {
        flag(this, 'any', true);
        flag(this, 'all', false);
      });

      /**
       * ### .all
       *
       * Sets the `all` flag (opposite of the `any` flag)
       * later used by the `keys` assertion.
       *
       *     expect(foo).to.have.all.keys('bar', 'baz');
       *
       * @name all
       * @api public
       */

      Assertion.addProperty('all', function () {
        flag(this, 'all', true);
        flag(this, 'any', false);
      });

      /**
       * ### .a(type)
       *
       * The `a` and `an` assertions are aliases that can be
       * used either as language chains or to assert a value's
       * type.
       *
       *     // typeof
       *     expect('test').to.be.a('string');
       *     expect({ foo: 'bar' }).to.be.an('object');
       *     expect(null).to.be.a('null');
       *     expect(undefined).to.be.an('undefined');
       *     expect(new Error).to.be.an('error');
       *     expect(new Promise).to.be.a('promise');
       *     expect(new Float32Array()).to.be.a('float32array');
       *     expect(Symbol()).to.be.a('symbol');
       *
       *     // es6 overrides
       *     expect({[Symbol.toStringTag]:()=>'foo'}).to.be.a('foo');
       *
       *     // language chain
       *     expect(foo).to.be.an.instanceof(Foo);
       *
       * @name a
       * @alias an
       * @param {String} type
       * @param {String} message _optional_
       * @api public
       */

      function an(type, msg) {
        if (msg) flag(this, 'message', msg);
        type = type.toLowerCase();
        var obj = flag(this, 'object'),
            article = ~['a', 'e', 'i', 'o', 'u'].indexOf(type.charAt(0)) ? 'an ' : 'a ';

        this.assert(type === _.type(obj), 'expected #{this} to be ' + article + type, 'expected #{this} not to be ' + article + type);
      }

      Assertion.addChainableMethod('an', an);
      Assertion.addChainableMethod('a', an);

      /**
       * ### .include(value)
       *
       * The `include` and `contain` assertions can be used as either property
       * based language chains or as methods to assert the inclusion of an object
       * in an array or a substring in a string. When used as language chains,
       * they toggle the `contains` flag for the `keys` assertion.
       *
       *     expect([1,2,3]).to.include(2);
       *     expect('foobar').to.contain('foo');
       *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
       *
       * @name include
       * @alias contain
       * @alias includes
       * @alias contains
       * @param {Object|String|Number} obj
       * @param {String} message _optional_
       * @api public
       */

      function includeChainingBehavior() {
        flag(this, 'contains', true);
      }

      function include(val, msg) {
        _.expectTypes(this, ['array', 'object', 'string']);

        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        var expected = false;

        if (_.type(obj) === 'array' && _.type(val) === 'object') {
          for (var i in obj) {
            if (_.eql(obj[i], val)) {
              expected = true;
              break;
            }
          }
        } else if (_.type(val) === 'object') {
          if (!flag(this, 'negate')) {
            for (var k in val) {
              new Assertion(obj).property(k, val[k]);
            }return;
          }
          var subset = {};
          for (var k in val) {
            subset[k] = obj[k];
          }expected = _.eql(subset, val);
        } else {
          expected = obj != undefined && ~obj.indexOf(val);
        }
        this.assert(expected, 'expected #{this} to include ' + _.inspect(val), 'expected #{this} to not include ' + _.inspect(val));
      }

      Assertion.addChainableMethod('include', include, includeChainingBehavior);
      Assertion.addChainableMethod('contain', include, includeChainingBehavior);
      Assertion.addChainableMethod('contains', include, includeChainingBehavior);
      Assertion.addChainableMethod('includes', include, includeChainingBehavior);

      /**
       * ### .ok
       *
       * Asserts that the target is truthy.
       *
       *     expect('everything').to.be.ok;
       *     expect(1).to.be.ok;
       *     expect(false).to.not.be.ok;
       *     expect(undefined).to.not.be.ok;
       *     expect(null).to.not.be.ok;
       *
       * @name ok
       * @api public
       */

      Assertion.addProperty('ok', function () {
        this.assert(flag(this, 'object'), 'expected #{this} to be truthy', 'expected #{this} to be falsy');
      });

      /**
       * ### .true
       *
       * Asserts that the target is `true`.
       *
       *     expect(true).to.be.true;
       *     expect(1).to.not.be.true;
       *
       * @name true
       * @api public
       */

      Assertion.addProperty('true', function () {
        this.assert(true === flag(this, 'object'), 'expected #{this} to be true', 'expected #{this} to be false', this.negate ? false : true);
      });

      /**
       * ### .false
       *
       * Asserts that the target is `false`.
       *
       *     expect(false).to.be.false;
       *     expect(0).to.not.be.false;
       *
       * @name false
       * @api public
       */

      Assertion.addProperty('false', function () {
        this.assert(false === flag(this, 'object'), 'expected #{this} to be false', 'expected #{this} to be true', this.negate ? true : false);
      });

      /**
       * ### .null
       *
       * Asserts that the target is `null`.
       *
       *     expect(null).to.be.null;
       *     expect(undefined).to.not.be.null;
       *
       * @name null
       * @api public
       */

      Assertion.addProperty('null', function () {
        this.assert(null === flag(this, 'object'), 'expected #{this} to be null', 'expected #{this} not to be null');
      });

      /**
       * ### .undefined
       *
       * Asserts that the target is `undefined`.
       *
       *     expect(undefined).to.be.undefined;
       *     expect(null).to.not.be.undefined;
       *
       * @name undefined
       * @api public
       */

      Assertion.addProperty('undefined', function () {
        this.assert(undefined === flag(this, 'object'), 'expected #{this} to be undefined', 'expected #{this} not to be undefined');
      });

      /**
       * ### .NaN
       * Asserts that the target is `NaN`.
       *
       *     expect('foo').to.be.NaN;
       *     expect(4).not.to.be.NaN;
       *
       * @name NaN
       * @api public
       */

      Assertion.addProperty('NaN', function () {
        this.assert(isNaN(flag(this, 'object')), 'expected #{this} to be NaN', 'expected #{this} not to be NaN');
      });

      /**
       * ### .exist
       *
       * Asserts that the target is neither `null` nor `undefined`.
       *
       *     var foo = 'hi'
       *       , bar = null
       *       , baz;
       *
       *     expect(foo).to.exist;
       *     expect(bar).to.not.exist;
       *     expect(baz).to.not.exist;
       *
       * @name exist
       * @api public
       */

      Assertion.addProperty('exist', function () {
        this.assert(null != flag(this, 'object'), 'expected #{this} to exist', 'expected #{this} to not exist');
      });

      /**
       * ### .empty
       *
       * Asserts that the target's length is `0`. For arrays and strings, it checks
       * the `length` property. For objects, it gets the count of
       * enumerable keys.
       *
       *     expect([]).to.be.empty;
       *     expect('').to.be.empty;
       *     expect({}).to.be.empty;
       *
       * @name empty
       * @api public
       */

      Assertion.addProperty('empty', function () {
        var obj = flag(this, 'object'),
            expected = obj;

        if (Array.isArray(obj) || 'string' === typeof object) {
          expected = obj.length;
        } else if ((typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) === 'object') {
          expected = Object.keys(obj).length;
        }

        this.assert(!expected, 'expected #{this} to be empty', 'expected #{this} not to be empty');
      });

      /**
       * ### .arguments
       *
       * Asserts that the target is an arguments object.
       *
       *     function test () {
       *       expect(arguments).to.be.arguments;
       *     }
       *
       * @name arguments
       * @alias Arguments
       * @api public
       */

      function checkArguments() {
        var obj = flag(this, 'object'),
            type = Object.prototype.toString.call(obj);
        this.assert('[object Arguments]' === type, 'expected #{this} to be arguments but got ' + type, 'expected #{this} to not be arguments');
      }

      Assertion.addProperty('arguments', checkArguments);
      Assertion.addProperty('Arguments', checkArguments);

      /**
       * ### .equal(value)
       *
       * Asserts that the target is strictly equal (`===`) to `value`.
       * Alternately, if the `deep` flag is set, asserts that
       * the target is deeply equal to `value`.
       *
       *     expect('hello').to.equal('hello');
       *     expect(42).to.equal(42);
       *     expect(1).to.not.equal(true);
       *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
       *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
       *
       * @name equal
       * @alias equals
       * @alias eq
       * @alias deep.equal
       * @param {Mixed} value
       * @param {String} message _optional_
       * @api public
       */

      function assertEqual(val, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        if (flag(this, 'deep')) {
          return this.eql(val);
        } else {
          this.assert(val === obj, 'expected #{this} to equal #{exp}', 'expected #{this} to not equal #{exp}', val, this._obj, true);
        }
      }

      Assertion.addMethod('equal', assertEqual);
      Assertion.addMethod('equals', assertEqual);
      Assertion.addMethod('eq', assertEqual);

      /**
       * ### .eql(value)
       *
       * Asserts that the target is deeply equal to `value`.
       *
       *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
       *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
       *
       * @name eql
       * @alias eqls
       * @param {Mixed} value
       * @param {String} message _optional_
       * @api public
       */

      function assertEql(obj, msg) {
        if (msg) flag(this, 'message', msg);
        this.assert(_.eql(obj, flag(this, 'object')), 'expected #{this} to deeply equal #{exp}', 'expected #{this} to not deeply equal #{exp}', obj, this._obj, true);
      }

      Assertion.addMethod('eql', assertEql);
      Assertion.addMethod('eqls', assertEql);

      /**
       * ### .above(value)
       *
       * Asserts that the target is greater than `value`.
       *
       *     expect(10).to.be.above(5);
       *
       * Can also be used in conjunction with `length` to
       * assert a minimum length. The benefit being a
       * more informative error message than if the length
       * was supplied directly.
       *
       *     expect('foo').to.have.length.above(2);
       *     expect([ 1, 2, 3 ]).to.have.length.above(2);
       *
       * @name above
       * @alias gt
       * @alias greaterThan
       * @param {Number} value
       * @param {String} message _optional_
       * @api public
       */

      function assertAbove(n, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        if (flag(this, 'doLength')) {
          new Assertion(obj, msg).to.have.property('length');
          var len = obj.length;
          this.assert(len > n, 'expected #{this} to have a length above #{exp} but got #{act}', 'expected #{this} to not have a length above #{exp}', n, len);
        } else {
          this.assert(obj > n, 'expected #{this} to be above ' + n, 'expected #{this} to be at most ' + n);
        }
      }

      Assertion.addMethod('above', assertAbove);
      Assertion.addMethod('gt', assertAbove);
      Assertion.addMethod('greaterThan', assertAbove);

      /**
       * ### .least(value)
       *
       * Asserts that the target is greater than or equal to `value`.
       *
       *     expect(10).to.be.at.least(10);
       *
       * Can also be used in conjunction with `length` to
       * assert a minimum length. The benefit being a
       * more informative error message than if the length
       * was supplied directly.
       *
       *     expect('foo').to.have.length.of.at.least(2);
       *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
       *
       * @name least
       * @alias gte
       * @param {Number} value
       * @param {String} message _optional_
       * @api public
       */

      function assertLeast(n, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        if (flag(this, 'doLength')) {
          new Assertion(obj, msg).to.have.property('length');
          var len = obj.length;
          this.assert(len >= n, 'expected #{this} to have a length at least #{exp} but got #{act}', 'expected #{this} to have a length below #{exp}', n, len);
        } else {
          this.assert(obj >= n, 'expected #{this} to be at least ' + n, 'expected #{this} to be below ' + n);
        }
      }

      Assertion.addMethod('least', assertLeast);
      Assertion.addMethod('gte', assertLeast);

      /**
       * ### .below(value)
       *
       * Asserts that the target is less than `value`.
       *
       *     expect(5).to.be.below(10);
       *
       * Can also be used in conjunction with `length` to
       * assert a maximum length. The benefit being a
       * more informative error message than if the length
       * was supplied directly.
       *
       *     expect('foo').to.have.length.below(4);
       *     expect([ 1, 2, 3 ]).to.have.length.below(4);
       *
       * @name below
       * @alias lt
       * @alias lessThan
       * @param {Number} value
       * @param {String} message _optional_
       * @api public
       */

      function assertBelow(n, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        if (flag(this, 'doLength')) {
          new Assertion(obj, msg).to.have.property('length');
          var len = obj.length;
          this.assert(len < n, 'expected #{this} to have a length below #{exp} but got #{act}', 'expected #{this} to not have a length below #{exp}', n, len);
        } else {
          this.assert(obj < n, 'expected #{this} to be below ' + n, 'expected #{this} to be at least ' + n);
        }
      }

      Assertion.addMethod('below', assertBelow);
      Assertion.addMethod('lt', assertBelow);
      Assertion.addMethod('lessThan', assertBelow);

      /**
       * ### .most(value)
       *
       * Asserts that the target is less than or equal to `value`.
       *
       *     expect(5).to.be.at.most(5);
       *
       * Can also be used in conjunction with `length` to
       * assert a maximum length. The benefit being a
       * more informative error message than if the length
       * was supplied directly.
       *
       *     expect('foo').to.have.length.of.at.most(4);
       *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
       *
       * @name most
       * @alias lte
       * @param {Number} value
       * @param {String} message _optional_
       * @api public
       */

      function assertMost(n, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        if (flag(this, 'doLength')) {
          new Assertion(obj, msg).to.have.property('length');
          var len = obj.length;
          this.assert(len <= n, 'expected #{this} to have a length at most #{exp} but got #{act}', 'expected #{this} to have a length above #{exp}', n, len);
        } else {
          this.assert(obj <= n, 'expected #{this} to be at most ' + n, 'expected #{this} to be above ' + n);
        }
      }

      Assertion.addMethod('most', assertMost);
      Assertion.addMethod('lte', assertMost);

      /**
       * ### .within(start, finish)
       *
       * Asserts that the target is within a range.
       *
       *     expect(7).to.be.within(5,10);
       *
       * Can also be used in conjunction with `length` to
       * assert a length range. The benefit being a
       * more informative error message than if the length
       * was supplied directly.
       *
       *     expect('foo').to.have.length.within(2,4);
       *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
       *
       * @name within
       * @param {Number} start lowerbound inclusive
       * @param {Number} finish upperbound inclusive
       * @param {String} message _optional_
       * @api public
       */

      Assertion.addMethod('within', function (start, finish, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object'),
            range = start + '..' + finish;
        if (flag(this, 'doLength')) {
          new Assertion(obj, msg).to.have.property('length');
          var len = obj.length;
          this.assert(len >= start && len <= finish, 'expected #{this} to have a length within ' + range, 'expected #{this} to not have a length within ' + range);
        } else {
          this.assert(obj >= start && obj <= finish, 'expected #{this} to be within ' + range, 'expected #{this} to not be within ' + range);
        }
      });

      /**
       * ### .instanceof(constructor)
       *
       * Asserts that the target is an instance of `constructor`.
       *
       *     var Tea = function (name) { this.name = name; }
       *       , Chai = new Tea('chai');
       *
       *     expect(Chai).to.be.an.instanceof(Tea);
       *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
       *
       * @name instanceof
       * @param {Constructor} constructor
       * @param {String} message _optional_
       * @alias instanceOf
       * @api public
       */

      function assertInstanceOf(constructor, msg) {
        if (msg) flag(this, 'message', msg);
        var name = _.getName(constructor);
        this.assert(flag(this, 'object') instanceof constructor, 'expected #{this} to be an instance of ' + name, 'expected #{this} to not be an instance of ' + name);
      };

      Assertion.addMethod('instanceof', assertInstanceOf);
      Assertion.addMethod('instanceOf', assertInstanceOf);

      /**
       * ### .property(name, [value])
       *
       * Asserts that the target has a property `name`, optionally asserting that
       * the value of that property is strictly equal to  `value`.
       * If the `deep` flag is set, you can use dot- and bracket-notation for deep
       * references into objects and arrays.
       *
       *     // simple referencing
       *     var obj = { foo: 'bar' };
       *     expect(obj).to.have.property('foo');
       *     expect(obj).to.have.property('foo', 'bar');
       *
       *     // deep referencing
       *     var deepObj = {
       *         green: { tea: 'matcha' }
       *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
       *     };
       *
       *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
       *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
       *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
       *
       * You can also use an array as the starting point of a `deep.property`
       * assertion, or traverse nested arrays.
       *
       *     var arr = [
       *         [ 'chai', 'matcha', 'konacha' ]
       *       , [ { tea: 'chai' }
       *         , { tea: 'matcha' }
       *         , { tea: 'konacha' } ]
       *     ];
       *
       *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
       *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
       *
       * Furthermore, `property` changes the subject of the assertion
       * to be the value of that property from the original object. This
       * permits for further chainable assertions on that property.
       *
       *     expect(obj).to.have.property('foo')
       *       .that.is.a('string');
       *     expect(deepObj).to.have.property('green')
       *       .that.is.an('object')
       *       .that.deep.equals({ tea: 'matcha' });
       *     expect(deepObj).to.have.property('teas')
       *       .that.is.an('array')
       *       .with.deep.property('[2]')
       *         .that.deep.equals({ tea: 'konacha' });
       *
       * Note that dots and bracket in `name` must be backslash-escaped when
       * the `deep` flag is set, while they must NOT be escaped when the `deep`
       * flag is not set.
       *
       *     // simple referencing
       *     var css = { '.link[target]': 42 };
       *     expect(css).to.have.property('.link[target]', 42);
       *
       *     // deep referencing
       *     var deepCss = { '.link': { '[target]': 42 }};
       *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
       *
       * @name property
       * @alias deep.property
       * @param {String} name
       * @param {Mixed} value (optional)
       * @param {String} message _optional_
       * @returns value of property for chaining
       * @api public
       */

      Assertion.addMethod('property', function (name, val, msg) {
        if (msg) flag(this, 'message', msg);

        var isDeep = !!flag(this, 'deep'),
            descriptor = isDeep ? 'deep property ' : 'property ',
            negate = flag(this, 'negate'),
            obj = flag(this, 'object'),
            pathInfo = isDeep ? _.getPathInfo(name, obj) : null,
            hasProperty = isDeep ? pathInfo.exists : _.hasProperty(name, obj),
            value = isDeep ? pathInfo.value : obj[name];

        if (negate && arguments.length > 1) {
          if (undefined === value) {
            msg = msg != null ? msg + ': ' : '';
            throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
          }
        } else {
          this.assert(hasProperty, 'expected #{this} to have a ' + descriptor + _.inspect(name), 'expected #{this} to not have ' + descriptor + _.inspect(name));
        }

        if (arguments.length > 1) {
          this.assert(val === value, 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}', 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}', val, value);
        }

        flag(this, 'object', value);
      });

      /**
       * ### .ownProperty(name)
       *
       * Asserts that the target has an own property `name`.
       *
       *     expect('test').to.have.ownProperty('length');
       *
       * @name ownProperty
       * @alias haveOwnProperty
       * @param {String} name
       * @param {String} message _optional_
       * @api public
       */

      function assertOwnProperty(name, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        this.assert(obj.hasOwnProperty(name), 'expected #{this} to have own property ' + _.inspect(name), 'expected #{this} to not have own property ' + _.inspect(name));
      }

      Assertion.addMethod('ownProperty', assertOwnProperty);
      Assertion.addMethod('haveOwnProperty', assertOwnProperty);

      /**
       * ### .ownPropertyDescriptor(name[, descriptor[, message]])
       *
       * Asserts that the target has an own property descriptor `name`, that optionally matches `descriptor`.
       *
       *     expect('test').to.have.ownPropertyDescriptor('length');
       *     expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
       *     expect('test').not.to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
       *     expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
       *     expect('test').ownPropertyDescriptor('length').to.have.keys('value');
       *
       * @name ownPropertyDescriptor
       * @alias haveOwnPropertyDescriptor
       * @param {String} name
       * @param {Object} descriptor _optional_
       * @param {String} message _optional_
       * @api public
       */

      function assertOwnPropertyDescriptor(name, descriptor, msg) {
        if (typeof descriptor === 'string') {
          msg = descriptor;
          descriptor = null;
        }
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
        if (actualDescriptor && descriptor) {
          this.assert(_.eql(descriptor, actualDescriptor), 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor), 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor), descriptor, actualDescriptor, true);
        } else {
          this.assert(actualDescriptor, 'expected #{this} to have an own property descriptor for ' + _.inspect(name), 'expected #{this} to not have an own property descriptor for ' + _.inspect(name));
        }
        flag(this, 'object', actualDescriptor);
      }

      Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
      Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);

      /**
       * ### .length
       *
       * Sets the `doLength` flag later used as a chain precursor to a value
       * comparison for the `length` property.
       *
       *     expect('foo').to.have.length.above(2);
       *     expect([ 1, 2, 3 ]).to.have.length.above(2);
       *     expect('foo').to.have.length.below(4);
       *     expect([ 1, 2, 3 ]).to.have.length.below(4);
       *     expect('foo').to.have.length.within(2,4);
       *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
       *
       * *Deprecation notice:* Using `length` as an assertion will be deprecated
       * in version 2.4.0 and removed in 3.0.0. Code using the old style of
       * asserting for `length` property value using `length(value)` should be
       * switched to use `lengthOf(value)` instead.
       *
       * @name length
       * @api public
       */

      /**
       * ### .lengthOf(value[, message])
       *
       * Asserts that the target's `length` property has
       * the expected value.
       *
       *     expect([ 1, 2, 3]).to.have.lengthOf(3);
       *     expect('foobar').to.have.lengthOf(6);
       *
       * @name lengthOf
       * @param {Number} length
       * @param {String} message _optional_
       * @api public
       */

      function assertLengthChain() {
        flag(this, 'doLength', true);
      }

      function assertLength(n, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        new Assertion(obj, msg).to.have.property('length');
        var len = obj.length;

        this.assert(len == n, 'expected #{this} to have a length of #{exp} but got #{act}', 'expected #{this} to not have a length of #{act}', n, len);
      }

      Assertion.addChainableMethod('length', assertLength, assertLengthChain);
      Assertion.addMethod('lengthOf', assertLength);

      /**
       * ### .match(regexp)
       *
       * Asserts that the target matches a regular expression.
       *
       *     expect('foobar').to.match(/^foo/);
       *
       * @name match
       * @alias matches
       * @param {RegExp} RegularExpression
       * @param {String} message _optional_
       * @api public
       */
      function assertMatch(re, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        this.assert(re.exec(obj), 'expected #{this} to match ' + re, 'expected #{this} not to match ' + re);
      }

      Assertion.addMethod('match', assertMatch);
      Assertion.addMethod('matches', assertMatch);

      /**
       * ### .string(string)
       *
       * Asserts that the string target contains another string.
       *
       *     expect('foobar').to.have.string('bar');
       *
       * @name string
       * @param {String} string
       * @param {String} message _optional_
       * @api public
       */

      Assertion.addMethod('string', function (str, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        new Assertion(obj, msg).is.a('string');

        this.assert(~obj.indexOf(str), 'expected #{this} to contain ' + _.inspect(str), 'expected #{this} to not contain ' + _.inspect(str));
      });

      /**
       * ### .keys(key1, [key2], [...])
       *
       * Asserts that the target contains any or all of the passed-in keys.
       * Use in combination with `any`, `all`, `contains`, or `have` will affect
       * what will pass.
       *
       * When used in conjunction with `any`, at least one key that is passed
       * in must exist in the target object. This is regardless whether or not
       * the `have` or `contain` qualifiers are used. Note, either `any` or `all`
       * should be used in the assertion. If neither are used, the assertion is
       * defaulted to `all`.
       *
       * When both `all` and `contain` are used, the target object must have at
       * least all of the passed-in keys but may have more keys not listed.
       *
       * When both `all` and `have` are used, the target object must both contain
       * all of the passed-in keys AND the number of keys in the target object must
       * match the number of keys passed in (in other words, a target object must
       * have all and only all of the passed-in keys).
       *
       *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
       *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');
       *     expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');
       *     expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);
       *     expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});
       *     expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
       *     expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo': 7});
       *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);
       *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys({'bar': 6});
       *
       *
       * @name keys
       * @alias key
       * @param {...String|Array|Object} keys
       * @api public
       */

      function assertKeys(keys) {
        var obj = flag(this, 'object'),
            str,
            ok = true,
            mixedArgsMsg = 'keys must be given single argument of Array|Object|String, or multiple String arguments';

        switch (_.type(keys)) {
          case "array":
            if (arguments.length > 1) throw new Error(mixedArgsMsg);
            break;
          case "object":
            if (arguments.length > 1) throw new Error(mixedArgsMsg);
            keys = Object.keys(keys);
            break;
          default:
            keys = Array.prototype.slice.call(arguments);
        }

        if (!keys.length) throw new Error('keys required');

        var actual = Object.keys(obj),
            expected = keys,
            len = keys.length,
            any = flag(this, 'any'),
            all = flag(this, 'all');

        if (!any && !all) {
          all = true;
        }

        // Has any
        if (any) {
          var intersection = expected.filter(function (key) {
            return ~actual.indexOf(key);
          });
          ok = intersection.length > 0;
        }

        // Has all
        if (all) {
          ok = keys.every(function (key) {
            return ~actual.indexOf(key);
          });
          if (!flag(this, 'negate') && !flag(this, 'contains')) {
            ok = ok && keys.length == actual.length;
          }
        }

        // Key string
        if (len > 1) {
          keys = keys.map(function (key) {
            return _.inspect(key);
          });
          var last = keys.pop();
          if (all) {
            str = keys.join(', ') + ', and ' + last;
          }
          if (any) {
            str = keys.join(', ') + ', or ' + last;
          }
        } else {
          str = _.inspect(keys[0]);
        }

        // Form
        str = (len > 1 ? 'keys ' : 'key ') + str;

        // Have / include
        str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

        // Assertion
        this.assert(ok, 'expected #{this} to ' + str, 'expected #{this} to not ' + str, expected.slice(0).sort(), actual.sort(), true);
      }

      Assertion.addMethod('keys', assertKeys);
      Assertion.addMethod('key', assertKeys);

      /**
       * ### .throw(constructor)
       *
       * Asserts that the function target will throw a specific error, or specific type of error
       * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
       * for the error's message.
       *
       *     var err = new ReferenceError('This is a bad function.');
       *     var fn = function () { throw err; }
       *     expect(fn).to.throw(ReferenceError);
       *     expect(fn).to.throw(Error);
       *     expect(fn).to.throw(/bad function/);
       *     expect(fn).to.not.throw('good function');
       *     expect(fn).to.throw(ReferenceError, /bad function/);
       *     expect(fn).to.throw(err);
       *
       * Please note that when a throw expectation is negated, it will check each
       * parameter independently, starting with error constructor type. The appropriate way
       * to check for the existence of a type of error but for a message that does not match
       * is to use `and`.
       *
       *     expect(fn).to.throw(ReferenceError)
       *        .and.not.throw(/good function/);
       *
       * @name throw
       * @alias throws
       * @alias Throw
       * @param {ErrorConstructor} constructor
       * @param {String|RegExp} expected error message
       * @param {String} message _optional_
       * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
       * @returns error for chaining (null if no error)
       * @api public
       */

      function assertThrows(constructor, errMsg, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        new Assertion(obj, msg).is.a('function');

        var thrown = false,
            desiredError = null,
            name = null,
            thrownError = null;

        if (arguments.length === 0) {
          errMsg = null;
          constructor = null;
        } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
          errMsg = constructor;
          constructor = null;
        } else if (constructor && constructor instanceof Error) {
          desiredError = constructor;
          constructor = null;
          errMsg = null;
        } else if (typeof constructor === 'function') {
          name = constructor.prototype.name;
          if (!name || name === 'Error' && constructor !== Error) {
            name = constructor.name || new constructor().name;
          }
        } else {
          constructor = null;
        }

        try {
          obj();
        } catch (err) {
          // first, check desired error
          if (desiredError) {
            this.assert(err === desiredError, 'expected #{this} to throw #{exp} but #{act} was thrown', 'expected #{this} to not throw #{exp}', desiredError instanceof Error ? desiredError.toString() : desiredError, err instanceof Error ? err.toString() : err);

            flag(this, 'object', err);
            return this;
          }

          // next, check constructor
          if (constructor) {
            this.assert(err instanceof constructor, 'expected #{this} to throw #{exp} but #{act} was thrown', 'expected #{this} to not throw #{exp} but #{act} was thrown', name, err instanceof Error ? err.toString() : err);

            if (!errMsg) {
              flag(this, 'object', err);
              return this;
            }
          }

          // next, check message
          var message = 'error' === _.type(err) && "message" in err ? err.message : '' + err;

          if (message != null && errMsg && errMsg instanceof RegExp) {
            this.assert(errMsg.exec(message), 'expected #{this} to throw error matching #{exp} but got #{act}', 'expected #{this} to throw error not matching #{exp}', errMsg, message);

            flag(this, 'object', err);
            return this;
          } else if (message != null && errMsg && 'string' === typeof errMsg) {
            this.assert(~message.indexOf(errMsg), 'expected #{this} to throw error including #{exp} but got #{act}', 'expected #{this} to throw error not including #{act}', errMsg, message);

            flag(this, 'object', err);
            return this;
          } else {
            thrown = true;
            thrownError = err;
          }
        }

        var actuallyGot = '',
            expectedThrown = name !== null ? name : desiredError ? '#{exp}' //_.inspect(desiredError)
        : 'an error';

        if (thrown) {
          actuallyGot = ' but #{act} was thrown';
        }

        this.assert(thrown === true, 'expected #{this} to throw ' + expectedThrown + actuallyGot, 'expected #{this} to not throw ' + expectedThrown + actuallyGot, desiredError instanceof Error ? desiredError.toString() : desiredError, thrownError instanceof Error ? thrownError.toString() : thrownError);

        flag(this, 'object', thrownError);
      };

      Assertion.addMethod('throw', assertThrows);
      Assertion.addMethod('throws', assertThrows);
      Assertion.addMethod('Throw', assertThrows);

      /**
       * ### .respondTo(method)
       *
       * Asserts that the object or class target will respond to a method.
       *
       *     Klass.prototype.bar = function(){};
       *     expect(Klass).to.respondTo('bar');
       *     expect(obj).to.respondTo('bar');
       *
       * To check if a constructor will respond to a static function,
       * set the `itself` flag.
       *
       *     Klass.baz = function(){};
       *     expect(Klass).itself.to.respondTo('baz');
       *
       * @name respondTo
       * @alias respondsTo
       * @param {String} method
       * @param {String} message _optional_
       * @api public
       */

      function respondTo(method, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object'),
            itself = flag(this, 'itself'),
            context = 'function' === _.type(obj) && !itself ? obj.prototype[method] : obj[method];

        this.assert('function' === typeof context, 'expected #{this} to respond to ' + _.inspect(method), 'expected #{this} to not respond to ' + _.inspect(method));
      }

      Assertion.addMethod('respondTo', respondTo);
      Assertion.addMethod('respondsTo', respondTo);

      /**
       * ### .itself
       *
       * Sets the `itself` flag, later used by the `respondTo` assertion.
       *
       *     function Foo() {}
       *     Foo.bar = function() {}
       *     Foo.prototype.baz = function() {}
       *
       *     expect(Foo).itself.to.respondTo('bar');
       *     expect(Foo).itself.not.to.respondTo('baz');
       *
       * @name itself
       * @api public
       */

      Assertion.addProperty('itself', function () {
        flag(this, 'itself', true);
      });

      /**
       * ### .satisfy(method)
       *
       * Asserts that the target passes a given truth test.
       *
       *     expect(1).to.satisfy(function(num) { return num > 0; });
       *
       * @name satisfy
       * @alias satisfies
       * @param {Function} matcher
       * @param {String} message _optional_
       * @api public
       */

      function satisfy(matcher, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');
        var result = matcher(obj);
        this.assert(result, 'expected #{this} to satisfy ' + _.objDisplay(matcher), 'expected #{this} to not satisfy' + _.objDisplay(matcher), this.negate ? false : true, result);
      }

      Assertion.addMethod('satisfy', satisfy);
      Assertion.addMethod('satisfies', satisfy);

      /**
       * ### .closeTo(expected, delta)
       *
       * Asserts that the target is equal `expected`, to within a +/- `delta` range.
       *
       *     expect(1.5).to.be.closeTo(1, 0.5);
       *
       * @name closeTo
       * @alias approximately
       * @param {Number} expected
       * @param {Number} delta
       * @param {String} message _optional_
       * @api public
       */

      function closeTo(expected, delta, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');

        new Assertion(obj, msg).is.a('number');
        if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
          throw new Error('the arguments to closeTo or approximately must be numbers');
        }

        this.assert(Math.abs(obj - expected) <= delta, 'expected #{this} to be close to ' + expected + ' +/- ' + delta, 'expected #{this} not to be close to ' + expected + ' +/- ' + delta);
      }

      Assertion.addMethod('closeTo', closeTo);
      Assertion.addMethod('approximately', closeTo);

      function isSubsetOf(subset, superset, cmp) {
        return subset.every(function (elem) {
          if (!cmp) return superset.indexOf(elem) !== -1;

          return superset.some(function (elem2) {
            return cmp(elem, elem2);
          });
        });
      }

      /**
       * ### .members(set)
       *
       * Asserts that the target is a superset of `set`,
       * or that the target and `set` have the same strictly-equal (===) members.
       * Alternately, if the `deep` flag is set, set members are compared for deep
       * equality.
       *
       *     expect([1, 2, 3]).to.include.members([3, 2]);
       *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
       *
       *     expect([4, 2]).to.have.members([2, 4]);
       *     expect([5, 2]).to.not.have.members([5, 2, 1]);
       *
       *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
       *
       * @name members
       * @param {Array} set
       * @param {String} message _optional_
       * @api public
       */

      Assertion.addMethod('members', function (subset, msg) {
        if (msg) flag(this, 'message', msg);
        var obj = flag(this, 'object');

        new Assertion(obj).to.be.an('array');
        new Assertion(subset).to.be.an('array');

        var cmp = flag(this, 'deep') ? _.eql : undefined;

        if (flag(this, 'contains')) {
          return this.assert(isSubsetOf(subset, obj, cmp), 'expected #{this} to be a superset of #{act}', 'expected #{this} to not be a superset of #{act}', obj, subset);
        }

        this.assert(isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp), 'expected #{this} to have the same members as #{act}', 'expected #{this} to not have the same members as #{act}', obj, subset);
      });

      /**
       * ### .oneOf(list)
       *
       * Assert that a value appears somewhere in the top level of array `list`.
       *
       *     expect('a').to.be.oneOf(['a', 'b', 'c']);
       *     expect(9).to.not.be.oneOf(['z']);
       *     expect([3]).to.not.be.oneOf([1, 2, [3]]);
       *
       *     var three = [3];
       *     // for object-types, contents are not compared
       *     expect(three).to.not.be.oneOf([1, 2, [3]]);
       *     // comparing references works
       *     expect(three).to.be.oneOf([1, 2, three]);
       *
       * @name oneOf
       * @param {Array<*>} list
       * @param {String} message _optional_
       * @api public
       */

      function oneOf(list, msg) {
        if (msg) flag(this, 'message', msg);
        var expected = flag(this, 'object');
        new Assertion(list).to.be.an('array');

        this.assert(list.indexOf(expected) > -1, 'expected #{this} to be one of #{exp}', 'expected #{this} to not be one of #{exp}', list, expected);
      }

      Assertion.addMethod('oneOf', oneOf);

      /**
       * ### .change(function)
       *
       * Asserts that a function changes an object property
       *
       *     var obj = { val: 10 };
       *     var fn = function() { obj.val += 3 };
       *     var noChangeFn = function() { return 'foo' + 'bar'; }
       *     expect(fn).to.change(obj, 'val');
       *     expect(noChangFn).to.not.change(obj, 'val')
       *
       * @name change
       * @alias changes
       * @alias Change
       * @param {String} object
       * @param {String} property name
       * @param {String} message _optional_
       * @api public
       */

      function assertChanges(object, prop, msg) {
        if (msg) flag(this, 'message', msg);
        var fn = flag(this, 'object');
        new Assertion(object, msg).to.have.property(prop);
        new Assertion(fn).is.a('function');

        var initial = object[prop];
        fn();

        this.assert(initial !== object[prop], 'expected .' + prop + ' to change', 'expected .' + prop + ' to not change');
      }

      Assertion.addChainableMethod('change', assertChanges);
      Assertion.addChainableMethod('changes', assertChanges);

      /**
       * ### .increase(function)
       *
       * Asserts that a function increases an object property
       *
       *     var obj = { val: 10 };
       *     var fn = function() { obj.val = 15 };
       *     expect(fn).to.increase(obj, 'val');
       *
       * @name increase
       * @alias increases
       * @alias Increase
       * @param {String} object
       * @param {String} property name
       * @param {String} message _optional_
       * @api public
       */

      function assertIncreases(object, prop, msg) {
        if (msg) flag(this, 'message', msg);
        var fn = flag(this, 'object');
        new Assertion(object, msg).to.have.property(prop);
        new Assertion(fn).is.a('function');

        var initial = object[prop];
        fn();

        this.assert(object[prop] - initial > 0, 'expected .' + prop + ' to increase', 'expected .' + prop + ' to not increase');
      }

      Assertion.addChainableMethod('increase', assertIncreases);
      Assertion.addChainableMethod('increases', assertIncreases);

      /**
       * ### .decrease(function)
       *
       * Asserts that a function decreases an object property
       *
       *     var obj = { val: 10 };
       *     var fn = function() { obj.val = 5 };
       *     expect(fn).to.decrease(obj, 'val');
       *
       * @name decrease
       * @alias decreases
       * @alias Decrease
       * @param {String} object
       * @param {String} property name
       * @param {String} message _optional_
       * @api public
       */

      function assertDecreases(object, prop, msg) {
        if (msg) flag(this, 'message', msg);
        var fn = flag(this, 'object');
        new Assertion(object, msg).to.have.property(prop);
        new Assertion(fn).is.a('function');

        var initial = object[prop];
        fn();

        this.assert(object[prop] - initial < 0, 'expected .' + prop + ' to decrease', 'expected .' + prop + ' to not decrease');
      }

      Assertion.addChainableMethod('decrease', assertDecreases);
      Assertion.addChainableMethod('decreases', assertDecreases);

      /**
       * ### .extensible
       *
       * Asserts that the target is extensible (can have new properties added to
       * it).
       *
       *     var nonExtensibleObject = Object.preventExtensions({});
       *     var sealedObject = Object.seal({});
       *     var frozenObject = Object.freeze({});
       *
       *     expect({}).to.be.extensible;
       *     expect(nonExtensibleObject).to.not.be.extensible;
       *     expect(sealedObject).to.not.be.extensible;
       *     expect(frozenObject).to.not.be.extensible;
       *
       * @name extensible
       * @api public
       */

      Assertion.addProperty('extensible', function () {
        var obj = flag(this, 'object');

        // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
        // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
        // The following provides ES6 behavior when a TypeError is thrown under ES5.

        var isExtensible;

        try {
          isExtensible = Object.isExtensible(obj);
        } catch (err) {
          if (err instanceof TypeError) isExtensible = false;else throw err;
        }

        this.assert(isExtensible, 'expected #{this} to be extensible', 'expected #{this} to not be extensible');
      });

      /**
       * ### .sealed
       *
       * Asserts that the target is sealed (cannot have new properties added to it
       * and its existing properties cannot be removed).
       *
       *     var sealedObject = Object.seal({});
       *     var frozenObject = Object.freeze({});
       *
       *     expect(sealedObject).to.be.sealed;
       *     expect(frozenObject).to.be.sealed;
       *     expect({}).to.not.be.sealed;
       *
       * @name sealed
       * @api public
       */

      Assertion.addProperty('sealed', function () {
        var obj = flag(this, 'object');

        // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
        // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
        // The following provides ES6 behavior when a TypeError is thrown under ES5.

        var isSealed;

        try {
          isSealed = Object.isSealed(obj);
        } catch (err) {
          if (err instanceof TypeError) isSealed = true;else throw err;
        }

        this.assert(isSealed, 'expected #{this} to be sealed', 'expected #{this} to not be sealed');
      });

      /**
       * ### .frozen
       *
       * Asserts that the target is frozen (cannot have new properties added to it
       * and its existing properties cannot be modified).
       *
       *     var frozenObject = Object.freeze({});
       *
       *     expect(frozenObject).to.be.frozen;
       *     expect({}).to.not.be.frozen;
       *
       * @name frozen
       * @api public
       */

      Assertion.addProperty('frozen', function () {
        var obj = flag(this, 'object');

        // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
        // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
        // The following provides ES6 behavior when a TypeError is thrown under ES5.

        var isFrozen;

        try {
          isFrozen = Object.isFrozen(obj);
        } catch (err) {
          if (err instanceof TypeError) isFrozen = true;else throw err;
        }

        this.assert(isFrozen, 'expected #{this} to be frozen', 'expected #{this} to not be frozen');
      });
    };
    });

    var require$$3 = (assertions && typeof assertions === 'object' && 'default' in assertions ? assertions['default'] : assertions);

    var config$1 = __commonjs(function (module) {
    module.exports = {

      /**
       * ### config.includeStack
       *
       * User configurable property, influences whether stack trace
       * is included in Assertion error message. Default of false
       * suppresses stack trace in the error message.
       *
       *     chai.config.includeStack = true;  // enable stack on error
       *
       * @param {Boolean}
       * @api public
       */

      includeStack: false,

      /**
       * ### config.showDiff
       *
       * User configurable property, influences whether or not
       * the `showDiff` flag should be included in the thrown
       * AssertionErrors. `false` will always be `false`; `true`
       * will be true when the assertion has requested a diff
       * be shown.
       *
       * @param {Boolean}
       * @api public
       */

      showDiff: true,

      /**
       * ### config.truncateThreshold
       *
       * User configurable property, sets length threshold for actual and
       * expected values in assertion errors. If this threshold is exceeded, for
       * example for large data structures, the value is replaced with something
       * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
       *
       * Set it to zero if you want to disable truncating altogether.
       *
       * This is especially userful when doing assertions on arrays: having this
       * set to a reasonable large value makes the failure messages readily
       * inspectable.
       *
       *     chai.config.truncateThreshold = 0;  // disable truncating
       *
       * @param {Number}
       * @api public
       */

      truncateThreshold: 40

    };
    });

    var require$$0$2 = (config$1 && typeof config$1 === 'object' && 'default' in config$1 ? config$1['default'] : config$1);

    var assertion = __commonjs(function (module) {
    /*!
     * chai
     * http://chaijs.com
     * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    var config = require$$0$2;

    module.exports = function (_chai, util) {
      /*!
       * Module dependencies.
       */

      var AssertionError = _chai.AssertionError,
          flag = util.flag;

      /*!
       * Module export.
       */

      _chai.Assertion = Assertion;

      /*!
       * Assertion Constructor
       *
       * Creates object for chaining.
       *
       * @api private
       */

      function Assertion(obj, msg, stack) {
        flag(this, 'ssfi', stack || arguments.callee);
        flag(this, 'object', obj);
        flag(this, 'message', msg);
      }

      Object.defineProperty(Assertion, 'includeStack', {
        get: function get() {
          console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
          return config.includeStack;
        },
        set: function set(value) {
          console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
          config.includeStack = value;
        }
      });

      Object.defineProperty(Assertion, 'showDiff', {
        get: function get() {
          console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
          return config.showDiff;
        },
        set: function set(value) {
          console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
          config.showDiff = value;
        }
      });

      Assertion.addProperty = function (name, fn) {
        util.addProperty(this.prototype, name, fn);
      };

      Assertion.addMethod = function (name, fn) {
        util.addMethod(this.prototype, name, fn);
      };

      Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
        util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
      };

      Assertion.overwriteProperty = function (name, fn) {
        util.overwriteProperty(this.prototype, name, fn);
      };

      Assertion.overwriteMethod = function (name, fn) {
        util.overwriteMethod(this.prototype, name, fn);
      };

      Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
        util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
      };

      /**
       * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
       *
       * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
       *
       * @name assert
       * @param {Philosophical} expression to be tested
       * @param {String|Function} message or function that returns message to display if expression fails
       * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
       * @param {Mixed} expected value (remember to check for negation)
       * @param {Mixed} actual (optional) will default to `this.obj`
       * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
       * @api private
       */

      Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
        var ok = util.test(this, arguments);
        if (true !== showDiff) showDiff = false;
        if (true !== config.showDiff) showDiff = false;

        if (!ok) {
          var msg = util.getMessage(this, arguments),
              actual = util.getActual(this, arguments);
          throw new AssertionError(msg, {
            actual: actual,
            expected: expected,
            showDiff: showDiff
          }, config.includeStack ? this.assert : flag(this, 'ssfi'));
        }
      };

      /*!
       * ### ._obj
       *
       * Quick reference to stored `actual` value for plugin developers.
       *
       * @api private
       */

      Object.defineProperty(Assertion.prototype, '_obj', { get: function get() {
          return flag(this, 'object');
        },
        set: function set(val) {
          flag(this, 'object', val);
        }
      });
    };
    });

    var require$$4 = (assertion && typeof assertion === 'object' && 'default' in assertion ? assertion['default'] : assertion);

    var overwriteChainableMethod = __commonjs(function (module) {
    /*!
     * Chai - overwriteChainableMethod utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /**
     * ### overwriteChainableMethod (ctx, name, method, chainingBehavior)
     *
     * Overwites an already existing chainable method
     * and provides access to the previous function or
     * property.  Must return functions to be used for
     * name.
     *
     *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
     *       function (_super) {
     *       }
     *     , function (_super) {
     *       }
     *     );
     *
     * Can also be accessed directly from `chai.Assertion`.
     *
     *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
     *
     * Then can be used as any other assertion.
     *
     *     expect(myFoo).to.have.length(3);
     *     expect(myFoo).to.have.length.above(3);
     *
     * @param {Object} ctx object whose method / property is to be overwritten
     * @param {String} name of method / property to overwrite
     * @param {Function} method function that returns a function to be used for name
     * @param {Function} chainingBehavior function that returns a function to be used for property
     * @name overwriteChainableMethod
     * @api public
     */

    module.exports = function (ctx, name, method, chainingBehavior) {
      var chainableBehavior = ctx.__methods[name];

      var _chainingBehavior = chainableBehavior.chainingBehavior;
      chainableBehavior.chainingBehavior = function () {
        var result = chainingBehavior(_chainingBehavior).call(this);
        return result === undefined ? this : result;
      };

      var _method = chainableBehavior.method;
      chainableBehavior.method = function () {
        var result = method(_method).apply(this, arguments);
        return result === undefined ? this : result;
      };
    };
    });

    var require$$0$3 = (overwriteChainableMethod && typeof overwriteChainableMethod === 'object' && 'default' in overwriteChainableMethod ? overwriteChainableMethod['default'] : overwriteChainableMethod);

    var flag = __commonjs(function (module) {
    /*!
     * Chai - flag utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /**
     * ### flag(object, key, [value])
     *
     * Get or set a flag value on an object. If a
     * value is provided it will be set, else it will
     * return the currently set value or `undefined` if
     * the value is not set.
     *
     *     utils.flag(this, 'foo', 'bar'); // setter
     *     utils.flag(this, 'foo'); // getter, returns `bar`
     *
     * @param {Object} object constructed Assertion
     * @param {String} key
     * @param {Mixed} value (optional)
     * @name flag
     * @api private
     */

    module.exports = function (obj, key, value) {
      var flags = obj.__flags || (obj.__flags = Object.create(null));
      if (arguments.length === 3) {
        flags[key] = value;
      } else {
        return flags[key];
      }
    };
    });

    var require$$0$4 = (flag && typeof flag === 'object' && 'default' in flag ? flag['default'] : flag);

    var transferFlags = __commonjs(function (module) {
    /*!
     * Chai - transferFlags utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /**
     * ### transferFlags(assertion, object, includeAll = true)
     *
     * Transfer all the flags for `assertion` to `object`. If
     * `includeAll` is set to `false`, then the base Chai
     * assertion flags (namely `object`, `ssfi`, and `message`)
     * will not be transferred.
     *
     *
     *     var newAssertion = new Assertion();
     *     utils.transferFlags(assertion, newAssertion);
     *
     *     var anotherAsseriton = new Assertion(myObj);
     *     utils.transferFlags(assertion, anotherAssertion, false);
     *
     * @param {Assertion} assertion the assertion to transfer the flags from
     * @param {Object} object the object to transfer the flags to; usually a new assertion
     * @param {Boolean} includeAll
     * @name transferFlags
     * @api private
     */

    module.exports = function (assertion, object, includeAll) {
      var flags = assertion.__flags || (assertion.__flags = Object.create(null));

      if (!object.__flags) {
        object.__flags = Object.create(null);
      }

      includeAll = arguments.length === 3 ? includeAll : true;

      for (var flag in flags) {
        if (includeAll || flag !== 'object' && flag !== 'ssfi' && flag != 'message') {
          object.__flags[flag] = flags[flag];
        }
      }
    };
    });

    var require$$2$1 = (transferFlags && typeof transferFlags === 'object' && 'default' in transferFlags ? transferFlags['default'] : transferFlags);

    var addChainableMethod = __commonjs(function (module) {
    /*!
     * Chai - addChainingMethod utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /*!
     * Module dependencies
     */

    var transferFlags = require$$2$1;
    var flag = require$$0$4;
    var config = require$$0$2;

    /*!
     * Module variables
     */

    // Check whether `__proto__` is supported
    var hasProtoSupport = '__proto__' in Object;

    // Without `__proto__` support, this module will need to add properties to a function.
    // However, some Function.prototype methods cannot be overwritten,
    // and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
    var excludeNames = /^(?:length|name|arguments|caller)$/;

    // Cache `Function` properties
    var call = Function.prototype.call,
        apply = Function.prototype.apply;

    /**
     * ### addChainableMethod (ctx, name, method, chainingBehavior)
     *
     * Adds a method to an object, such that the method can also be chained.
     *
     *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
     *       var obj = utils.flag(this, 'object');
     *       new chai.Assertion(obj).to.be.equal(str);
     *     });
     *
     * Can also be accessed directly from `chai.Assertion`.
     *
     *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
     *
     * The result can then be used as both a method assertion, executing both `method` and
     * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
     *
     *     expect(fooStr).to.be.foo('bar');
     *     expect(fooStr).to.be.foo.equal('foo');
     *
     * @param {Object} ctx object to which the method is added
     * @param {String} name of method to add
     * @param {Function} method function to be used for `name`, when called
     * @param {Function} chainingBehavior function to be called every time the property is accessed
     * @name addChainableMethod
     * @api public
     */

    module.exports = function (ctx, name, method, chainingBehavior) {
      if (typeof chainingBehavior !== 'function') {
        chainingBehavior = function chainingBehavior() {};
      }

      var chainableBehavior = {
        method: method,
        chainingBehavior: chainingBehavior
      };

      // save the methods so we can overwrite them later, if we need to.
      if (!ctx.__methods) {
        ctx.__methods = {};
      }
      ctx.__methods[name] = chainableBehavior;

      Object.defineProperty(ctx, name, { get: function get() {
          chainableBehavior.chainingBehavior.call(this);

          var assert = function assert() {
            var old_ssfi = flag(this, 'ssfi');
            if (old_ssfi && config.includeStack === false) flag(this, 'ssfi', assert);
            var result = chainableBehavior.method.apply(this, arguments);
            return result === undefined ? this : result;
          };

          // Use `__proto__` if available
          if (hasProtoSupport) {
            // Inherit all properties from the object by replacing the `Function` prototype
            var prototype = assert.__proto__ = Object.create(this);
            // Restore the `call` and `apply` methods from `Function`
            prototype.call = call;
            prototype.apply = apply;
          }
          // Otherwise, redefine all properties (slow!)
          else {
              var asserterNames = Object.getOwnPropertyNames(ctx);
              asserterNames.forEach(function (asserterName) {
                if (!excludeNames.test(asserterName)) {
                  var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
                  Object.defineProperty(assert, asserterName, pd);
                }
              });
            }

          transferFlags(this, assert);
          return assert;
        },
        configurable: true
      });
    };
    });

    var require$$1$1 = (addChainableMethod && typeof addChainableMethod === 'object' && 'default' in addChainableMethod ? addChainableMethod['default'] : addChainableMethod);

    var overwriteMethod = __commonjs(function (module) {
    /*!
     * Chai - overwriteMethod utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /**
     * ### overwriteMethod (ctx, name, fn)
     *
     * Overwites an already existing method and provides
     * access to previous function. Must return function
     * to be used for name.
     *
     *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
     *       return function (str) {
     *         var obj = utils.flag(this, 'object');
     *         if (obj instanceof Foo) {
     *           new chai.Assertion(obj.value).to.equal(str);
     *         } else {
     *           _super.apply(this, arguments);
     *         }
     *       }
     *     });
     *
     * Can also be accessed directly from `chai.Assertion`.
     *
     *     chai.Assertion.overwriteMethod('foo', fn);
     *
     * Then can be used as any other assertion.
     *
     *     expect(myFoo).to.equal('bar');
     *
     * @param {Object} ctx object whose method is to be overwritten
     * @param {String} name of method to overwrite
     * @param {Function} method function that returns a function to be used for name
     * @name overwriteMethod
     * @api public
     */

    module.exports = function (ctx, name, method) {
      var _method = ctx[name],
          _super = function _super() {
        return this;
      };

      if (_method && 'function' === typeof _method) _super = _method;

      ctx[name] = function () {
        var result = method(_super).apply(this, arguments);
        return result === undefined ? this : result;
      };
    };
    });

    var require$$2$2 = (overwriteMethod && typeof overwriteMethod === 'object' && 'default' in overwriteMethod ? overwriteMethod['default'] : overwriteMethod);

    var overwriteProperty = __commonjs(function (module) {
    /*!
     * Chai - overwriteProperty utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /**
     * ### overwriteProperty (ctx, name, fn)
     *
     * Overwites an already existing property getter and provides
     * access to previous value. Must return function to use as getter.
     *
     *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
     *       return function () {
     *         var obj = utils.flag(this, 'object');
     *         if (obj instanceof Foo) {
     *           new chai.Assertion(obj.name).to.equal('bar');
     *         } else {
     *           _super.call(this);
     *         }
     *       }
     *     });
     *
     *
     * Can also be accessed directly from `chai.Assertion`.
     *
     *     chai.Assertion.overwriteProperty('foo', fn);
     *
     * Then can be used as any other assertion.
     *
     *     expect(myFoo).to.be.ok;
     *
     * @param {Object} ctx object whose property is to be overwritten
     * @param {String} name of property to overwrite
     * @param {Function} getter function that returns a getter function to be used for name
     * @name overwriteProperty
     * @api public
     */

    module.exports = function (ctx, name, getter) {
      var _get = Object.getOwnPropertyDescriptor(ctx, name),
          _super = function _super() {};

      if (_get && 'function' === typeof _get.get) _super = _get.get;

      Object.defineProperty(ctx, name, { get: function get() {
          var result = getter(_super).call(this);
          return result === undefined ? this : result;
        },
        configurable: true
      });
    };
    });

    var require$$3$1 = (overwriteProperty && typeof overwriteProperty === 'object' && 'default' in overwriteProperty ? overwriteProperty['default'] : overwriteProperty);

    var addMethod = __commonjs(function (module) {
    /*!
     * Chai - addMethod utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    var config = require$$0$2;

    /**
     * ### .addMethod (ctx, name, method)
     *
     * Adds a method to the prototype of an object.
     *
     *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
     *       var obj = utils.flag(this, 'object');
     *       new chai.Assertion(obj).to.be.equal(str);
     *     });
     *
     * Can also be accessed directly from `chai.Assertion`.
     *
     *     chai.Assertion.addMethod('foo', fn);
     *
     * Then can be used as any other assertion.
     *
     *     expect(fooStr).to.be.foo('bar');
     *
     * @param {Object} ctx object to which the method is added
     * @param {String} name of method to add
     * @param {Function} method function to be used for name
     * @name addMethod
     * @api public
     */
    var flag = require$$0$4;

    module.exports = function (ctx, name, method) {
      ctx[name] = function () {
        var old_ssfi = flag(this, 'ssfi');
        if (old_ssfi && config.includeStack === false) flag(this, 'ssfi', ctx[name]);
        var result = method.apply(this, arguments);
        return result === undefined ? this : result;
      };
    };
    });

    var require$$4$1 = (addMethod && typeof addMethod === 'object' && 'default' in addMethod ? addMethod['default'] : addMethod);

    var addProperty = __commonjs(function (module) {
    /*!
     * Chai - addProperty utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    var config = require$$0$2;
    var flag = require$$0$4;

    /**
     * ### addProperty (ctx, name, getter)
     *
     * Adds a property to the prototype of an object.
     *
     *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
     *       var obj = utils.flag(this, 'object');
     *       new chai.Assertion(obj).to.be.instanceof(Foo);
     *     });
     *
     * Can also be accessed directly from `chai.Assertion`.
     *
     *     chai.Assertion.addProperty('foo', fn);
     *
     * Then can be used as any other assertion.
     *
     *     expect(myFoo).to.be.foo;
     *
     * @param {Object} ctx object to which the property is added
     * @param {String} name of property to add
     * @param {Function} getter function to be used for name
     * @name addProperty
     * @api public
     */

    module.exports = function (ctx, name, getter) {
      Object.defineProperty(ctx, name, { get: function addProperty() {
          var old_ssfi = flag(this, 'ssfi');
          if (old_ssfi && config.includeStack === false) flag(this, 'ssfi', addProperty);

          var result = getter.call(this);
          return result === undefined ? this : result;
        },
        configurable: true
      });
    };
    });

    var require$$5 = (addProperty && typeof addProperty === 'object' && 'default' in addProperty ? addProperty['default'] : addProperty);

    var getName = __commonjs(function (module) {
    /*!
     * Chai - getName utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /**
     * # getName(func)
     *
     * Gets the name of a function, in a cross-browser way.
     *
     * @param {Function} a function (usually a constructor)
     */

    module.exports = function (func) {
      if (func.name) return func.name;

      var match = /^\s?function ([^(]*)\(/.exec(func);
      return match && match[1] ? match[1] : "";
    };
    });

    var require$$2$3 = (getName && typeof getName === 'object' && 'default' in getName ? getName['default'] : getName);

    var type = __commonjs(function (module) {
    /*!
     * type-detect
     * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /*!
     * Primary Exports
     */

    var exports = module.exports = getType;

    /**
     * ### typeOf (obj)
     *
     * Use several different techniques to determine
     * the type of object being tested.
     *
     *
     * @param {Mixed} object
     * @return {String} object type
     * @api public
     */
    var objectTypeRegexp = /^\[object (.*)\]$/;

    function getType(obj) {
      var type = Object.prototype.toString.call(obj).match(objectTypeRegexp)[1].toLowerCase();
      // Let "new String('')" return 'object'
      if (typeof Promise === 'function' && obj instanceof Promise) return 'promise';
      // PhantomJS has type "DOMWindow" for null
      if (obj === null) return 'null';
      // PhantomJS has type "DOMWindow" for undefined
      if (obj === undefined) return 'undefined';
      return type;
    }

    exports.Library = Library;

    /**
     * ### Library
     *
     * Create a repository for custom type detection.
     *
     * ```js
     * var lib = new type.Library;
     * ```
     *
     */

    function Library() {
      if (!(this instanceof Library)) return new Library();
      this.tests = {};
    }

    /**
     * #### .of (obj)
     *
     * Expose replacement `typeof` detection to the library.
     *
     * ```js
     * if ('string' === lib.of('hello world')) {
     *   // ...
     * }
     * ```
     *
     * @param {Mixed} object to test
     * @return {String} type
     */

    Library.prototype.of = getType;

    /**
     * #### .define (type, test)
     *
     * Add a test to for the `.test()` assertion.
     *
     * Can be defined as a regular expression:
     *
     * ```js
     * lib.define('int', /^[0-9]+$/);
     * ```
     *
     * ... or as a function:
     *
     * ```js
     * lib.define('bln', function (obj) {
     *   if ('boolean' === lib.of(obj)) return true;
     *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
     *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
     *   return !! ~blns.indexOf(obj);
     * });
     * ```
     *
     * @param {String} type
     * @param {RegExp|Function} test
     * @api public
     */

    Library.prototype.define = function (type, test) {
      if (arguments.length === 1) return this.tests[type];
      this.tests[type] = test;
      return this;
    };

    /**
     * #### .test (obj, test)
     *
     * Assert that an object is of type. Will first
     * check natives, and if that does not pass it will
     * use the user defined custom tests.
     *
     * ```js
     * assert(lib.test('1', 'int'));
     * assert(lib.test('yes', 'bln'));
     * ```
     *
     * @param {Mixed} object
     * @param {String} type
     * @return {Boolean} result
     * @api public
     */

    Library.prototype.test = function (obj, type) {
      if (type === getType(obj)) return true;
      var test = this.tests[type];

      if (test && 'regexp' === getType(test)) {
        return test.test(obj);
      } else if (test && 'function' === getType(test)) {
        return test(obj);
      } else {
        throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
      }
    };
    });

    var require$$0$7 = (type && typeof type === 'object' && 'default' in type ? type['default'] : type);

    var index$3 = __commonjs(function (module) {
    module.exports = require$$0$7;
    });

    var require$$0$6 = (index$3 && typeof index$3 === 'object' && 'default' in index$3 ? index$3['default'] : index$3);

    var hasProperty = __commonjs(function (module) {
    /*!
     * Chai - hasProperty utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    var type = require$$0$6;

    /**
     * ### .hasProperty(object, name)
     *
     * This allows checking whether an object has
     * named property or numeric array index.
     *
     * Basically does the same thing as the `in`
     * operator but works properly with natives
     * and null/undefined values.
     *
     *     var obj = {
     *         arr: ['a', 'b', 'c']
     *       , str: 'Hello'
     *     }
     *
     * The following would be the results.
     *
     *     hasProperty('str', obj);  // true
     *     hasProperty('constructor', obj);  // true
     *     hasProperty('bar', obj);  // false
     *     
     *     hasProperty('length', obj.str); // true
     *     hasProperty(1, obj.str);  // true
     *     hasProperty(5, obj.str);  // false
     *
     *     hasProperty('length', obj.arr);  // true
     *     hasProperty(2, obj.arr);  // true
     *     hasProperty(3, obj.arr);  // false
     *
     * @param {Objuect} object
     * @param {String|Number} name
     * @returns {Boolean} whether it exists
     * @name getPathInfo
     * @api public
     */

    var literals = {
      'number': Number,
      'string': String
    };

    module.exports = function hasProperty(name, obj) {
      var ot = type(obj);

      // Bad Object, obviously no props at all
      if (ot === 'null' || ot === 'undefined') return false;

      // The `in` operator does not work with certain literals
      // box these before the check
      if (literals[ot] && (typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) !== 'object') obj = new literals[ot](obj);

      return name in obj;
    };
    });

    var require$$0$5 = (hasProperty && typeof hasProperty === 'object' && 'default' in hasProperty ? hasProperty['default'] : hasProperty);

    var getPathInfo = __commonjs(function (module) {
    /*!
     * Chai - getPathInfo utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    var hasProperty = require$$0$5;

    /**
     * ### .getPathInfo(path, object)
     *
     * This allows the retrieval of property info in an
     * object given a string path.
     *
     * The path info consists of an object with the
     * following properties:
     *
     * * parent - The parent object of the property referenced by `path`
     * * name - The name of the final property, a number if it was an array indexer
     * * value - The value of the property, if it exists, otherwise `undefined`
     * * exists - Whether the property exists or not
     *
     * @param {String} path
     * @param {Object} object
     * @returns {Object} info
     * @name getPathInfo
     * @api public
     */

    module.exports = function getPathInfo(path, obj) {
      var parsed = parsePath(path),
          last = parsed[parsed.length - 1];

      var info = {
        parent: parsed.length > 1 ? _getPathValue(parsed, obj, parsed.length - 1) : obj,
        name: last.p || last.i,
        value: _getPathValue(parsed, obj)
      };
      info.exists = hasProperty(info.name, info.parent);

      return info;
    };

    /*!
     * ## parsePath(path)
     *
     * Helper function used to parse string object
     * paths. Use in conjunction with `_getPathValue`.
     *
     *      var parsed = parsePath('myobject.property.subprop');
     *
     * ### Paths:
     *
     * * Can be as near infinitely deep and nested
     * * Arrays are also valid using the formal `myobject.document[3].property`.
     * * Literal dots and brackets (not delimiter) must be backslash-escaped.
     *
     * @param {String} path
     * @returns {Object} parsed
     * @api private
     */

    function parsePath(path) {
      var str = path.replace(/([^\\])\[/g, '$1.['),
          parts = str.match(/(\\\.|[^.]+?)+/g);
      return parts.map(function (value) {
        var re = /^\[(\d+)\]$/,
            mArr = re.exec(value);
        if (mArr) return { i: parseFloat(mArr[1]) };else return { p: value.replace(/\\([.\[\]])/g, '$1') };
      });
    }

    /*!
     * ## _getPathValue(parsed, obj)
     *
     * Helper companion function for `.parsePath` that returns
     * the value located at the parsed address.
     *
     *      var value = getPathValue(parsed, obj);
     *
     * @param {Object} parsed definition from `parsePath`.
     * @param {Object} object to search against
     * @param {Number} object to search against
     * @returns {Object|Undefined} value
     * @api private
     */

    function _getPathValue(parsed, obj, index) {
      var tmp = obj,
          res;

      index = index === undefined ? parsed.length : index;

      for (var i = 0, l = index; i < l; i++) {
        var part = parsed[i];
        if (tmp) {
          if ('undefined' !== typeof part.p) tmp = tmp[part.p];else if ('undefined' !== typeof part.i) tmp = tmp[part.i];
          if (i == l - 1) res = tmp;
        } else {
          res = undefined;
        }
      }
      return res;
    }
    });

    var require$$0$8 = (getPathInfo && typeof getPathInfo === 'object' && 'default' in getPathInfo ? getPathInfo['default'] : getPathInfo);

    var getPathValue = __commonjs(function (module) {
    /*!
     * Chai - getPathValue utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * @see https://github.com/logicalparadox/filtr
     * MIT Licensed
     */

    var getPathInfo = require$$0$8;

    /**
     * ### .getPathValue(path, object)
     *
     * This allows the retrieval of values in an
     * object given a string path.
     *
     *     var obj = {
     *         prop1: {
     *             arr: ['a', 'b', 'c']
     *           , str: 'Hello'
     *         }
     *       , prop2: {
     *             arr: [ { nested: 'Universe' } ]
     *           , str: 'Hello again!'
     *         }
     *     }
     *
     * The following would be the results.
     *
     *     getPathValue('prop1.str', obj); // Hello
     *     getPathValue('prop1.att[2]', obj); // b
     *     getPathValue('prop2.arr[0].nested', obj); // Universe
     *
     * @param {String} path
     * @param {Object} object
     * @returns {Object} value or `undefined`
     * @name getPathValue
     * @api public
     */
    module.exports = function (path, obj) {
      var info = getPathInfo(path, obj);
      return info.value;
    };
    });

    var require$$9 = (getPathValue && typeof getPathValue === 'object' && 'default' in getPathValue ? getPathValue['default'] : getPathValue);

    var index$6 = __commonjs(function (module) {
    var toString = {}.toString;

    module.exports = Array.isArray || function (arr) {
      return toString.call(arr) == '[object Array]';
    };
    });

    var require$$0$11 = (index$6 && typeof index$6 === 'object' && 'default' in index$6 ? index$6['default'] : index$6);

    var index$7 = __commonjs(function (module, exports) {
    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];

      i += d;

      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };

    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

      value = Math.abs(value);

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128;
    };
    });

    var require$$1$2 = (index$7 && typeof index$7 === 'object' && 'default' in index$7 ? index$7['default'] : index$7);

    var b64 = __commonjs(function (module, exports) {
    'use strict';

    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;

    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

    function init() {
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }

      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;
    }

    init();

    function toByteArray(b64) {
      var i, j, l, tmp, placeHolders, arr;
      var len = b64.length;

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
      }

      // the number of equal signs (place holders)
      // if there are two placeholders, than the two characters before it
      // represent one byte
      // if there is only one, then the three characters before it represent 2 bytes
      // this is just a cheap hack to not do indexOf twice
      placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

      // base64 is 4/3 + up to two characters of the original data
      arr = new Arr(len * 3 / 4 - placeHolders);

      // if there are placeholders, only get up to the last complete 4 chars
      l = placeHolders > 0 ? len - 4 : len;

      var L = 0;

      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[L++] = tmp >> 16 & 0xFF;
        arr[L++] = tmp >> 8 & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      if (placeHolders === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[L++] = tmp & 0xFF;
      } else if (placeHolders === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[L++] = tmp >> 8 & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      return arr;
    }

    function tripletToBase64(num) {
      return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
    }

    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
        output.push(tripletToBase64(tmp));
      }
      return output.join('');
    }

    function fromByteArray(uint8) {
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
      var output = '';
      var parts = [];
      var maxChunkLength = 16383; // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup[tmp >> 2];
        output += lookup[tmp << 4 & 0x3F];
        output += '==';
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        output += lookup[tmp >> 10];
        output += lookup[tmp >> 4 & 0x3F];
        output += lookup[tmp << 2 & 0x3F];
        output += '=';
      }

      parts.push(output);

      return parts.join('');
    }
    });

    var require$$2$4 = (b64 && typeof b64 === 'object' && 'default' in b64 ? b64['default'] : b64);

    var index$5 = __commonjs(function (module, exports, global) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    /* eslint-disable no-proto */

    'use strict';

    var base64 = require$$2$4;
    var ieee754 = require$$1$2;
    var isArray = require$$0$11;

    exports.Buffer = Buffer;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.

     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

    /*
     * Export kMaxLength after typed array support is determined.
     */
    exports.kMaxLength = kMaxLength();

    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        arr.foo = function () {
          return 42;
        };
        return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
      } catch (e) {
        return false;
      }
    }

    function kMaxLength() {
      return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
    }

    function createBuffer(that, length) {
      if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length');
      }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer(length);
        }
        that.length = length;
      }

      return that;
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer(arg, encodingOrOffset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length);
      }

      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error('If encoding is specified then the first argument must be a string');
        }
        return allocUnsafe(this, arg);
      }
      return from(this, arg, encodingOrOffset, length);
    }

    Buffer.poolSize = 8192; // not used by this implementation

    // TODO: Legacy, not needed anymore. Remove in next major version.
    Buffer._augment = function (arr) {
      arr.__proto__ = Buffer.prototype;
      return arr;
    };

    function from(that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number');
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length);
      }

      if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset);
      }

      return fromObject(that, value);
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;
      if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
        // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
        Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true
        });
      }
    }

    function assertSize(size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number');
      }
    }

    function alloc(that, size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(that, size);
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
      }
      return createBuffer(that, size);
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(null, size, fill, encoding);
    };

    function allocUnsafe(that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; i++) {
          that[i] = 0;
        }
      }
      return that;
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(null, size);
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(null, size);
    };

    function fromString(that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding');
      }

      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);

      that.write(string, encoding);
      return that;
    }

    function fromArrayLike(that, array) {
      var length = checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that;
    }

    function fromArrayBuffer(that, array, byteOffset, length) {
      array.byteLength; // this throws if `array` is not a valid ArrayBuffer

      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds');
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds');
      }

      if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike(that, array);
      }
      return that;
    }

    function fromObject(that, obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);

        if (that.length === 0) {
          return that;
        }

        obj.copy(that, 0, 0, len);
        return that;
      }

      if (obj) {
        if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(that, 0);
          }
          return fromArrayLike(that, obj);
        }

        if (obj.type === 'Buffer' && isArray(obj.data)) {
          return fromArrayLike(that, obj.data);
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
    }

    function checked(length) {
      // Note: cannot use `length < kMaxLength` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
      }
      return length | 0;
    }

    function SlowBuffer(length) {
      if (+length != length) {
        // eslint-disable-line eqeqeq
        length = 0;
      }
      return Buffer.alloc(+length);
    }

    Buffer.isBuffer = function isBuffer(b) {
      return !!(b != null && b._isBuffer);
    };

    Buffer.compare = function compare(a, b) {
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('Arguments must be Buffers');
      }

      if (a === b) return 0;

      var x = a.length;
      var y = b.length;

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }

      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };

    Buffer.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'raw':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true;
        default:
          return false;
      }
    };

    Buffer.concat = function concat(list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }

      if (list.length === 0) {
        return Buffer.alloc(0);
      }

      var i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; i++) {
          length += list[i].length;
        }
      }

      var buffer = Buffer.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; i++) {
        var buf = list[i];
        if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };

    function byteLength(string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length;
      }
      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== 'string') {
        string = '' + string;
      }

      var len = string.length;
      if (len === 0) return 0;

      // Use a for loop to avoid recursion
      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'binary':
          // Deprecated
          case 'raw':
          case 'raws':
            return len;
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes(string).length;
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2;
          case 'hex':
            return len >>> 1;
          case 'base64':
            return base64ToBytes(string).length;
          default:
            if (loweredCase) return utf8ToBytes(string).length; // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength;

    function slowToString(encoding, start, end) {
      var loweredCase = false;

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0;
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return '';
      }

      if (end === undefined || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return '';
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return '';
      }

      if (!encoding) encoding = 'utf8';

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end);

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end);

          case 'ascii':
            return asciiSlice(this, start, end);

          case 'binary':
            return binarySlice(this, start, end);

          case 'base64':
            return base64Slice(this, start, end);

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end);

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    }

    // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.
    Buffer.prototype._isBuffer = true;

    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }

    Buffer.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits');
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };

    Buffer.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits');
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };

    Buffer.prototype.toString = function toString() {
      var length = this.length | 0;
      if (length === 0) return '';
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };

    Buffer.prototype.equals = function equals(b) {
      if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
      if (this === b) return true;
      return Buffer.compare(this, b) === 0;
    };

    Buffer.prototype.inspect = function inspect() {
      var str = '';
      var max = exports.INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) str += ' ... ';
      }
      return '<Buffer ' + str + '>';
    };

    Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (!Buffer.isBuffer(target)) {
        throw new TypeError('Argument must be a Buffer');
      }

      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = target ? target.length : 0;
      }
      if (thisStart === undefined) {
        thisStart = 0;
      }
      if (thisEnd === undefined) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index');
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;

      if (this === target) return 0;

      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);

      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }

      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };

    function arrayIndexOf(arr, val, byteOffset, encoding) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read(buf, i) {
        if (indexSize === 1) {
          return buf[i];
        } else {
          return buf.readUInt16BE(i * indexSize);
        }
      }

      var foundIndex = -1;
      for (var i = 0; byteOffset + i < arrLength; i++) {
        if (read(arr, byteOffset + i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return (byteOffset + foundIndex) * indexSize;
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
      return -1;
    }

    Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }
      byteOffset >>= 0;

      if (this.length === 0) return -1;
      if (byteOffset >= this.length) return -1;

      // Negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0);

      if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
      }

      if (Buffer.isBuffer(val)) {
        // special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(this, val, byteOffset, encoding);
      }
      if (typeof val === 'number') {
        if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
          return Uint8Array.prototype.indexOf.call(this, val, byteOffset);
        }
        return arrayIndexOf(this, [val], byteOffset, encoding);
      }

      throw new TypeError('val must be string, number or Buffer');
    };

    Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };

    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }

      // must be an even number of digits
      var strLen = string.length;
      if (strLen % 2 !== 0) throw new Error('Invalid hex string');

      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; i++) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }

    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }

    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }

    function binaryWrite(buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length);
    }

    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }

    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }

    Buffer.prototype.write = function write(string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
        // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
          encoding = offset;
          length = this.length;
          offset = 0;
          // Buffer#write(string, offset[, length][, encoding])
        } else if (isFinite(offset)) {
            offset = offset | 0;
            if (isFinite(length)) {
              length = length | 0;
              if (encoding === undefined) encoding = 'utf8';
            } else {
              encoding = length;
              length = undefined;
            }
            // legacy write(string, encoding, offset, length) - remove in v0.13
          } else {
              throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
            }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds');
      }

      if (!encoding) encoding = 'utf8';

      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length);

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length);

          case 'ascii':
            return asciiWrite(this, string, offset, length);

          case 'binary':
            return binaryWrite(this, string, offset, length);

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length);

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer.prototype.toJSON = function toJSON() {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };

    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }

    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];

      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray(res);
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000;

    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = '';
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }

    function asciiSlice(buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; i++) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }
      return ret;
    }

    function binarySlice(buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; i++) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }

    function hexSlice(buf, start, end) {
      var len = buf.length;

      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;

      var out = '';
      for (var i = start; i < end; i++) {
        out += toHex(buf[i]);
      }
      return out;
    }

    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = '';
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }

    Buffer.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~ ~start;
      end = end === undefined ? len : ~ ~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;

      var newBuf;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; i++) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf;
    };

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
    }

    Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      return val;
    };

    Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
      }

      var val = this[offset + --byteLength];
      var mul = 1;
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }

      return val;
    };

    Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };

    Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };

    Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };

    Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
    };

    Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };

    Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val;
    };

    Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val;
    };

    Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 0x80)) return this[offset];
      return (0xff - this[offset] + 1) * -1;
    };

    Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 0x8000 ? val | 0xFFFF0000 : val;
    };

    Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 0x8000 ? val | 0xFFFF0000 : val;
    };

    Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };

    Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };

    Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };

    Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };

    Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };

    Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };

    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError('Index out of range');
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var mul = 1;
      var i = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = value / mul & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = value / mul & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      this[offset] = value & 0xff;
      return offset + 1;
    };

    function objectWriteUInt16(buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
        buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
      }
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };

    Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };

    function objectWriteUInt32(buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffffffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
      }
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };

    Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };

    Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      if (value < 0) value = 0xff + value + 1;
      this[offset] = value & 0xff;
      return offset + 1;
    };

    Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };

    Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };

    Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };

    Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (value < 0) value = 0xffffffff + value + 1;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };

    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range');
      if (offset < 0) throw new RangeError('Index out of range');
    }

    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };

    Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };

    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };

    Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;

      // Copy 0 bytes; we're done
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds');
      }
      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
      if (end < 0) throw new RangeError('sourceEnd out of bounds');

      // Are we oob?
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; i--) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; i++) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
      }

      return len;
    };

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill(val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string');
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding);
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index');
      }

      if (end <= start) {
        return this;
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;

      if (!val) val = 0;

      var i;
      if (typeof val === 'number') {
        for (i = start; i < end; i++) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; i++) {
          this[i + start] = bytes[i % len];
        }
      }

      return this;
    };

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

    function base64clean(str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim(str).replace(INVALID_BASE64_RE, '');
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return '';
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '=';
      }
      return str;
    }

    function stringtrim(str) {
      if (str.trim) return str.trim();
      return str.replace(/^\s+|\s+$/g, '');
    }

    function toHex(n) {
      if (n < 16) return '0' + n.toString(16);
      return n.toString(16);
    }

    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; i++) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue;
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue;
            }

            // valid lead
            leadSurrogate = codePoint;

            continue;
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue;
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break;
          bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break;
          bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break;
          bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else {
          throw new Error('Invalid code point');
        }
      }

      return bytes;
    }

    function asciiToBytes(str) {
      var byteArray = [];
      for (var i = 0; i < str.length; i++) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }
      return byteArray;
    }

    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; i++) {
        if ((units -= 2) < 0) break;

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray;
    }

    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }

    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; i++) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }
      return i;
    }

    function isnan(val) {
      return val !== val; // eslint-disable-line no-self-compare
    }
    });

    var require$$0$10 = (index$5 && typeof index$5 === 'object' && 'default' in index$5 ? index$5['default'] : index$5);

    var type$1 = __commonjs(function (module) {
    /*!
     * type-detect
     * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /*!
     * Primary Exports
     */

    var exports = module.exports = getType;

    /*!
     * Detectable javascript natives
     */

    var natives = {
      '[object Array]': 'array',
      '[object RegExp]': 'regexp',
      '[object Function]': 'function',
      '[object Arguments]': 'arguments',
      '[object Date]': 'date'
    };

    /**
     * ### typeOf (obj)
     *
     * Use several different techniques to determine
     * the type of object being tested.
     *
     *
     * @param {Mixed} object
     * @return {String} object type
     * @api public
     */

    function getType(obj) {
      var str = Object.prototype.toString.call(obj);
      if (natives[str]) return natives[str];
      if (obj === null) return 'null';
      if (obj === undefined) return 'undefined';
      if (obj === Object(obj)) return 'object';
      return typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj);
    }

    exports.Library = Library;

    /**
     * ### Library
     *
     * Create a repository for custom type detection.
     *
     * ```js
     * var lib = new type.Library;
     * ```
     *
     */

    function Library() {
      this.tests = {};
    }

    /**
     * #### .of (obj)
     *
     * Expose replacement `typeof` detection to the library.
     *
     * ```js
     * if ('string' === lib.of('hello world')) {
     *   // ...
     * }
     * ```
     *
     * @param {Mixed} object to test
     * @return {String} type
     */

    Library.prototype.of = getType;

    /**
     * #### .define (type, test)
     *
     * Add a test to for the `.test()` assertion.
     *
     * Can be defined as a regular expression:
     *
     * ```js
     * lib.define('int', /^[0-9]+$/);
     * ```
     *
     * ... or as a function:
     *
     * ```js
     * lib.define('bln', function (obj) {
     *   if ('boolean' === lib.of(obj)) return true;
     *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
     *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
     *   return !! ~blns.indexOf(obj);
     * });
     * ```
     *
     * @param {String} type
     * @param {RegExp|Function} test
     * @api public
     */

    Library.prototype.define = function (type, test) {
      if (arguments.length === 1) return this.tests[type];
      this.tests[type] = test;
      return this;
    };

    /**
     * #### .test (obj, test)
     *
     * Assert that an object is of type. Will first
     * check natives, and if that does not pass it will
     * use the user defined custom tests.
     *
     * ```js
     * assert(lib.test('1', 'int'));
     * assert(lib.test('yes', 'bln'));
     * ```
     *
     * @param {Mixed} object
     * @param {String} type
     * @return {Boolean} result
     * @api public
     */

    Library.prototype.test = function (obj, type) {
      if (type === getType(obj)) return true;
      var test = this.tests[type];

      if (test && 'regexp' === getType(test)) {
        return test.test(obj);
      } else if (test && 'function' === getType(test)) {
        return test(obj);
      } else {
        throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
      }
    };
    });

    var require$$0$12 = (type$1 && typeof type$1 === 'object' && 'default' in type$1 ? type$1['default'] : type$1);

    var index$8 = __commonjs(function (module) {
    module.exports = require$$0$12;
    });

    var require$$1$3 = (index$8 && typeof index$8 === 'object' && 'default' in index$8 ? index$8['default'] : index$8);

    var eql = __commonjs(function (module) {
    /*!
     * deep-eql
     * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /*!
     * Module dependencies
     */

    var type = require$$1$3;

    /*!
     * Buffer.isBuffer browser shim
     */

    var Buffer;
    try {
      Buffer = require$$0$10.Buffer;
    } catch (ex) {
      Buffer = {};
      Buffer.isBuffer = function () {
        return false;
      };
    }

    /*!
     * Primary Export
     */

    module.exports = deepEqual;

    /**
     * Assert super-strict (egal) equality between
     * two objects of any type.
     *
     * @param {Mixed} a
     * @param {Mixed} b
     * @param {Array} memoised (optional)
     * @return {Boolean} equal match
     */

    function deepEqual(a, b, m) {
      if (sameValue(a, b)) {
        return true;
      } else if ('date' === type(a)) {
        return dateEqual(a, b);
      } else if ('regexp' === type(a)) {
        return regexpEqual(a, b);
      } else if (Buffer.isBuffer(a)) {
        return bufferEqual(a, b);
      } else if ('arguments' === type(a)) {
        return argumentsEqual(a, b, m);
      } else if (!typeEqual(a, b)) {
        return false;
      } else if ('object' !== type(a) && 'object' !== type(b) && 'array' !== type(a) && 'array' !== type(b)) {
        return sameValue(a, b);
      } else {
        return objectEqual(a, b, m);
      }
    }

    /*!
     * Strict (egal) equality test. Ensures that NaN always
     * equals NaN and `-0` does not equal `+0`.
     *
     * @param {Mixed} a
     * @param {Mixed} b
     * @return {Boolean} equal match
     */

    function sameValue(a, b) {
      if (a === b) return a !== 0 || 1 / a === 1 / b;
      return a !== a && b !== b;
    }

    /*!
     * Compare the types of two given objects and
     * return if they are equal. Note that an Array
     * has a type of `array` (not `object`) and arguments
     * have a type of `arguments` (not `array`/`object`).
     *
     * @param {Mixed} a
     * @param {Mixed} b
     * @return {Boolean} result
     */

    function typeEqual(a, b) {
      return type(a) === type(b);
    }

    /*!
     * Compare two Date objects by asserting that
     * the time values are equal using `saveValue`.
     *
     * @param {Date} a
     * @param {Date} b
     * @return {Boolean} result
     */

    function dateEqual(a, b) {
      if ('date' !== type(b)) return false;
      return sameValue(a.getTime(), b.getTime());
    }

    /*!
     * Compare two regular expressions by converting them
     * to string and checking for `sameValue`.
     *
     * @param {RegExp} a
     * @param {RegExp} b
     * @return {Boolean} result
     */

    function regexpEqual(a, b) {
      if ('regexp' !== type(b)) return false;
      return sameValue(a.toString(), b.toString());
    }

    /*!
     * Assert deep equality of two `arguments` objects.
     * Unfortunately, these must be sliced to arrays
     * prior to test to ensure no bad behavior.
     *
     * @param {Arguments} a
     * @param {Arguments} b
     * @param {Array} memoize (optional)
     * @return {Boolean} result
     */

    function argumentsEqual(a, b, m) {
      if ('arguments' !== type(b)) return false;
      a = [].slice.call(a);
      b = [].slice.call(b);
      return deepEqual(a, b, m);
    }

    /*!
     * Get enumerable properties of a given object.
     *
     * @param {Object} a
     * @return {Array} property names
     */

    function enumerable(a) {
      var res = [];
      for (var key in a) {
        res.push(key);
      }return res;
    }

    /*!
     * Simple equality for flat iterable objects
     * such as Arrays or Node.js buffers.
     *
     * @param {Iterable} a
     * @param {Iterable} b
     * @return {Boolean} result
     */

    function iterableEqual(a, b) {
      if (a.length !== b.length) return false;

      var i = 0;
      var match = true;

      for (; i < a.length; i++) {
        if (a[i] !== b[i]) {
          match = false;
          break;
        }
      }

      return match;
    }

    /*!
     * Extension to `iterableEqual` specifically
     * for Node.js Buffers.
     *
     * @param {Buffer} a
     * @param {Mixed} b
     * @return {Boolean} result
     */

    function bufferEqual(a, b) {
      if (!Buffer.isBuffer(b)) return false;
      return iterableEqual(a, b);
    }

    /*!
     * Block for `objectEqual` ensuring non-existing
     * values don't get in.
     *
     * @param {Mixed} object
     * @return {Boolean} result
     */

    function isValue(a) {
      return a !== null && a !== undefined;
    }

    /*!
     * Recursively check the equality of two objects.
     * Once basic sameness has been established it will
     * defer to `deepEqual` for each enumerable key
     * in the object.
     *
     * @param {Mixed} a
     * @param {Mixed} b
     * @return {Boolean} result
     */

    function objectEqual(a, b, m) {
      if (!isValue(a) || !isValue(b)) {
        return false;
      }

      if (a.prototype !== b.prototype) {
        return false;
      }

      var i;
      if (m) {
        for (i = 0; i < m.length; i++) {
          if (m[i][0] === a && m[i][1] === b || m[i][0] === b && m[i][1] === a) {
            return true;
          }
        }
      } else {
        m = [];
      }

      try {
        var ka = enumerable(a);
        var kb = enumerable(b);
      } catch (ex) {
        return false;
      }

      ka.sort();
      kb.sort();

      if (!iterableEqual(ka, kb)) {
        return false;
      }

      m.push([a, b]);

      var key;
      for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!deepEqual(a[key], b[key], m)) {
          return false;
        }
      }

      return true;
    }
    });

    var require$$0$9 = (eql && typeof eql === 'object' && 'default' in eql ? eql['default'] : eql);

    var index$4 = __commonjs(function (module) {
    module.exports = require$$0$9;
    });

    var require$$10 = (index$4 && typeof index$4 === 'object' && 'default' in index$4 ? index$4['default'] : index$4);

    var getEnumerableProperties = __commonjs(function (module) {
    /*!
     * Chai - getEnumerableProperties utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /**
     * ### .getEnumerableProperties(object)
     *
     * This allows the retrieval of enumerable property names of an object,
     * inherited or not.
     *
     * @param {Object} object
     * @returns {Array}
     * @name getEnumerableProperties
     * @api public
     */

    module.exports = function getEnumerableProperties(object) {
      var result = [];
      for (var name in object) {
        result.push(name);
      }
      return result;
    };
    });

    var require$$0$14 = (getEnumerableProperties && typeof getEnumerableProperties === 'object' && 'default' in getEnumerableProperties ? getEnumerableProperties['default'] : getEnumerableProperties);

    var getProperties = __commonjs(function (module) {
    /*!
     * Chai - getProperties utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /**
     * ### .getProperties(object)
     *
     * This allows the retrieval of property names of an object, enumerable or not,
     * inherited or not.
     *
     * @param {Object} object
     * @returns {Array}
     * @name getProperties
     * @api public
     */

    module.exports = function getProperties(object) {
      var result = Object.getOwnPropertyNames(object);

      function addProperty(property) {
        if (result.indexOf(property) === -1) {
          result.push(property);
        }
      }

      var proto = Object.getPrototypeOf(object);
      while (proto !== null) {
        Object.getOwnPropertyNames(proto).forEach(addProperty);
        proto = Object.getPrototypeOf(proto);
      }

      return result;
    };
    });

    var require$$1$5 = (getProperties && typeof getProperties === 'object' && 'default' in getProperties ? getProperties['default'] : getProperties);

    var inspect = __commonjs(function (module, exports) {
    // This is (almost) directly from Node.js utils
    // https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

    var getName = require$$2$3;
    var getProperties = require$$1$5;
    var getEnumerableProperties = require$$0$14;

    module.exports = inspect;

    /**
     * Echos the value of a value. Trys to print the value out
     * in the best way possible given the different types.
     *
     * @param {Object} obj The object to print out.
     * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
     *    properties of objects.
     * @param {Number} depth Depth in which to descend in object. Default is 2.
     * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
     *    output. Default is false (no coloring).
     */
    function inspect(obj, showHidden, depth, colors) {
      var ctx = {
        showHidden: showHidden,
        seen: [],
        stylize: function stylize(str) {
          return str;
        }
      };
      return formatValue(ctx, obj, typeof depth === 'undefined' ? 2 : depth);
    }

    // Returns true if object is a DOM element.
    var isDOMElement = function isDOMElement(object) {
      if ((typeof HTMLElement === 'undefined' ? 'undefined' : babelHelpers.typeof(HTMLElement)) === 'object') {
        return object instanceof HTMLElement;
      } else {
        return object && (typeof object === 'undefined' ? 'undefined' : babelHelpers.typeof(object)) === 'object' && object.nodeType === 1 && typeof object.nodeName === 'string';
      }
    };

    function formatValue(ctx, value, recurseTimes) {
      // Provide a hook for user-specified inspect functions.
      // Check that value is an object with an inspect function on it
      if (value && typeof value.inspect === 'function' &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes);
        if (typeof ret !== 'string') {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }

      // Primitive types cannot have properties
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }

      // If this is a DOM element, try to get the outer HTML.
      if (isDOMElement(value)) {
        if ('outerHTML' in value) {
          return value.outerHTML;
          // This value does not have an outerHTML attribute,
          //   it could still be an XML element
        } else {
            // Attempt to serialize it
            try {
              if (document.xmlVersion) {
                var xmlSerializer = new XMLSerializer();
                return xmlSerializer.serializeToString(value);
              } else {
                // Firefox 11- do not support outerHTML
                //   It does, however, support innerHTML
                //   Use the following to render the element
                var ns = "http://www.w3.org/1999/xhtml";
                var container = document.createElementNS(ns, '_');

                container.appendChild(value.cloneNode(false));
                html = container.innerHTML.replace('><', '>' + value.innerHTML + '<');
                container.innerHTML = '';
                return html;
              }
            } catch (err) {
              // This could be a non-native DOM implementation,
              //   continue with the normal flow:
              //   printing the element as if it is an object.
            }
          }
      }

      // Look up the keys of the object.
      var visibleKeys = getEnumerableProperties(value);
      var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

      // Some type of object without properties can be shortcutted.
      // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
      // a `stack` plus `description` property; ignore those for consistency.
      if (keys.length === 0 || isError(value) && (keys.length === 1 && keys[0] === 'stack' || keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')) {
        if (typeof value === 'function') {
          var name = getName(value);
          var nameSuffix = name ? ': ' + name : '';
          return ctx.stylize('[Function' + nameSuffix + ']', 'special');
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
        }
        if (isError(value)) {
          return formatError(value);
        }
      }

      var base = '',
          array = false,
          braces = ['{', '}'];

      // Make Array say that they are Array
      if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
      }

      // Make functions say that they are functions
      if (typeof value === 'function') {
        var name = getName(value);
        var nameSuffix = name ? ': ' + name : '';
        base = ' [Function' + nameSuffix + ']';
      }

      // Make RegExps say that they are RegExps
      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }

      // Make dates with properties first say the date
      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }

      // Make error with message first say the error
      if (isError(value)) {
        return formatError(value);
      }

      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }

      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }

      ctx.seen.push(value);

      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function (key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }

      ctx.seen.pop();

      return reduceToSingleString(output, base, braces);
    }

    function formatPrimitive(ctx, value) {
      switch (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) {
        case 'undefined':
          return ctx.stylize('undefined', 'undefined');

        case 'string':
          var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
          return ctx.stylize(simple, 'string');

        case 'number':
          if (value === 0 && 1 / value === -Infinity) {
            return ctx.stylize('-0', 'number');
          }
          return ctx.stylize('' + value, 'number');

        case 'boolean':
          return ctx.stylize('' + value, 'boolean');
      }
      // For some reason typeof null is "object", so special case here.
      if (value === null) {
        return ctx.stylize('null', 'null');
      }
    }

    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }

    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (Object.prototype.hasOwnProperty.call(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function (key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }

    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str;
      if (value.__lookupGetter__) {
        if (value.__lookupGetter__(key)) {
          if (value.__lookupSetter__(key)) {
            str = ctx.stylize('[Getter/Setter]', 'special');
          } else {
            str = ctx.stylize('[Getter]', 'special');
          }
        } else {
          if (value.__lookupSetter__(key)) {
            str = ctx.stylize('[Setter]', 'special');
          }
        }
      }
      if (visibleKeys.indexOf(key) < 0) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(value[key]) < 0) {
          if (recurseTimes === null) {
            str = formatValue(ctx, value[key], null);
          } else {
            str = formatValue(ctx, value[key], recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function (line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function (line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (typeof name === 'undefined') {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }

      return name + ': ' + str;
    }

    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function (prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.length + 1;
      }, 0);

      if (length > 60) {
        return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
      }

      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }

    function isArray(ar) {
      return Array.isArray(ar) || (typeof ar === 'undefined' ? 'undefined' : babelHelpers.typeof(ar)) === 'object' && objectToString(ar) === '[object Array]';
    }

    function isRegExp(re) {
      return (typeof re === 'undefined' ? 'undefined' : babelHelpers.typeof(re)) === 'object' && objectToString(re) === '[object RegExp]';
    }

    function isDate(d) {
      return (typeof d === 'undefined' ? 'undefined' : babelHelpers.typeof(d)) === 'object' && objectToString(d) === '[object Date]';
    }

    function isError(e) {
      return (typeof e === 'undefined' ? 'undefined' : babelHelpers.typeof(e)) === 'object' && objectToString(e) === '[object Error]';
    }

    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    });

    var require$$1$4 = (inspect && typeof inspect === 'object' && 'default' in inspect ? inspect['default'] : inspect);

    var objDisplay = __commonjs(function (module) {
    /*!
     * Chai - flag utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /*!
     * Module dependancies
     */

    var inspect = require$$1$4;
    var config = require$$0$2;

    /**
     * ### .objDisplay (object)
     *
     * Determines if an object or an array matches
     * criteria to be inspected in-line for error
     * messages or should be truncated.
     *
     * @param {Mixed} javascript object to inspect
     * @name objDisplay
     * @api public
     */

    module.exports = function (obj) {
      var str = inspect(obj),
          type = Object.prototype.toString.call(obj);

      if (config.truncateThreshold && str.length >= config.truncateThreshold) {
        if (type === '[object Function]') {
          return !obj.name || obj.name === '' ? '[Function]' : '[Function: ' + obj.name + ']';
        } else if (type === '[object Array]') {
          return '[ Array(' + obj.length + ') ]';
        } else if (type === '[object Object]') {
          var keys = Object.keys(obj),
              kstr = keys.length > 2 ? keys.splice(0, 2).join(', ') + ', ...' : keys.join(', ');
          return '{ Object (' + kstr + ') }';
        } else {
          return str;
        }
      } else {
        return str;
      }
    };
    });

    var require$$0$13 = (objDisplay && typeof objDisplay === 'object' && 'default' in objDisplay ? objDisplay['default'] : objDisplay);

    var getActual = __commonjs(function (module) {
    /*!
     * Chai - getActual utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /**
     * # getActual(object, [actual])
     *
     * Returns the `actual` value for an Assertion
     *
     * @param {Object} object (constructed Assertion)
     * @param {Arguments} chai.Assertion.prototype.assert arguments
     */

    module.exports = function (obj, args) {
      return args.length > 4 ? args[4] : obj._obj;
    };
    });

    var require$$2$5 = (getActual && typeof getActual === 'object' && 'default' in getActual ? getActual['default'] : getActual);

    var getMessage = __commonjs(function (module) {
    /*!
     * Chai - message composition utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /*!
     * Module dependancies
     */

    var flag = require$$0$4,
        getActual = require$$2$5,
        inspect = require$$1$4,
        objDisplay = require$$0$13;

    /**
     * ### .getMessage(object, message, negateMessage)
     *
     * Construct the error message based on flags
     * and template tags. Template tags will return
     * a stringified inspection of the object referenced.
     *
     * Message template tags:
     * - `#{this}` current asserted object
     * - `#{act}` actual value
     * - `#{exp}` expected value
     *
     * @param {Object} object (constructed Assertion)
     * @param {Arguments} chai.Assertion.prototype.assert arguments
     * @name getMessage
     * @api public
     */

    module.exports = function (obj, args) {
      var negate = flag(obj, 'negate'),
          val = flag(obj, 'object'),
          expected = args[3],
          actual = getActual(obj, args),
          msg = negate ? args[2] : args[1],
          flagMsg = flag(obj, 'message');

      if (typeof msg === "function") msg = msg();
      msg = msg || '';
      msg = msg.replace(/#{this}/g, objDisplay(val)).replace(/#{act}/g, objDisplay(actual)).replace(/#{exp}/g, objDisplay(expected));

      return flagMsg ? flagMsg + ': ' + msg : msg;
    };
    });

    var require$$16 = (getMessage && typeof getMessage === 'object' && 'default' in getMessage ? getMessage['default'] : getMessage);

    var index$9 = __commonjs(function (module) {
    /*!
     * assertion-error
     * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
     * MIT Licensed
     */

    /*!
     * Return a function that will copy properties from
     * one object to another excluding any originally
     * listed. Returned function will create a new `{}`.
     *
     * @param {String} excluded properties ...
     * @return {Function}
     */

    function exclude() {
      var excludes = [].slice.call(arguments);

      function excludeProps(res, obj) {
        Object.keys(obj).forEach(function (key) {
          if (! ~excludes.indexOf(key)) res[key] = obj[key];
        });
      }

      return function extendExclude() {
        var args = [].slice.call(arguments),
            i = 0,
            res = {};

        for (; i < args.length; i++) {
          excludeProps(res, args[i]);
        }

        return res;
      };
    };

    /*!
     * Primary Exports
     */

    module.exports = AssertionError;

    /**
     * ### AssertionError
     *
     * An extension of the JavaScript `Error` constructor for
     * assertion and validation scenarios.
     *
     * @param {String} message
     * @param {Object} properties to include (optional)
     * @param {callee} start stack function (optional)
     */

    function AssertionError(message, _props, ssf) {
      var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON'),
          props = extend(_props || {});

      // default values
      this.message = message || 'Unspecified AssertionError';
      this.showDiff = false;

      // copy from properties
      for (var key in props) {
        this[key] = props[key];
      }

      // capture stack trace
      ssf = ssf || arguments.callee;
      if (ssf && Error.captureStackTrace) {
        Error.captureStackTrace(this, ssf);
      } else {
        this.stack = new Error().stack;
      }
    }

    /*!
     * Inherit from Error.prototype
     */

    AssertionError.prototype = Object.create(Error.prototype);

    /*!
     * Statically set name
     */

    AssertionError.prototype.name = 'AssertionError';

    /*!
     * Ensure correct constructor
     */

    AssertionError.prototype.constructor = AssertionError;

    /**
     * Allow errors to be converted to JSON for static transfer.
     *
     * @param {Boolean} include stack (default: `true`)
     * @return {Object} object that can be `JSON.stringify`
     */

    AssertionError.prototype.toJSON = function (stack) {
      var extend = exclude('constructor', 'toJSON', 'stack'),
          props = extend({ name: this.name }, this);

      // include stack if exists and not turned off
      if (false !== stack && this.stack) {
        props.stack = this.stack;
      }

      return props;
    };
    });

    var require$$2$6 = (index$9 && typeof index$9 === 'object' && 'default' in index$9 ? index$9['default'] : index$9);

    var expectTypes = __commonjs(function (module) {
    /*!
     * Chai - expectTypes utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /**
     * ### expectTypes(obj, types)
     *
     * Ensures that the object being tested against is of a valid type.
     *
     *     utils.expectTypes(this, ['array', 'object', 'string']);
     *
     * @param {Mixed} obj constructed Assertion
     * @param {Array} type A list of allowed types for this assertion
     * @name expectTypes
     * @api public
     */

    var AssertionError = require$$2$6;
    var flag = require$$0$4;
    var type = require$$0$6;

    module.exports = function (obj, types) {
      var obj = flag(obj, 'object');
      types = types.map(function (t) {
        return t.toLowerCase();
      });
      types.sort();

      // Transforms ['lorem', 'ipsum'] into 'a lirum, or an ipsum'
      var str = types.map(function (t, index) {
        var art = ~['a', 'e', 'i', 'o', 'u'].indexOf(t.charAt(0)) ? 'an' : 'a';
        var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
        return or + art + ' ' + t;
      }).join(', ');

      if (!types.some(function (expected) {
        return type(obj) === expected;
      })) {
        throw new AssertionError('object tested must be ' + str + ', but ' + type(obj) + ' given');
      }
    };
    });

    var require$$17 = (expectTypes && typeof expectTypes === 'object' && 'default' in expectTypes ? expectTypes['default'] : expectTypes);

    var test = __commonjs(function (module) {
    /*!
     * Chai - test utility
     * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /*!
     * Module dependancies
     */

    var flag = require$$0$4;

    /**
     * # test(object, expression)
     *
     * Test and object for expression.
     *
     * @param {Object} object (constructed Assertion)
     * @param {Arguments} chai.Assertion.prototype.assert arguments
     */

    module.exports = function (obj, args) {
      var negate = flag(obj, 'negate'),
          expr = args[0];
      return negate ? !expr : expr;
    };
    });

    var require$$19 = (test && typeof test === 'object' && 'default' in test ? test['default'] : test);

    var index$2 = __commonjs(function (module) {
    /*!
     * chai
     * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    /*!
     * Main exports
     */

    var exports = module.exports = {};

    /*!
     * test utility
     */

    exports.test = require$$19;

    /*!
     * type utility
     */

    exports.type = require$$0$6;

    /*!
     * expectTypes utility
     */
    exports.expectTypes = require$$17;

    /*!
     * message utility
     */

    exports.getMessage = require$$16;

    /*!
     * actual utility
     */

    exports.getActual = require$$2$5;

    /*!
     * Inspect util
     */

    exports.inspect = require$$1$4;

    /*!
     * Object Display util
     */

    exports.objDisplay = require$$0$13;

    /*!
     * Flag utility
     */

    exports.flag = require$$0$4;

    /*!
     * Flag transferring utility
     */

    exports.transferFlags = require$$2$1;

    /*!
     * Deep equal utility
     */

    exports.eql = require$$10;

    /*!
     * Deep path value
     */

    exports.getPathValue = require$$9;

    /*!
     * Deep path info
     */

    exports.getPathInfo = require$$0$8;

    /*!
     * Check if a property exists
     */

    exports.hasProperty = require$$0$5;

    /*!
     * Function name
     */

    exports.getName = require$$2$3;

    /*!
     * add Property
     */

    exports.addProperty = require$$5;

    /*!
     * add Method
     */

    exports.addMethod = require$$4$1;

    /*!
     * overwrite Property
     */

    exports.overwriteProperty = require$$3$1;

    /*!
     * overwrite Method
     */

    exports.overwriteMethod = require$$2$2;

    /*!
     * Add a chainable method
     */

    exports.addChainableMethod = require$$1$1;

    /*!
     * Overwrite chainable method
     */

    exports.overwriteChainableMethod = require$$0$3;
    });

    var require$$6 = (index$2 && typeof index$2 === 'object' && 'default' in index$2 ? index$2['default'] : index$2);

    var chai = __commonjs(function (module, exports) {
    /*!
     * chai
     * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
     * MIT Licensed
     */

    var used = [],
        exports = module.exports = {};

    /*!
     * Chai version
     */

    exports.version = '3.4.1';

    /*!
     * Assertion Error
     */

    exports.AssertionError = require$$2$6;

    /*!
     * Utils for plugins (not exported)
     */

    var util = require$$6;

    /**
     * # .use(function)
     *
     * Provides a way to extend the internals of Chai
     *
     * @param {Function}
     * @returns {this} for chaining
     * @api public
     */

    exports.use = function (fn) {
      if (! ~used.indexOf(fn)) {
        fn(this, util);
        used.push(fn);
      }

      return this;
    };

    /*!
     * Utility Functions
     */

    exports.util = util;

    /*!
     * Configuration
     */

    var config = require$$0$2;
    exports.config = config;

    /*!
     * Primary `Assertion` prototype
     */

    var assertion = require$$4;
    exports.use(assertion);

    /*!
     * Core Assertions
     */

    var core = require$$3;
    exports.use(core);

    /*!
     * Expect interface
     */

    var expect = require$$2;
    exports.use(expect);

    /*!
     * Should interface
     */

    var should = require$$1;
    exports.use(should);

    /*!
     * Assert interface
     */

    var assert = require$$0$1;
    exports.use(assert);
    });

    var require$$0 = (chai && typeof chai === 'object' && 'default' in chai ? chai['default'] : chai);

    var index = __commonjs(function (module) {
    module.exports = require$$0;
    });

    var expect = index.expect;

    function isFreezable(object) {
      if (object === null) return false;

      return Array.isArray(object) || (typeof object === 'undefined' ? 'undefined' : babelHelpers.typeof(object)) === 'object';
    }

    function needsFreezing(object) {
      return isFreezable(object) && !Object.isFrozen(object);
    }

    function recur(object) {
      Object.freeze(object);

      Object.keys(object).forEach(function (key) {
        var value = object[key];
        if (needsFreezing(value)) {
          recur(value);
        }
      });

      return object;
    }

    /**
     * Deeply freeze a plain javascript object.
     *
     * If `process.env.NODE_ENV === 'production'`, this returns the original object
     * witout freezing.
     *
     * @function
     * @sig a -> a
     * @param  {object} object Object to freeze.
     * @return {object} Frozen object, unless in production, then the same object.
     */
    function freeze(object) {
      if (process.env.NODE_ENV === 'production') {
        return object;
      }

      if (needsFreezing(object)) {
        recur(object);
      }

      return object;
    }

    /**
     * Returns a function that always returns the supplied value.
     *
     * Useful for replacing an object outright rather than merging it.
     *
     * @function
     * @sig a -> (* -> a)
     * @memberOf u
     * @param  {*} value what to return from returned function.
     * @return {function} a new function that will always return value.
     *
     * @example
     * var alwaysFour = u.constant(4);
     * expect(alwaysFour(32)).toEqual(4);
     *
     * @example
     * var user = {
     *   name: 'Mitch',
     *   favorites: {
     *     band: 'Nirvana',
     *     movie: 'The Matrix'
     *   }
     * };
     *
     * var newFavorites = {
     *   band: 'Coldplay'
     * };
     *
     * var result = u({ favorites: u.constant(newFavorites) }, user);
     *
     * expect(result).toEqual({ name: 'Mitch', favorites: { band: 'Coldplay' } });
     */
    function constant(value) {
      var frozen = freeze(value);
      return function () {
        return frozen;
      };
    }

    var isArray = __commonjs(function (module) {
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    module.exports = isArray;
    });

    var require$$1$6 = (isArray && typeof isArray === 'object' && 'default' in isArray ? isArray['default'] : isArray);

    var _isKey = __commonjs(function (module) {
    var isArray = require$$1$6;

    /** Used to match property names within property paths. */
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/;

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (typeof value == 'number') {
        return true;
      }
      return !isArray(value) && (reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object));
    }

    module.exports = isKey;
    });

    var require$$4$2 = (_isKey && typeof _isKey === 'object' && 'default' in _isKey ? _isKey['default'] : _isKey);

    var isObjectLike = __commonjs(function (module) {
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) == 'object';
    }

    module.exports = isObjectLike;
    });

    var require$$0$21 = (isObjectLike && typeof isObjectLike === 'object' && 'default' in isObjectLike ? isObjectLike['default'] : isObjectLike);

    var isSymbol = __commonjs(function (module) {
    var isObjectLike = require$$0$21;

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }

    module.exports = isSymbol;
    });

    var require$$0$20 = (isSymbol && typeof isSymbol === 'object' && 'default' in isSymbol ? isSymbol['default'] : isSymbol);

    var _checkGlobal = __commonjs(function (module) {
    /**
     * Checks if `value` is a global object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {null|Object} Returns `value` if it's a global object, else `null`.
     */
    function checkGlobal(value) {
      return value && value.Object === Object ? value : null;
    }

    module.exports = checkGlobal;
    });

    var require$$0$23 = (_checkGlobal && typeof _checkGlobal === 'object' && 'default' in _checkGlobal ? _checkGlobal['default'] : _checkGlobal);

    var _root = __commonjs(function (module, exports, global) {
    var checkGlobal = require$$0$23;

    /** Used to determine if values are of the language type `Object`. */
    var objectTypes = {
      'function': true,
      'object': true
    };

    /** Detect free variable `exports`. */
    var freeExports = objectTypes[typeof exports === 'undefined' ? 'undefined' : babelHelpers.typeof(exports)] && exports && !exports.nodeType ? exports : null;

    /** Detect free variable `module`. */
    var freeModule = objectTypes[typeof module === 'undefined' ? 'undefined' : babelHelpers.typeof(module)] && module && !module.nodeType ? module : null;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = checkGlobal(freeExports && freeModule && (typeof global === 'undefined' ? 'undefined' : babelHelpers.typeof(global)) == 'object' && global);

    /** Detect free variable `self`. */
    var freeSelf = checkGlobal(objectTypes[typeof self === 'undefined' ? 'undefined' : babelHelpers.typeof(self)] && self);

    /** Detect free variable `window`. */
    var freeWindow = checkGlobal(objectTypes[typeof window === 'undefined' ? 'undefined' : babelHelpers.typeof(window)] && window);

    /** Detect `this` as the global object. */
    var thisGlobal = checkGlobal(objectTypes[babelHelpers.typeof(__commonjs_global)] && __commonjs_global);

    /**
     * Used as a reference to the global object.
     *
     * The `this` value is used if it's the global object to avoid Greasemonkey's
     * restricted `window` object, otherwise the `window` object is used.
     */
    var root = freeGlobal || freeWindow !== (thisGlobal && thisGlobal.window) && freeWindow || freeSelf || thisGlobal || Function('return this')();

    module.exports = root;
    });

    var require$$0$22 = (_root && typeof _root === 'object' && 'default' in _root ? _root['default'] : _root);

    var _Symbol = __commonjs(function (module) {
    var root = require$$0$22;

    /** Built-in value references. */
    var _Symbol = root.Symbol;

    module.exports = _Symbol;
    });

    var require$$3$2 = (_Symbol && typeof _Symbol === 'object' && 'default' in _Symbol ? _Symbol['default'] : _Symbol);

    var toString = __commonjs(function (module) {
    var _Symbol = require$$3$2,
        isSymbol = require$$0$20;

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0;

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = _Symbol ? _Symbol.prototype : undefined,
        symbolToString = _Symbol ? symbolProto.toString : undefined;

    /**
     * Converts `value` to a string if it's not one. An empty string is returned
     * for `null` and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (value == null) {
        return '';
      }
      if (isSymbol(value)) {
        return _Symbol ? symbolToString.call(value) : '';
      }
      var result = value + '';
      return result == '0' && 1 / value == -INFINITY ? '-0' : result;
    }

    module.exports = toString;
    });

    var require$$0$19 = (toString && typeof toString === 'object' && 'default' in toString ? toString['default'] : toString);

    var _stringToPath = __commonjs(function (module) {
    var toString = require$$0$19;

    /** Used to match property names within property paths. */
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

    /** Used to match backslashes in property paths. */
    var reEscapeChar = /\\(\\)?/g;

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    function stringToPath(string) {
      var result = [];
      toString(string).replace(rePropName, function (match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
      });
      return result;
    }

    module.exports = stringToPath;
    });

    var require$$0$18 = (_stringToPath && typeof _stringToPath === 'object' && 'default' in _stringToPath ? _stringToPath['default'] : _stringToPath);

    var _baseToPath = __commonjs(function (module) {
    var isArray = require$$1$6,
        stringToPath = require$$0$18;

    /**
     * The base implementation of `_.toPath` which only converts `value` to a
     * path if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Array} Returns the property path array.
     */
    function baseToPath(value) {
      return isArray(value) ? value : stringToPath(value);
    }

    module.exports = baseToPath;
    });

    var require$$8 = (_baseToPath && typeof _baseToPath === 'object' && 'default' in _baseToPath ? _baseToPath['default'] : _baseToPath);

    var _baseGet = __commonjs(function (module) {
    var baseToPath = require$$8,
        isKey = require$$4$2;

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = isKey(path, object) ? [path + ''] : baseToPath(path);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[path[index++]];
      }
      return index && index == length ? object : undefined;
    }

    module.exports = baseGet;
    });

    var require$$0$17 = (_baseGet && typeof _baseGet === 'object' && 'default' in _baseGet ? _baseGet['default'] : _baseGet);

    var _basePropertyDeep = __commonjs(function (module) {
    var baseGet = require$$0$17;

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new function.
     */
    function basePropertyDeep(path) {
      return function (object) {
        return baseGet(object, path);
      };
    }

    module.exports = basePropertyDeep;
    });

    var require$$1$7 = (_basePropertyDeep && typeof _basePropertyDeep === 'object' && 'default' in _basePropertyDeep ? _basePropertyDeep['default'] : _basePropertyDeep);

    var _baseProperty = __commonjs(function (module) {
    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new function.
     */
    function baseProperty(key) {
      return function (object) {
        return object == null ? undefined : object[key];
      };
    }

    module.exports = baseProperty;
    });

    var require$$0$24 = (_baseProperty && typeof _baseProperty === 'object' && 'default' in _baseProperty ? _baseProperty['default'] : _baseProperty);

    var property = __commonjs(function (module) {
    var baseProperty = require$$0$24,
        basePropertyDeep = require$$1$7,
        isKey = require$$4$2;

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': { 'c': 2 } } },
     *   { 'a': { 'b': { 'c': 1 } } }
     * ];
     *
     * _.map(objects, _.property('a.b.c'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
    }

    module.exports = property;
    });

    var require$$0$16 = (property && typeof property === 'object' && 'default' in property ? property['default'] : property);

    var identity = __commonjs(function (module) {
    /**
     * This method returns the first argument provided to it.
     *
     * @static
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * _.identity(object) === object;
     * // => true
     */
    function identity(value) {
      return value;
    }

    module.exports = identity;
    });

    var require$$0$25 = (identity && typeof identity === 'object' && 'default' in identity ? identity['default'] : identity);

    var get = __commonjs(function (module) {
    var baseGet = require$$0$17;

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined` the `defaultValue` is used in its place.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    module.exports = get;
    });

    var require$$0$29 = (get && typeof get === 'object' && 'default' in get ? get['default'] : get);

    var _baseSlice = __commonjs(function (module) {
    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    module.exports = baseSlice;
    });

    var require$$1$8 = (_baseSlice && typeof _baseSlice === 'object' && 'default' in _baseSlice ? _baseSlice['default'] : _baseSlice);

    var _parent = __commonjs(function (module) {
    var baseSlice = require$$1$8,
        get = require$$0$29;

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length == 1 ? object : get(object, baseSlice(path, 0, -1));
    }

    module.exports = parent;
    });

    var require$$0$28 = (_parent && typeof _parent === 'object' && 'default' in _parent ? _parent['default'] : _parent);

    var last = __commonjs(function (module) {
    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array ? array.length : 0;
      return length ? array[length - 1] : undefined;
    }

    module.exports = last;
    });

    var require$$1$9 = (last && typeof last === 'object' && 'default' in last ? last['default'] : last);

    var isString = __commonjs(function (module) {
    var isArray = require$$1$6,
        isObjectLike = require$$0$21;

    /** `Object#toString` result references. */
    var stringTag = '[object String]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
    }

    module.exports = isString;
    });

    var require$$0$30 = (isString && typeof isString === 'object' && 'default' in isString ? isString['default'] : isString);

    var isLength = __commonjs(function (module) {
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    module.exports = isLength;
    });

    var require$$1$10 = (isLength && typeof isLength === 'object' && 'default' in isLength ? isLength['default'] : isLength);

    var _isIndex = __commonjs(function (module) {
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/;

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return value > -1 && value % 1 == 0 && value < length;
    }

    module.exports = isIndex;
    });

    var require$$1$11 = (_isIndex && typeof _isIndex === 'object' && 'default' in _isIndex ? _isIndex['default'] : _isIndex);

    var isObject = __commonjs(function (module) {
    /**
     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);
      return !!value && (type == 'object' || type == 'function');
    }

    module.exports = isObject;
    });

    var require$$0$33 = (isObject && typeof isObject === 'object' && 'default' in isObject ? isObject['default'] : isObject);

    var isFunction = __commonjs(function (module) {
    var isObject = require$$0$33;

    /** `Object#toString` result references. */
    var funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 8 which returns 'object' for typed array constructors, and
      // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }

    module.exports = isFunction;
    });

    var require$$1$12 = (isFunction && typeof isFunction === 'object' && 'default' in isFunction ? isFunction['default'] : isFunction);

    var _getLength = __commonjs(function (module) {
    var baseProperty = require$$0$24;

    /**
     * Gets the "length" property value of `object`.
     *
     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
     * that affects Safari on at least iOS 8.1-8.3 ARM64.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {*} Returns the "length" value.
     */
    var getLength = baseProperty('length');

    module.exports = getLength;
    });

    var require$$2$8 = (_getLength && typeof _getLength === 'object' && 'default' in _getLength ? _getLength['default'] : _getLength);

    var isArrayLike = __commonjs(function (module) {
    var getLength = require$$2$8,
        isFunction = require$$1$12,
        isLength = require$$1$10;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
        return value != null && !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
    }

    module.exports = isArrayLike;
    });

    var require$$0$32 = (isArrayLike && typeof isArrayLike === 'object' && 'default' in isArrayLike ? isArrayLike['default'] : isArrayLike);

    var isArrayLikeObject = __commonjs(function (module) {
    var isArrayLike = require$$0$32,
        isObjectLike = require$$0$21;

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    module.exports = isArrayLikeObject;
    });

    var require$$0$31 = (isArrayLikeObject && typeof isArrayLikeObject === 'object' && 'default' in isArrayLikeObject ? isArrayLikeObject['default'] : isArrayLikeObject);

    var isArguments = __commonjs(function (module) {
    var isArrayLikeObject = require$$0$31;

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /** Built-in value references. */
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
      return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
    }

    module.exports = isArguments;
    });

    var require$$2$7 = (isArguments && typeof isArguments === 'object' && 'default' in isArguments ? isArguments['default'] : isArguments);

    var _hasPath = __commonjs(function (module) {
    var baseToPath = require$$8,
        isArguments = require$$2$7,
        isArray = require$$1$6,
        isIndex = require$$1$11,
        isKey = require$$4$2,
        isLength = require$$1$10,
        isString = require$$0$30,
        last = require$$1$9,
        parent = require$$0$28;

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      if (object == null) {
        return false;
      }
      var result = hasFunc(object, path);
      if (!result && !isKey(path)) {
        path = baseToPath(path);
        object = parent(object, path);
        if (object != null) {
          path = last(path);
          result = hasFunc(object, path);
        }
      }
      var length = object ? object.length : undefined;
      return result || !!length && isLength(length) && isIndex(path, length) && (isArray(object) || isString(object) || isArguments(object));
    }

    module.exports = hasPath;
    });

    var require$$0$27 = (_hasPath && typeof _hasPath === 'object' && 'default' in _hasPath ? _hasPath['default'] : _hasPath);

    var _baseHasIn = __commonjs(function (module) {
    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return key in Object(object);
    }

    module.exports = baseHasIn;
    });

    var require$$1$13 = (_baseHasIn && typeof _baseHasIn === 'object' && 'default' in _baseHasIn ? _baseHasIn['default'] : _baseHasIn);

    var hasIn = __commonjs(function (module) {
    var baseHasIn = require$$1$13,
        hasPath = require$$0$27;

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b.c');
     * // => true
     *
     * _.hasIn(object, ['a', 'b', 'c']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return hasPath(object, path, baseHasIn);
    }

    module.exports = hasIn;
    });

    var require$$0$26 = (hasIn && typeof hasIn === 'object' && 'default' in hasIn ? hasIn['default'] : hasIn);

    var isTypedArray = __commonjs(function (module) {
    var isLength = require$$1$10,
        isObjectLike = require$$0$21;

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';

    var arrayBufferTag = '[object ArrayBuffer]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';

    /** Used to identify `toStringTag` values of typed arrays. */
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    function isTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
    }

    module.exports = isTypedArray;
    });

    var require$$0$35 = (isTypedArray && typeof isTypedArray === 'object' && 'default' in isTypedArray ? isTypedArray['default'] : isTypedArray);

    var _isHostObject = __commonjs(function (module) {
    /**
     * Checks if `value` is a host object in IE < 9.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
     */
    function isHostObject(value) {
      // Many host objects are `Object` objects that can coerce to strings
      // despite having improperly defined `toString` methods.
      var result = false;
      if (value != null && typeof value.toString != 'function') {
        try {
          result = !!(value + '');
        } catch (e) {}
      }
      return result;
    }

    module.exports = isHostObject;
    });

    var require$$1$14 = (_isHostObject && typeof _isHostObject === 'object' && 'default' in _isHostObject ? _isHostObject['default'] : _isHostObject);

    var isNative = __commonjs(function (module) {
    var isFunction = require$$1$12,
        isHostObject = require$$1$14,
        isObjectLike = require$$0$21;

    /** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

    /** Used to detect host constructors (Safari > 5). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to resolve the decompiled source of functions. */
    var funcToString = Function.prototype.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

    /**
     * Checks if `value` is a native function.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (value == null) {
        return false;
      }
      if (isFunction(value)) {
        return reIsNative.test(funcToString.call(value));
      }
      return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
    }

    module.exports = isNative;
    });

    var require$$0$38 = (isNative && typeof isNative === 'object' && 'default' in isNative ? isNative['default'] : isNative);

    var _getNative = __commonjs(function (module) {
    var isNative = require$$0$38;

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = object == null ? undefined : object[key];
      return isNative(value) ? value : undefined;
    }

    module.exports = getNative;
    });

    var require$$0$37 = (_getNative && typeof _getNative === 'object' && 'default' in _getNative ? _getNative['default'] : _getNative);

    var _Set = __commonjs(function (module) {
    var getNative = require$$0$37,
        root = require$$0$22;

    /* Built-in method references that are verified to be native. */
    var Set = getNative(root, 'Set');

    module.exports = Set;
    });

    var require$$0$36 = (_Set && typeof _Set === 'object' && 'default' in _Set ? _Set['default'] : _Set);

    var _Map = __commonjs(function (module) {
    var getNative = require$$0$37,
        root = require$$0$22;

    /* Built-in method references that are verified to be native. */
    var Map = getNative(root, 'Map');

    module.exports = Map;
    });

    var require$$0$39 = (_Map && typeof _Map === 'object' && 'default' in _Map ? _Map['default'] : _Map);

    var _getTag = __commonjs(function (module) {
    var Map = require$$0$39,
        Set = require$$0$36;

    /** `Object#toString` result references. */
    var mapTag = '[object Map]',
        objectTag = '[object Object]',
        setTag = '[object Set]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to resolve the decompiled source of functions. */
    var funcToString = Function.prototype.toString;

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /** Used to detect maps and sets. */
    var mapCtorString = Map ? funcToString.call(Map) : '',
        setCtorString = Set ? funcToString.call(Set) : '';

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function getTag(value) {
      return objectToString.call(value);
    }

    // Fallback for IE 11 providing `toStringTag` values for maps and sets.
    if (Map && getTag(new Map()) != mapTag || Set && getTag(new Set()) != setTag) {
      getTag = function getTag(value) {
        var result = objectToString.call(value),
            Ctor = result == objectTag ? value.constructor : null,
            ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';

        if (ctorString) {
          if (ctorString == mapCtorString) {
            return mapTag;
          }
          if (ctorString == setCtorString) {
            return setTag;
          }
        }
        return result;
      };
    }

    module.exports = getTag;
    });

    var require$$3$4 = (_getTag && typeof _getTag === 'object' && 'default' in _getTag ? _getTag['default'] : _getTag);

    var _isPrototype = __commonjs(function (module) {
    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

      return value === proto;
    }

    module.exports = isPrototype;
    });

    var require$$0$41 = (_isPrototype && typeof _isPrototype === 'object' && 'default' in _isPrototype ? _isPrototype['default'] : _isPrototype);

    var _baseTimes = __commonjs(function (module) {
    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }

    module.exports = baseTimes;
    });

    var require$$4$4 = (_baseTimes && typeof _baseTimes === 'object' && 'default' in _baseTimes ? _baseTimes['default'] : _baseTimes);

    var _indexKeys = __commonjs(function (module) {
    var baseTimes = require$$4$4,
        isArguments = require$$2$7,
        isArray = require$$1$6,
        isLength = require$$1$10,
        isString = require$$0$30;

    /**
     * Creates an array of index keys for `object` values of arrays,
     * `arguments` objects, and strings, otherwise `null` is returned.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array|null} Returns index keys, else `null`.
     */
    function indexKeys(object) {
      var length = object ? object.length : undefined;
      if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
        return baseTimes(length, String);
      }
      return null;
    }

    module.exports = indexKeys;
    });

    var require$$2$10 = (_indexKeys && typeof _indexKeys === 'object' && 'default' in _indexKeys ? _indexKeys['default'] : _indexKeys);

    var _baseKeys = __commonjs(function (module) {
    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeKeys = Object.keys;

    /**
     * The base implementation of `_.keys` which doesn't skip the constructor
     * property of prototypes or treat sparse arrays as dense.
     *
     * @private
     * @type Function
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      return nativeKeys(Object(object));
    }

    module.exports = baseKeys;
    });

    var require$$4$5 = (_baseKeys && typeof _baseKeys === 'object' && 'default' in _baseKeys ? _baseKeys['default'] : _baseKeys);

    var _baseHas = __commonjs(function (module) {
    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Built-in value references. */
    var getPrototypeOf = Object.getPrototypeOf;

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
      // that are composed entirely of index properties, return `false` for
      // `hasOwnProperty` checks of them.
      return hasOwnProperty.call(object, key) || (typeof object === 'undefined' ? 'undefined' : babelHelpers.typeof(object)) == 'object' && key in object && getPrototypeOf(object) === null;
    }

    module.exports = baseHas;
    });

    var require$$5$1 = (_baseHas && typeof _baseHas === 'object' && 'default' in _baseHas ? _baseHas['default'] : _baseHas);

    var keys = __commonjs(function (module) {
    var baseHas = require$$5$1,
        baseKeys = require$$4$5,
        indexKeys = require$$2$10,
        isArrayLike = require$$0$32,
        isIndex = require$$1$11,
        isPrototype = require$$0$41;

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      var isProto = isPrototype(object);
      if (!(isProto || isArrayLike(object))) {
        return baseKeys(object);
      }
      var indexes = indexKeys(object),
          skipIndexes = !!indexes,
          result = indexes || [],
          length = result.length;

      for (var key in object) {
        if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
          result.push(key);
        }
      }
      return result;
    }

    module.exports = keys;
    });

    var require$$0$40 = (keys && typeof keys === 'object' && 'default' in keys ? keys['default'] : keys);

    var _equalObjects = __commonjs(function (module) {
    var baseHas = require$$5$1,
        keys = require$$0$40;

    /** Used to compose bitmasks for comparison styles. */
    var PARTIAL_COMPARE_FLAG = 2;

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
          objProps = keys(object),
          objLength = objProps.length,
          othProps = keys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : baseHas(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      return result;
    }

    module.exports = equalObjects;
    });

    var require$$4$3 = (_equalObjects && typeof _equalObjects === 'object' && 'default' in _equalObjects ? _equalObjects['default'] : _equalObjects);

    var _setToArray = __commonjs(function (module) {
    /**
     * Converts `set` to an array.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the converted array.
     */
    function setToArray(set) {
      var index = -1,
          result = Array(set.size);

      set.forEach(function (value) {
        result[++index] = value;
      });
      return result;
    }

    module.exports = setToArray;
    });

    var require$$0$42 = (_setToArray && typeof _setToArray === 'object' && 'default' in _setToArray ? _setToArray['default'] : _setToArray);

    var _mapToArray = __commonjs(function (module) {
    /**
     * Converts `map` to an array.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the converted array.
     */
    function mapToArray(map) {
      var index = -1,
          result = Array(map.size);

      map.forEach(function (value, key) {
        result[++index] = [key, value];
      });
      return result;
    }

    module.exports = mapToArray;
    });

    var require$$1$15 = (_mapToArray && typeof _mapToArray === 'object' && 'default' in _mapToArray ? _mapToArray['default'] : _mapToArray);

    var _Uint8Array = __commonjs(function (module) {
    var root = require$$0$22;

    /** Built-in value references. */
    var Uint8Array = root.Uint8Array;

    module.exports = Uint8Array;
    });

    var require$$2$11 = (_Uint8Array && typeof _Uint8Array === 'object' && 'default' in _Uint8Array ? _Uint8Array['default'] : _Uint8Array);

    var _equalByTag = __commonjs(function (module) {
    var _Symbol = require$$3$2,
        Uint8Array = require$$2$11,
        mapToArray = require$$1$15,
        setToArray = require$$0$42;

    /** Used to compose bitmasks for comparison styles. */
    var UNORDERED_COMPARE_FLAG = 1,
        PARTIAL_COMPARE_FLAG = 2;

    /** `Object#toString` result references. */
    var boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        symbolTag = '[object Symbol]';

    var arrayBufferTag = '[object ArrayBuffer]';

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = _Symbol ? _Symbol.prototype : undefined,
        symbolValueOf = _Symbol ? symbolProto.valueOf : undefined;

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, equalFunc, customizer, bitmask) {
      switch (tag) {
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
          return +object == +other;

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case numberTag:
          // Treat `NaN` vs. `NaN` as equal.
          return object != +object ? other != +other : object == +other;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings primitives and string
          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
          return object == other + '';

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
          convert || (convert = setToArray);

          // Recursively compare objects (susceptible to call stack limits).
          return (isPartial || object.size == other.size) && equalFunc(convert(object), convert(other), customizer, bitmask | UNORDERED_COMPARE_FLAG);

        case symbolTag:
          return !!_Symbol && symbolValueOf.call(object) == symbolValueOf.call(other);
      }
      return false;
    }

    module.exports = equalByTag;
    });

    var require$$5$2 = (_equalByTag && typeof _equalByTag === 'object' && 'default' in _equalByTag ? _equalByTag['default'] : _equalByTag);

    var _arraySome = __commonjs(function (module) {
    /**
     * A specialized version of `_.some` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check, else `false`.
     */
    function arraySome(array, predicate) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }

    module.exports = arraySome;
    });

    var require$$0$43 = (_arraySome && typeof _arraySome === 'object' && 'default' in _arraySome ? _arraySome['default'] : _arraySome);

    var _equalArrays = __commonjs(function (module) {
    var arraySome = require$$0$43;

    /** Used to compose bitmasks for comparison styles. */
    var UNORDERED_COMPARE_FLAG = 1,
        PARTIAL_COMPARE_FLAG = 2;

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
     * @param {Object} [stack] Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
      var index = -1,
          isPartial = bitmask & PARTIAL_COMPARE_FLAG,
          isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked) {
        return stacked == other;
      }
      var result = true;
      stack.set(array, other);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (isUnordered) {
          if (!arraySome(other, function (othValue) {
            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      return result;
    }

    module.exports = equalArrays;
    });

    var require$$6$1 = (_equalArrays && typeof _equalArrays === 'object' && 'default' in _equalArrays ? _equalArrays['default'] : _equalArrays);

    var eq = __commonjs(function (module) {
    /**
     * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'user': 'fred' };
     * var other = { 'user': 'fred' };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }

    module.exports = eq;
    });

    var require$$0$46 = (eq && typeof eq === 'object' && 'default' in eq ? eq['default'] : eq);

    var _assocIndexOf = __commonjs(function (module) {
    var eq = require$$0$46;

    /**
     * Gets the index at which the first occurrence of `key` is found in `array`
     * of key-value pairs.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    module.exports = assocIndexOf;
    });

    var require$$0$45 = (_assocIndexOf && typeof _assocIndexOf === 'object' && 'default' in _assocIndexOf ? _assocIndexOf['default'] : _assocIndexOf);

    var _assocSet = __commonjs(function (module) {
    var assocIndexOf = require$$0$45;

    /**
     * Sets the associative array `key` to `value`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     */
    function assocSet(array, key, value) {
      var index = assocIndexOf(array, key);
      if (index < 0) {
        array.push([key, value]);
      } else {
        array[index][1] = value;
      }
    }

    module.exports = assocSet;
    });

    var require$$2$12 = (_assocSet && typeof _assocSet === 'object' && 'default' in _assocSet ? _assocSet['default'] : _assocSet);

    var _isKeyable = __commonjs(function (module) {
    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);
      return type == 'number' || type == 'boolean' || type == 'string' && value !== '__proto__' || value == null;
    }

    module.exports = isKeyable;
    });

    var require$$0$48 = (_isKeyable && typeof _isKeyable === 'object' && 'default' in _isKeyable ? _isKeyable['default'] : _isKeyable);

    var _nativeCreate = __commonjs(function (module) {
    var getNative = require$$0$37;

    /* Built-in method references that are verified to be native. */
    var nativeCreate = getNative(Object, 'create');

    module.exports = nativeCreate;
    });

    var require$$0$49 = (_nativeCreate && typeof _nativeCreate === 'object' && 'default' in _nativeCreate ? _nativeCreate['default'] : _nativeCreate);

    var _hashSet = __commonjs(function (module) {
    var nativeCreate = require$$0$49;

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     */
    function hashSet(hash, key, value) {
      hash[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    }

    module.exports = hashSet;
    });

    var require$$1$18 = (_hashSet && typeof _hashSet === 'object' && 'default' in _hashSet ? _hashSet['default'] : _hashSet);

    var _mapSet = __commonjs(function (module) {
    var Map = require$$0$39,
        assocSet = require$$2$12,
        hashSet = require$$1$18,
        isKeyable = require$$0$48;

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache object.
     */
    function mapSet(key, value) {
      var data = this.__data__;
      if (isKeyable(key)) {
        hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
      } else if (Map) {
        data.map.set(key, value);
      } else {
        assocSet(data.map, key, value);
      }
      return this;
    }

    module.exports = mapSet;
    });

    var require$$0$47 = (_mapSet && typeof _mapSet === 'object' && 'default' in _mapSet ? _mapSet['default'] : _mapSet);

    var _hashHas = __commonjs(function (module) {
    var nativeCreate = require$$0$49;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @param {Object} hash The hash to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(hash, key) {
      return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
    }

    module.exports = hashHas;
    });

    var require$$0$50 = (_hashHas && typeof _hashHas === 'object' && 'default' in _hashHas ? _hashHas['default'] : _hashHas);

    var _assocHas = __commonjs(function (module) {
    var assocIndexOf = require$$0$45;

    /**
     * Checks if an associative array value for `key` exists.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function assocHas(array, key) {
      return assocIndexOf(array, key) > -1;
    }

    module.exports = assocHas;
    });

    var require$$0$51 = (_assocHas && typeof _assocHas === 'object' && 'default' in _assocHas ? _assocHas['default'] : _assocHas);

    var _mapHas = __commonjs(function (module) {
    var Map = require$$0$39,
        assocHas = require$$0$51,
        hashHas = require$$0$50,
        isKeyable = require$$0$48;

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapHas(key) {
      var data = this.__data__;
      if (isKeyable(key)) {
        return hashHas(typeof key == 'string' ? data.string : data.hash, key);
      }
      return Map ? data.map.has(key) : assocHas(data.map, key);
    }

    module.exports = mapHas;
    });

    var require$$1$19 = (_mapHas && typeof _mapHas === 'object' && 'default' in _mapHas ? _mapHas['default'] : _mapHas);

    var _hashGet = __commonjs(function (module) {
    var nativeCreate = require$$0$49;

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @param {Object} hash The hash to query.
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(hash, key) {
      if (nativeCreate) {
        var result = hash[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
    }

    module.exports = hashGet;
    });

    var require$$1$20 = (_hashGet && typeof _hashGet === 'object' && 'default' in _hashGet ? _hashGet['default'] : _hashGet);

    var _assocGet = __commonjs(function (module) {
    var assocIndexOf = require$$0$45;

    /**
     * Gets the associative array value for `key`.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function assocGet(array, key) {
      var index = assocIndexOf(array, key);
      return index < 0 ? undefined : array[index][1];
    }

    module.exports = assocGet;
    });

    var require$$0$52 = (_assocGet && typeof _assocGet === 'object' && 'default' in _assocGet ? _assocGet['default'] : _assocGet);

    var _mapGet = __commonjs(function (module) {
    var Map = require$$0$39,
        assocGet = require$$0$52,
        hashGet = require$$1$20,
        isKeyable = require$$0$48;

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapGet(key) {
      var data = this.__data__;
      if (isKeyable(key)) {
        return hashGet(typeof key == 'string' ? data.string : data.hash, key);
      }
      return Map ? data.map.get(key) : assocGet(data.map, key);
    }

    module.exports = mapGet;
    });

    var require$$2$13 = (_mapGet && typeof _mapGet === 'object' && 'default' in _mapGet ? _mapGet['default'] : _mapGet);

    var _hashDelete = __commonjs(function (module) {
    var hashHas = require$$0$50;

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(hash, key) {
      return hashHas(hash, key) && delete hash[key];
    }

    module.exports = hashDelete;
    });

    var require$$1$21 = (_hashDelete && typeof _hashDelete === 'object' && 'default' in _hashDelete ? _hashDelete['default'] : _hashDelete);

    var _assocDelete = __commonjs(function (module) {
    var assocIndexOf = require$$0$45;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype;

    /** Built-in value references. */
    var splice = arrayProto.splice;

    /**
     * Removes `key` and its value from the associative array.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function assocDelete(array, key) {
      var index = assocIndexOf(array, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = array.length - 1;
      if (index == lastIndex) {
        array.pop();
      } else {
        splice.call(array, index, 1);
      }
      return true;
    }

    module.exports = assocDelete;
    });

    var require$$0$53 = (_assocDelete && typeof _assocDelete === 'object' && 'default' in _assocDelete ? _assocDelete['default'] : _assocDelete);

    var _mapDelete = __commonjs(function (module) {
    var Map = require$$0$39,
        assocDelete = require$$0$53,
        hashDelete = require$$1$21,
        isKeyable = require$$0$48;

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapDelete(key) {
      var data = this.__data__;
      if (isKeyable(key)) {
        return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
      }
      return Map ? data.map['delete'](key) : assocDelete(data.map, key);
    }

    module.exports = mapDelete;
    });

    var require$$3$5 = (_mapDelete && typeof _mapDelete === 'object' && 'default' in _mapDelete ? _mapDelete['default'] : _mapDelete);

    var _Hash = __commonjs(function (module) {
    var nativeCreate = require$$0$49;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Creates an hash object.
     *
     * @private
     * @returns {Object} Returns the new hash object.
     */
    function Hash() {}

    // Avoid inheriting from `Object.prototype` when possible.
    Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;

    module.exports = Hash;
    });

    var require$$1$22 = (_Hash && typeof _Hash === 'object' && 'default' in _Hash ? _Hash['default'] : _Hash);

    var _mapClear = __commonjs(function (module) {
    var Hash = require$$1$22,
        Map = require$$0$39;

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapClear() {
      this.__data__ = { 'hash': new Hash(), 'map': Map ? new Map() : [], 'string': new Hash() };
    }

    module.exports = mapClear;
    });

    var require$$4$6 = (_mapClear && typeof _mapClear === 'object' && 'default' in _mapClear ? _mapClear['default'] : _mapClear);

    var _MapCache = __commonjs(function (module) {
    var mapClear = require$$4$6,
        mapDelete = require$$3$5,
        mapGet = require$$2$13,
        mapHas = require$$1$19,
        mapSet = require$$0$47;

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @param {Array} [values] The values to cache.
     */
    function MapCache(values) {
        var index = -1,
            length = values ? values.length : 0;

        this.clear();
        while (++index < length) {
            var entry = values[index];
            this.set(entry[0], entry[1]);
        }
    }

    // Add functions to the `MapCache`.
    MapCache.prototype.clear = mapClear;
    MapCache.prototype['delete'] = mapDelete;
    MapCache.prototype.get = mapGet;
    MapCache.prototype.has = mapHas;
    MapCache.prototype.set = mapSet;

    module.exports = MapCache;
    });

    var require$$1$17 = (_MapCache && typeof _MapCache === 'object' && 'default' in _MapCache ? _MapCache['default'] : _MapCache);

    var _stackSet = __commonjs(function (module) {
    var MapCache = require$$1$17,
        assocSet = require$$2$12;

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache object.
     */
    function stackSet(key, value) {
      var data = this.__data__,
          array = data.array;

      if (array) {
        if (array.length < LARGE_ARRAY_SIZE - 1) {
          assocSet(array, key, value);
        } else {
          data.array = null;
          data.map = new MapCache(array);
        }
      }
      var map = data.map;
      if (map) {
        map.set(key, value);
      }
      return this;
    }

    module.exports = stackSet;
    });

    var require$$0$44 = (_stackSet && typeof _stackSet === 'object' && 'default' in _stackSet ? _stackSet['default'] : _stackSet);

    var _stackHas = __commonjs(function (module) {
    var assocHas = require$$0$51;

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      var data = this.__data__,
          array = data.array;

      return array ? assocHas(array, key) : data.map.has(key);
    }

    module.exports = stackHas;
    });

    var require$$1$23 = (_stackHas && typeof _stackHas === 'object' && 'default' in _stackHas ? _stackHas['default'] : _stackHas);

    var _stackGet = __commonjs(function (module) {
    var assocGet = require$$0$52;

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      var data = this.__data__,
          array = data.array;

      return array ? assocGet(array, key) : data.map.get(key);
    }

    module.exports = stackGet;
    });

    var require$$2$14 = (_stackGet && typeof _stackGet === 'object' && 'default' in _stackGet ? _stackGet['default'] : _stackGet);

    var _stackDelete = __commonjs(function (module) {
    var assocDelete = require$$0$53;

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          array = data.array;

      return array ? assocDelete(array, key) : data.map['delete'](key);
    }

    module.exports = stackDelete;
    });

    var require$$3$6 = (_stackDelete && typeof _stackDelete === 'object' && 'default' in _stackDelete ? _stackDelete['default'] : _stackDelete);

    var _stackClear = __commonjs(function (module) {
    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = { 'array': [], 'map': null };
    }

    module.exports = stackClear;
    });

    var require$$4$7 = (_stackClear && typeof _stackClear === 'object' && 'default' in _stackClear ? _stackClear['default'] : _stackClear);

    var _Stack = __commonjs(function (module) {
    var stackClear = require$$4$7,
        stackDelete = require$$3$6,
        stackGet = require$$2$14,
        stackHas = require$$1$23,
        stackSet = require$$0$44;

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @param {Array} [values] The values to cache.
     */
    function Stack(values) {
        var index = -1,
            length = values ? values.length : 0;

        this.clear();
        while (++index < length) {
            var entry = values[index];
            this.set(entry[0], entry[1]);
        }
    }

    // Add functions to the `Stack` cache.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    module.exports = Stack;
    });

    var require$$1$16 = (_Stack && typeof _Stack === 'object' && 'default' in _Stack ? _Stack['default'] : _Stack);

    var _baseIsEqualDeep = __commonjs(function (module) {
    var Stack = require$$1$16,
        equalArrays = require$$6$1,
        equalByTag = require$$5$2,
        equalObjects = require$$4$3,
        getTag = require$$3$4,
        isArray = require$$1$6,
        isHostObject = require$$1$14,
        isTypedArray = require$$0$35;

    /** Used to compose bitmasks for comparison styles. */
    var PARTIAL_COMPARE_FLAG = 2;

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        objectTag = '[object Object]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = arrayTag,
          othTag = arrayTag;

      if (!objIsArr) {
        objTag = getTag(object);
        if (objTag == argsTag) {
          objTag = objectTag;
        } else if (objTag != objectTag) {
          objIsArr = isTypedArray(object);
        }
      }
      if (!othIsArr) {
        othTag = getTag(other);
        if (othTag == argsTag) {
          othTag = objectTag;
        } else if (othTag != objectTag) {
          othIsArr = isTypedArray(other);
        }
      }
      var objIsObj = objTag == objectTag && !isHostObject(object),
          othIsObj = othTag == objectTag && !isHostObject(other),
          isSameTag = objTag == othTag;

      if (isSameTag && !(objIsArr || objIsObj)) {
        return equalByTag(object, other, objTag, equalFunc, customizer, bitmask);
      }
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      if (!isPartial) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, bitmask, stack);
    }

    module.exports = baseIsEqualDeep;
    });

    var require$$2$9 = (_baseIsEqualDeep && typeof _baseIsEqualDeep === 'object' && 'default' in _baseIsEqualDeep ? _baseIsEqualDeep['default'] : _baseIsEqualDeep);

    var _baseIsEqual = __commonjs(function (module) {
    var baseIsEqualDeep = require$$2$9,
        isObject = require$$0$33,
        isObjectLike = require$$0$21;

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {boolean} [bitmask] The bitmask of comparison flags.
     *  The bitmask may be composed of the following flags:
     *     1 - Unordered comparison
     *     2 - Partial comparison
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, customizer, bitmask, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
    }

    module.exports = baseIsEqual;
    });

    var require$$0$34 = (_baseIsEqual && typeof _baseIsEqual === 'object' && 'default' in _baseIsEqual ? _baseIsEqual['default'] : _baseIsEqual);

    var _baseMatchesProperty = __commonjs(function (module) {
    var baseIsEqual = require$$0$34,
        get = require$$0$29,
        hasIn = require$$0$26;

    /** Used to compose bitmasks for comparison styles. */
    var UNORDERED_COMPARE_FLAG = 1,
        PARTIAL_COMPARE_FLAG = 2;

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new function.
     */
    function baseMatchesProperty(path, srcValue) {
        return function (object) {
            var objValue = get(object, path);
            return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
        };
    }

    module.exports = baseMatchesProperty;
    });

    var require$$3$3 = (_baseMatchesProperty && typeof _baseMatchesProperty === 'object' && 'default' in _baseMatchesProperty ? _baseMatchesProperty['default'] : _baseMatchesProperty);

    var _arrayMap = __commonjs(function (module) {
    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array.length,
          result = Array(length);

      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }

    module.exports = arrayMap;
    });

    var require$$2$15 = (_arrayMap && typeof _arrayMap === 'object' && 'default' in _arrayMap ? _arrayMap['default'] : _arrayMap);

    var _baseToPairs = __commonjs(function (module) {
    var arrayMap = require$$2$15;

    /**
     * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
     * of key-value pairs for `object` corresponding to the property names of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the new array of key-value pairs.
     */
    function baseToPairs(object, props) {
      return arrayMap(props, function (key) {
        return [key, object[key]];
      });
    }

    module.exports = baseToPairs;
    });

    var require$$1$24 = (_baseToPairs && typeof _baseToPairs === 'object' && 'default' in _baseToPairs ? _baseToPairs['default'] : _baseToPairs);

    var toPairs = __commonjs(function (module) {
    var baseToPairs = require$$1$24,
        keys = require$$0$40;

    /**
     * Creates an array of own enumerable key-value pairs for `object`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the new array of key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    function toPairs(object) {
      return baseToPairs(object, keys(object));
    }

    module.exports = toPairs;
    });

    var require$$0$55 = (toPairs && typeof toPairs === 'object' && 'default' in toPairs ? toPairs['default'] : toPairs);

    var _isStrictComparable = __commonjs(function (module) {
    var isObject = require$$0$33;

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    module.exports = isStrictComparable;
    });

    var require$$1$25 = (_isStrictComparable && typeof _isStrictComparable === 'object' && 'default' in _isStrictComparable ? _isStrictComparable['default'] : _isStrictComparable);

    var _getMatchData = __commonjs(function (module) {
    var isStrictComparable = require$$1$25,
        toPairs = require$$0$55;

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = toPairs(object),
          length = result.length;

      while (length--) {
        result[length][2] = isStrictComparable(result[length][1]);
      }
      return result;
    }

    module.exports = getMatchData;
    });

    var require$$0$54 = (_getMatchData && typeof _getMatchData === 'object' && 'default' in _getMatchData ? _getMatchData['default'] : _getMatchData);

    var _baseIsMatch = __commonjs(function (module) {
    var Stack = require$$1$16,
        baseIsEqual = require$$0$34;

    /** Used to compose bitmasks for comparison styles. */
    var UNORDERED_COMPARE_FLAG = 1,
        PARTIAL_COMPARE_FLAG = 2;

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack(),
              result = customizer ? customizer(objValue, srcValue, key, object, source, stack) : undefined;

          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }

    module.exports = baseIsMatch;
    });

    var require$$1$26 = (_baseIsMatch && typeof _baseIsMatch === 'object' && 'default' in _baseIsMatch ? _baseIsMatch['default'] : _baseIsMatch);

    var _baseMatches = __commonjs(function (module) {
    var baseIsMatch = require$$1$26,
        getMatchData = require$$0$54;

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        var key = matchData[0][0],
            value = matchData[0][1];

        return function (object) {
          if (object == null) {
            return false;
          }
          return object[key] === value && (value !== undefined || key in Object(object));
        };
      }
      return function (object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    module.exports = baseMatches;
    });

    var require$$4$8 = (_baseMatches && typeof _baseMatches === 'object' && 'default' in _baseMatches ? _baseMatches['default'] : _baseMatches);

    var _baseIteratee = __commonjs(function (module) {
    var baseMatches = require$$4$8,
        baseMatchesProperty = require$$3$3,
        identity = require$$0$25,
        isArray = require$$1$6,
        property = require$$0$16;

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      var type = typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);
      if (type == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (type == 'object') {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }

    module.exports = baseIteratee;
    });

    var require$$0$15 = (_baseIteratee && typeof _baseIteratee === 'object' && 'default' in _baseIteratee ? _baseIteratee['default'] : _baseIteratee);

    var _createBaseEach = __commonjs(function (module) {
    var isArrayLike = require$$0$32;

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function (collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    module.exports = createBaseEach;
    });

    var require$$0$56 = (_createBaseEach && typeof _createBaseEach === 'object' && 'default' in _createBaseEach ? _createBaseEach['default'] : _createBaseEach);

    var _createBaseFor = __commonjs(function (module) {
    /**
     * Creates a base function for methods like `_.forIn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function (object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    module.exports = createBaseFor;
    });

    var require$$0$57 = (_createBaseFor && typeof _createBaseFor === 'object' && 'default' in _createBaseFor ? _createBaseFor['default'] : _createBaseFor);

    var _baseFor = __commonjs(function (module) {
    var createBaseFor = require$$0$57;

    /**
     * The base implementation of `baseForIn` and `baseForOwn` which iterates
     * over `object` properties returned by `keysFunc` invoking `iteratee` for
     * each property. Iteratee functions may exit iteration early by explicitly
     * returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    module.exports = baseFor;
    });

    var require$$1$29 = (_baseFor && typeof _baseFor === 'object' && 'default' in _baseFor ? _baseFor['default'] : _baseFor);

    var _baseForOwn = __commonjs(function (module) {
    var baseFor = require$$1$29,
        keys = require$$0$40;

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    module.exports = baseForOwn;
    });

    var require$$1$28 = (_baseForOwn && typeof _baseForOwn === 'object' && 'default' in _baseForOwn ? _baseForOwn['default'] : _baseForOwn);

    var _baseEach = __commonjs(function (module) {
    var baseForOwn = require$$1$28,
        createBaseEach = require$$0$56;

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    module.exports = baseEach;
    });

    var require$$1$27 = (_baseEach && typeof _baseEach === 'object' && 'default' in _baseEach ? _baseEach['default'] : _baseEach);

    var _baseFilter = __commonjs(function (module) {
    var baseEach = require$$1$27;

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function (value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    module.exports = baseFilter;
    });

    var require$$2$16 = (_baseFilter && typeof _baseFilter === 'object' && 'default' in _baseFilter ? _baseFilter['default'] : _baseFilter);

    var _arrayFilter = __commonjs(function (module) {
    /**
     * A specialized version of `_.filter` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function arrayFilter(array, predicate) {
      var index = -1,
          length = array.length,
          resIndex = -1,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[++resIndex] = value;
        }
      }
      return result;
    }

    module.exports = arrayFilter;
    });

    var require$$3$7 = (_arrayFilter && typeof _arrayFilter === 'object' && 'default' in _arrayFilter ? _arrayFilter['default'] : _arrayFilter);

    var reject = __commonjs(function (module) {
    var arrayFilter = require$$3$7,
        baseFilter = require$$2$16,
        baseIteratee = require$$0$15,
        isArray = require$$1$6;

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      predicate = baseIteratee(predicate, 3);
      return func(collection, function (value, index, collection) {
        return !predicate(value, index, collection);
      });
    }

    module.exports = reject;
    });

    var _reject = (reject && typeof reject === 'object' && 'default' in reject ? reject['default'] : reject);

    function splitPath(path) {
      return Array.isArray(path) ? path : _reject(path.split('.'), function (x) {
        return !x;
      });
    }

    /* eslint no-shadow:0, no-param-reassign:0 */
    var _ = '@@updeep/placeholder';

    function countArguments(args, max) {
      var n = args.length;
      if (n > max) n = max;

      while (args[n - 1] === _) {
        n--;
      }

      return n;
    }

    function curry1(fn) {
      return function curried(a) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var b = args[0];
        var c = args[1];

        var n = countArguments(arguments);

        if (n >= 1) return fn(a, b, c);
        return curried;
      };
    }

    function curry2(fn) {
      return function curried(a, b) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        var c = args[0];
        var d = args[1];

        var n = countArguments(arguments, 2);

        if (b === _ || c === _ || d === _) {
          throw new Error('Can only use placeholder on first argument of this function.');
        }

        if (n >= 2) {
          if (a === _) return curry1(function (a, c, d) {
            return fn(a, b, c, d);
          });
          return fn(a, b, c, d);
        }

        if (n === 1) return curry1(function (b, c, d) {
          return fn(a, b, c, d);
        });
        return curried;
      };
    }

    function curry3(fn) {
      return function curried(a, b, c) {
        for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          args[_key3 - 3] = arguments[_key3];
        }

        var d = args[0];
        var e = args[1];

        var n = countArguments(arguments, 3);

        if (c === _ || d === _ || e === _) {
          throw new Error('Can only use placeholder on first or second argument of this function.');
        }

        if (n >= 3) {
          if (a === _) {
            if (b === _) return curry2(function (a, b, d, e) {
              return fn(a, b, c, d, e);
            });
            return curry1(function (a, d, e) {
              return fn(a, b, c, d, e);
            });
          }
          if (b === _) return curry1(function (b, d, e) {
            return fn(a, b, c, d, e);
          });
          return fn(a, b, c, d, e);
        }

        if (n === 2) {
          if (a === _) return curry2(function (a, c, d, e) {
            return fn(a, b, c, d, e);
          });
          return curry1(function (c, d, e) {
            return fn(a, b, c, d, e);
          });
        }

        if (n === 1) return curry2(function (b, c, d, e) {
          return fn(a, b, c, d, e);
        });

        return curried;
      };
    }

    function curry4(fn) {
      return function curried(a, b, c, d) {
        for (var _len4 = arguments.length, args = Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {
          args[_key4 - 4] = arguments[_key4];
        }

        var e = args[0];
        var f = args[1];

        var n = countArguments(arguments, 4);

        if (d === _ || e === _ || f === _) {
          throw new Error('Can only use placeholder on first, second or third argument of this function.');
        }

        if (n >= 4) {
          if (a === _) {
            if (b === _) {
              if (c === _) return curry3(function (a, b, c, e, f) {
                return fn(a, b, c, d, e, f);
              });
              return curry2(function (a, b, e, f) {
                return fn(a, b, c, d, e, f);
              });
            }
            if (c === _) return curry2(function (a, c, e, f) {
              return fn(a, b, c, d, e, f);
            });
            return curry1(function (a, e, f) {
              return fn(a, b, c, d, e, f);
            });
          }
          if (b === _) {
            if (c === _) return curry2(function (b, c, e, f) {
              return fn(a, b, c, d, e, f);
            });
            return curry1(function (b, e, f) {
              return fn(a, b, c, d, e, f);
            });
          }
          if (c === _) return curry1(function (c, e, f) {
            return fn(a, b, c, d, e, f);
          });
          return fn(a, b, c, d, e, f);
        }

        if (n === 3) {
          if (a === _) {
            if (b === _) return curry3(function (a, b, d, e, f) {
              return fn(a, b, c, d, e, f);
            });
            return curry2(function (a, d, e, f) {
              return fn(a, b, c, d, e, f);
            });
          }
          if (b === _) return curry2(function (b, d, e, f) {
            return fn(a, b, c, d, e, f);
          });
          return curry1(function (d, e, f) {
            return fn(a, b, c, d, e, f);
          });
        }

        if (n === 2) {
          if (a === _) return curry3(function (a, c, d, e, f) {
            return fn(a, b, c, d, e, f);
          });
          return curry2(function (c, d, e, f) {
            return fn(a, b, c, d, e, f);
          });
        }

        if (n === 1) return curry3(function (b, c, d, e, f) {
          return fn(a, b, c, d, e, f);
        });
        return curried;
      };
    }

    function curry(fn) {
      var length = arguments.length <= 1 || arguments[1] === undefined ? fn.length : arguments[1];

      return [fn, curry1, curry2, curry3, curry4][length](fn);
    }

    function is(path, predicate, object) {
      var parts = splitPath(path);

      var rest = object;
      for (var i = 0; i < parts.length; ++i) {
        if (typeof rest === 'undefined') return false;
        var part = parts[i];
        rest = rest[part];
      }

      if (typeof predicate === 'function') {
        return predicate(rest);
      }

      return predicate === rest;
    }

    var is$1 = curry(is);

    function wrap(func) {
      var length = arguments.length <= 1 || arguments[1] === undefined ? func.length : arguments[1];

      return curry(function () {
        return freeze(func.apply(undefined, arguments));
      }, length);
    }

    var isPlainObject = __commonjs(function (module) {
    var isHostObject = require$$1$14,
        isObjectLike = require$$0$21;

    /** `Object#toString` result references. */
    var objectTag = '[object Object]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to resolve the decompiled source of functions. */
    var funcToString = Function.prototype.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /** Built-in value references. */
    var getPrototypeOf = Object.getPrototypeOf;

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
      }
      var proto = objectProto;
      if (typeof value.constructor == 'function') {
        proto = getPrototypeOf(value);
      }
      if (proto === null) {
        return true;
      }
      var Ctor = proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }

    module.exports = isPlainObject;
    });

    var isPlainObject$1 = (isPlainObject && typeof isPlainObject === 'object' && 'default' in isPlainObject ? isPlainObject['default'] : isPlainObject);

    function isEmpty(object) {
      return !Object.keys(object).length;
    }

    function reduce(object, callback, initialValue) {
      return Object.keys(object).reduce(function (acc, key) {
        return callback(acc, object[key], key);
      }, initialValue);
    }

    function resolveUpdates(updates, object) {
      return reduce(updates, function (acc, value, key) {
        var updatedValue = value;

        if (!Array.isArray(value) && value !== null && (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) === 'object') {
          updatedValue = update(value, object[key]); // eslint-disable-line no-use-before-define
        } else if (typeof value === 'function') {
            updatedValue = value(object[key]);
          }

        if (object[key] !== updatedValue) {
          acc[key] = updatedValue; // eslint-disable-line no-param-reassign
        }

        return acc;
      }, {});
    }

    function updateArray(updates, object) {
      var newArray = [].concat(babelHelpers.toConsumableArray(object));

      Object.keys(updates).forEach(function (key) {
        newArray[key] = updates[key];
      });

      return newArray;
    }

    /**
     * Recursively update an object or array.
     *
     * Can update with values:
     * update({ foo: 3 }, { foo: 1, bar: 2 });
     * // => { foo: 3, bar: 2 }
     *
     * Or with a function:
     * update({ foo: x => (x + 1) }, { foo: 2 });
     * // => { foo: 3 }
     *
     * @function
     * @name update
     * @param {Object|Function} updates
     * @param {Object|Array}    object to update
     * @return {Object|Array}   new object with modifications
     */
    function update(updates, object) {
      if (typeof updates === 'function') {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        return updates.apply(undefined, [object].concat(args));
      }

      if (!isPlainObject$1(updates)) {
        return updates;
      }

      var defaultedObject = typeof object === 'undefined' || object === null ? {} : object;

      var resolvedUpdates = resolveUpdates(updates, defaultedObject);

      if (isEmpty(resolvedUpdates)) {
        return defaultedObject;
      }

      if (Array.isArray(defaultedObject)) {
        return updateArray(resolvedUpdates, defaultedObject);
      }

      return babelHelpers.extends({}, defaultedObject, resolvedUpdates);
    }

    var update$1 = wrap(update, 2);

    function updateIfElse(predicate, trueUpdates, falseUpdates, object) {
      var test = typeof predicate === 'function' ? predicate(object) : predicate;

      var updates = test ? trueUpdates : falseUpdates;

      return update$1(updates, object);
    }

    var ifElse = wrap(updateIfElse);

    var _if = curry(function (predicate, trueUpdates, object) {
      return ifElse(predicate, trueUpdates, function (x) {
        return x;
      }, object);
    });

    var _toFunction = __commonjs(function (module) {
    var identity = require$$0$25;

    /**
     * Converts `value` to a function if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Function} Returns the function.
     */
    function toFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    module.exports = toFunction;
    });

    var require$$0$58 = (_toFunction && typeof _toFunction === 'object' && 'default' in _toFunction ? _toFunction['default'] : _toFunction);

    var _arrayEach = __commonjs(function (module) {
    /**
     * A specialized version of `_.forEach` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEach(array, iteratee) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }

    module.exports = arrayEach;
    });

    var require$$3$8 = (_arrayEach && typeof _arrayEach === 'object' && 'default' in _arrayEach ? _arrayEach['default'] : _arrayEach);

    var forEach = __commonjs(function (module) {
    var arrayEach = require$$3$8,
        baseEach = require$$1$27,
        isArray = require$$1$6,
        toFunction = require$$0$58;

    /**
     * Iterates over elements of `collection` invoking `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length" property
     * are iterated like arrays. To avoid this behavior use `_.forIn` or `_.forOwn`
     * for object iteration.
     *
     * @static
     * @memberOf _
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @example
     *
     * _([1, 2]).forEach(function(value) {
     *   console.log(value);
     * });
     * // => logs `1` then `2`
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'a' then 'b' (iteration order is not guaranteed)
     */
    function forEach(collection, iteratee) {
        return typeof iteratee == 'function' && isArray(collection) ? arrayEach(collection, iteratee) : baseEach(collection, toFunction(iteratee));
    }

    module.exports = forEach;
    });

    var forEach$1 = (forEach && typeof forEach === 'object' && 'default' in forEach ? forEach['default'] : forEach);

    var _baseMap = __commonjs(function (module) {
    var baseEach = require$$1$27,
        isArrayLike = require$$0$32;

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function (value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    module.exports = baseMap;
    });

    var require$$1$30 = (_baseMap && typeof _baseMap === 'object' && 'default' in _baseMap ? _baseMap['default'] : _baseMap);

    var map$2 = __commonjs(function (module) {
    var arrayMap = require$$2$15,
        baseIteratee = require$$0$15,
        baseMap = require$$1$30,
        isArray = require$$1$6;

    /**
     * Creates an array of values by running each element in `collection` through
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `curry`, `curryRight`, `drop`, `dropRight`, `every`, `fill`,
     * `invert`, `parseInt`, `random`, `range`, `rangeRight`, `slice`, `some`,
     * `sortBy`, `take`, `takeRight`, `template`, `trim`, `trimEnd`, `trimStart`,
     * and `words`
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, baseIteratee(iteratee, 3));
    }

    module.exports = map;
    });

    var mapArray = (map$2 && typeof map$2 === 'object' && 'default' in map$2 ? map$2['default'] : map$2);

    var mapValues = __commonjs(function (module) {
    var baseForOwn = require$$1$28,
        baseIteratee = require$$0$15;

    /**
     * Creates an object with the same keys as `object` and values generated by
     * running each own enumerable property of `object` through `iteratee`. The
     * iteratee function is invoked with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = baseIteratee(iteratee, 3);

      baseForOwn(object, function (value, key, object) {
        result[key] = iteratee(value, key, object);
      });
      return result;
    }

    module.exports = mapValues;
    });

    var mapObject = (mapValues && typeof mapValues === 'object' && 'default' in mapValues ? mapValues['default'] : mapValues);

    function shallowEqual(object, otherObject) {
      var equal = true;
      forEach$1(otherObject, function (value, key) {
        if (value !== object[key]) {
          equal = false;

          // exit early
          return false;
        }
      });

      return equal;
    }

    function map(iteratee, object) {
      var updater = typeof iteratee === 'function' ? iteratee : update$1(iteratee);

      var mapper = Array.isArray(object) ? mapArray : mapObject;

      var newObject = mapper(object, updater);
      var equal = shallowEqual(object, newObject);

      return equal ? object : newObject;
    }

    var map$1 = wrap(map);

    var toNumber = __commonjs(function (module) {
    var isFunction = require$$1$12,
        isObject = require$$0$33;

    /** Used as references for various `Number` constants. */
    var NAN = 0 / 0;

    /** Used to match leading and trailing whitespace. */
    var reTrim = /^\s+|\s+$/g;

    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

    /** Used to detect binary string values. */
    var reIsBinary = /^0b[01]+$/i;

    /** Used to detect octal string values. */
    var reIsOctal = /^0o[0-7]+$/i;

    /** Built-in method references without a dependency on `root`. */
    var freeParseInt = parseInt;

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3);
     * // => 3
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3');
     * // => 3
     */
    function toNumber(value) {
      if (isObject(value)) {
        var other = isFunction(value.valueOf) ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }

    module.exports = toNumber;
    });

    var require$$0$61 = (toNumber && typeof toNumber === 'object' && 'default' in toNumber ? toNumber['default'] : toNumber);

    var toInteger = __commonjs(function (module) {
    var toNumber = require$$0$61;

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0,
        MAX_INTEGER = 1.7976931348623157e+308;

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3');
     * // => 3
     */
    function toInteger(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      var remainder = value % 1;
      return value === value ? remainder ? value - remainder : value : 0;
    }

    module.exports = toInteger;
    });

    var require$$0$60 = (toInteger && typeof toInteger === 'object' && 'default' in toInteger ? toInteger['default'] : toInteger);

    var _apply = __commonjs(function (module) {
    /**
     * A faster alternative to `Function#apply`, this function invokes `func`
     * with the `this` binding of `thisArg` and the arguments of `args`.
     *
     * @private
     * @param {Function} func The function to invoke.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} args The arguments to invoke `func` with.
     * @returns {*} Returns the result of `func`.
     */
    function apply(func, thisArg, args) {
      var length = args.length;
      switch (length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }

    module.exports = apply;
    });

    var require$$1$31 = (_apply && typeof _apply === 'object' && 'default' in _apply ? _apply['default'] : _apply);

    var rest = __commonjs(function (module) {
    var apply = require$$1$31,
        toInteger = require$$0$60;

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeMax = Math.max;

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as an array.
     *
     * **Note:** This method is based on the [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = nativeMax(start === undefined ? func.length - 1 : toInteger(start), 0);
      return function () {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        switch (start) {
          case 0:
            return func.call(this, array);
          case 1:
            return func.call(this, args[0], array);
          case 2:
            return func.call(this, args[0], args[1], array);
        }
        var otherArgs = Array(start + 1);
        index = -1;
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = array;
        return apply(func, this, otherArgs);
      };
    }

    module.exports = rest;
    });

    var require$$0$59 = (rest && typeof rest === 'object' && 'default' in rest ? rest['default'] : rest);

    var _iteratorToArray = __commonjs(function (module) {
    /**
     * Converts `iterator` to an array.
     *
     * @private
     * @param {Object} iterator The iterator to convert.
     * @returns {Array} Returns the converted array.
     */
    function iteratorToArray(iterator) {
      var data,
          result = [];

      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }

    module.exports = iteratorToArray;
    });

    var require$$0$62 = (_iteratorToArray && typeof _iteratorToArray === 'object' && 'default' in _iteratorToArray ? _iteratorToArray['default'] : _iteratorToArray);

    var _Reflect = __commonjs(function (module) {
    var root = require$$0$22;

    /** Built-in value references. */
    var Reflect = root.Reflect;

    module.exports = Reflect;
    });

    var require$$1$33 = (_Reflect && typeof _Reflect === 'object' && 'default' in _Reflect ? _Reflect['default'] : _Reflect);

    var _baseKeysIn = __commonjs(function (module) {
    var Reflect = require$$1$33,
        iteratorToArray = require$$0$62;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Built-in value references. */
    var enumerate = Reflect ? Reflect.enumerate : undefined,
        propertyIsEnumerable = objectProto.propertyIsEnumerable;

    /**
     * The base implementation of `_.keysIn` which doesn't skip the constructor
     * property of prototypes or treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      object = object == null ? object : Object(object);

      var result = [];
      for (var key in object) {
        result.push(key);
      }
      return result;
    }

    // Fallback for IE < 9 with es6-shim.
    if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
      baseKeysIn = function baseKeysIn(object) {
        return iteratorToArray(enumerate(object));
      };
    }

    module.exports = baseKeysIn;
    });

    var require$$3$9 = (_baseKeysIn && typeof _baseKeysIn === 'object' && 'default' in _baseKeysIn ? _baseKeysIn['default'] : _baseKeysIn);

    var keysIn = __commonjs(function (module) {
    var baseKeysIn = require$$3$9,
        indexKeys = require$$2$10,
        isIndex = require$$1$11,
        isPrototype = require$$0$41;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      var index = -1,
          isProto = isPrototype(object),
          props = baseKeysIn(object),
          propsLength = props.length,
          indexes = indexKeys(object),
          skipIndexes = !!indexes,
          result = indexes || [],
          length = result.length;

      while (++index < propsLength) {
        var key = props[index];
        if (!(skipIndexes && (key == 'length' || isIndex(key, length))) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    module.exports = keysIn;
    });

    var require$$1$32 = (keysIn && typeof keysIn === 'object' && 'default' in keysIn ? keysIn['default'] : keysIn);

    var _arrayReduce = __commonjs(function (module) {
    /**
     * A specialized version of `_.reduce` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the first element of `array` as the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1,
          length = array.length;

      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }

    module.exports = arrayReduce;
    });

    var require$$0$63 = (_arrayReduce && typeof _arrayReduce === 'object' && 'default' in _arrayReduce ? _arrayReduce['default'] : _arrayReduce);

    var _basePick = __commonjs(function (module) {
    var arrayReduce = require$$0$63;

    /**
     * The base implementation of `_.pick` without support for individual
     * property names.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} props The property names to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, props) {
      object = Object(object);
      return arrayReduce(props, function (result, key) {
        if (key in object) {
          result[key] = object[key];
        }
        return result;
      }, {});
    }

    module.exports = basePick;
    });

    var require$$2$17 = (_basePick && typeof _basePick === 'object' && 'default' in _basePick ? _basePick['default'] : _basePick);

    var _arrayPush = __commonjs(function (module) {
    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;

      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }

    module.exports = arrayPush;
    });

    var require$$3$11 = (_arrayPush && typeof _arrayPush === 'object' && 'default' in _arrayPush ? _arrayPush['default'] : _arrayPush);

    var _baseFlatten = __commonjs(function (module) {
    var arrayPush = require$$3$11,
        isArguments = require$$2$7,
        isArray = require$$1$6,
        isArrayLikeObject = require$$0$31;

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {boolean} [isDeep] Specify a deep flatten.
     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, isDeep, isStrict, result) {
      result || (result = []);

      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index];
        if (isArrayLikeObject(value) && (isStrict || isArray(value) || isArguments(value))) {
          if (isDeep) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, isDeep, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    module.exports = baseFlatten;
    });

    var require$$3$10 = (_baseFlatten && typeof _baseFlatten === 'object' && 'default' in _baseFlatten ? _baseFlatten['default'] : _baseFlatten);

    var _cacheHas = __commonjs(function (module) {
    var isKeyable = require$$0$48;

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /**
     * Checks if `value` is in `cache`.
     *
     * @private
     * @param {Object} cache The set cache to search.
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function cacheHas(cache, value) {
      var map = cache.__data__;
      if (isKeyable(value)) {
        var data = map.__data__,
            hash = typeof value == 'string' ? data.string : data.hash;

        return hash[value] === HASH_UNDEFINED;
      }
      return map.has(value);
    }

    module.exports = cacheHas;
    });

    var require$$0$64 = (_cacheHas && typeof _cacheHas === 'object' && 'default' in _cacheHas ? _cacheHas['default'] : _cacheHas);

    var _baseUnary = __commonjs(function (module) {
    /**
     * The base implementation of `_.unary` without support for storing wrapper metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new function.
     */
    function baseUnary(func) {
      return function (value) {
        return func(value);
      };
    }

    module.exports = baseUnary;
    });

    var require$$1$34 = (_baseUnary && typeof _baseUnary === 'object' && 'default' in _baseUnary ? _baseUnary['default'] : _baseUnary);

    var _arrayIncludesWith = __commonjs(function (module) {
    /**
     * A specialized version of `_.includesWith` for arrays without support for
     * specifying an index to search from.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {*} target The value to search for.
     * @param {Function} comparator The comparator invoked per element.
     * @returns {boolean} Returns `true` if `target` is found, else `false`.
     */
    function arrayIncludesWith(array, value, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }

    module.exports = arrayIncludesWith;
    });

    var require$$3$12 = (_arrayIncludesWith && typeof _arrayIncludesWith === 'object' && 'default' in _arrayIncludesWith ? _arrayIncludesWith['default'] : _arrayIncludesWith);

    var _indexOfNaN = __commonjs(function (module) {
    /**
     * Gets the index at which the first occurrence of `NaN` is found in `array`.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {number} fromIndex The index to search from.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched `NaN`, else `-1`.
     */
    function indexOfNaN(array, fromIndex, fromRight) {
      var length = array.length,
          index = fromIndex + (fromRight ? 0 : -1);

      while (fromRight ? index-- : ++index < length) {
        var other = array[index];
        if (other !== other) {
          return index;
        }
      }
      return -1;
    }

    module.exports = indexOfNaN;
    });

    var require$$0$66 = (_indexOfNaN && typeof _indexOfNaN === 'object' && 'default' in _indexOfNaN ? _indexOfNaN['default'] : _indexOfNaN);

    var _baseIndexOf = __commonjs(function (module) {
    var indexOfNaN = require$$0$66;

    /**
     * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return indexOfNaN(array, fromIndex);
      }
      var index = fromIndex - 1,
          length = array.length;

      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }

    module.exports = baseIndexOf;
    });

    var require$$0$65 = (_baseIndexOf && typeof _baseIndexOf === 'object' && 'default' in _baseIndexOf ? _baseIndexOf['default'] : _baseIndexOf);

    var _arrayIncludes = __commonjs(function (module) {
    var baseIndexOf = require$$0$65;

    /**
     * A specialized version of `_.includes` for arrays without support for
     * specifying an index to search from.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {*} target The value to search for.
     * @returns {boolean} Returns `true` if `target` is found, else `false`.
     */
    function arrayIncludes(array, value) {
      return !!array.length && baseIndexOf(array, value, 0) > -1;
    }

    module.exports = arrayIncludes;
    });

    var require$$4$10 = (_arrayIncludes && typeof _arrayIncludes === 'object' && 'default' in _arrayIncludes ? _arrayIncludes['default'] : _arrayIncludes);

    var _cachePush = __commonjs(function (module) {
    var isKeyable = require$$0$48;

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /**
     * Adds `value` to the set cache.
     *
     * @private
     * @name push
     * @memberOf SetCache
     * @param {*} value The value to cache.
     */
    function cachePush(value) {
      var map = this.__data__;
      if (isKeyable(value)) {
        var data = map.__data__,
            hash = typeof value == 'string' ? data.string : data.hash;

        hash[value] = HASH_UNDEFINED;
      } else {
        map.set(value, HASH_UNDEFINED);
      }
    }

    module.exports = cachePush;
    });

    var require$$0$67 = (_cachePush && typeof _cachePush === 'object' && 'default' in _cachePush ? _cachePush['default'] : _cachePush);

    var _SetCache = __commonjs(function (module) {
    var MapCache = require$$1$17,
        cachePush = require$$0$67;

    /**
     *
     * Creates a set cache object to store unique values.
     *
     * @private
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values ? values.length : 0;

      this.__data__ = new MapCache();
      while (++index < length) {
        this.push(values[index]);
      }
    }

    // Add functions to the `SetCache`.
    SetCache.prototype.push = cachePush;

    module.exports = SetCache;
    });

    var require$$5$3 = (_SetCache && typeof _SetCache === 'object' && 'default' in _SetCache ? _SetCache['default'] : _SetCache);

    var _baseDifference = __commonjs(function (module) {
    var SetCache = require$$5$3,
        arrayIncludes = require$$4$10,
        arrayIncludesWith = require$$3$12,
        arrayMap = require$$2$15,
        baseUnary = require$$1$34,
        cacheHas = require$$0$64;

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;

    /**
     * The base implementation of methods like `_.difference` without support for
     * excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      } else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer: while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        } else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    module.exports = baseDifference;
    });

    var require$$4$9 = (_baseDifference && typeof _baseDifference === 'object' && 'default' in _baseDifference ? _baseDifference['default'] : _baseDifference);

    var omit$2 = __commonjs(function (module) {
    var arrayMap = require$$2$15,
        baseDifference = require$$4$9,
        baseFlatten = require$$3$10,
        basePick = require$$2$17,
        keysIn = require$$1$32,
        rest = require$$0$59;

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable properties of `object` that are not omitted.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [props] The property names to omit, specified
     *  individually or in arrays..
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = rest(function (object, props) {
      if (object == null) {
        return {};
      }
      props = arrayMap(baseFlatten(props), String);
      return basePick(object, baseDifference(keysIn(object), props));
    });

    module.exports = omit;
    });

    var _omit = (omit$2 && typeof omit$2 === 'object' && 'default' in omit$2 ? omit$2['default'] : omit$2);

    function omit(predicate, collection) {
      return _omit(collection, predicate);
    }

    var omit$1 = wrap(omit);

    function reject$1(predicate, collection) {
      return _reject(collection, predicate);
    }

    var reject$2 = wrap(reject$1);

    var wildcard = '*';

    function reducePath(acc, key) {
      if (key === wildcard) {
        return function (value) {
          return Object.prototype.hasOwnProperty.call(value, wildcard) ?
          // If we actually have wildcard as a property, update that
          update$1(babelHelpers.defineProperty({}, wildcard, acc), value) :
          // Otherwise map over all properties
          map$1(acc, value);
        };
      }

      return babelHelpers.defineProperty({}, key, acc);
    }

    function updateIn(path, value, object) {
      var parts = splitPath(path);
      var updates = parts.reduceRight(reducePath, value);

      return update$1(updates, object);
    }

    var updateIn$1 = curry(updateIn);

    function withDefault(defaultValue, updates, object) {
      if (typeof object === 'undefined') {
        return update$1(updates, defaultValue);
      }

      return update$1(updates, object);
    }

    var withDefault$1 = curry(withDefault);

    var u = update$1;

    u._ = _;
    u.constant = constant;
    u.if = _if;
    u.ifElse = ifElse;
    u.is = is$1;
    u.freeze = freeze;
    u.map = map$1;
    u.omit = omit$1;
    u.reject = reject$2;
    u.update = update$1;
    u.updateIn = updateIn$1;
    u.withDefault = withDefault$1;

    describe('u.constant', function () {
      it('returns what it is given... constantly', function () {
        var func = u.constant(4);

        expect(func()).to.equal(4);
        expect(func('hi')).to.equal(4);
        expect(func('hi', 8)).to.equal(4);
        expect(func(4)).to.equal(4);
      });

      it('freezes the result', function () {
        expect(Object.isFrozen(u.constant({})())).to.be.true;
      });
    });

    describe('u.freeze', function () {
      afterEach(function () {
        delete process.env.NODE_ENV;
      });

      it('freezes objects', function () {
        var object = {};
        u.freeze(object);

        expect(Object.isFrozen(object)).to.be.true;
      });

      it('freezes nested objects', function () {
        var object = { foo: { bar: 3 } };
        u.freeze(object);

        expect(Object.isFrozen(object.foo)).to.be.true;
      });

      it('freezes nested arrays', function () {
        var object = [[0]];
        u.freeze(object);

        expect(Object.isFrozen(object)).to.be.true;
        expect(Object.isFrozen(object[0])).to.be.true;
      });

      it('ignores functions', function () {
        var object = { foo: function foo() {
            return 1;
          } };
        u.freeze(object);

        expect(Object.isFrozen(object.foo)).to.be.false;
      });

      it('does not freeze children if the parent is already frozen', function () {
        var object = { foo: {} };
        Object.freeze(object);
        u.freeze(object);

        expect(Object.isFrozen(object.foo)).to.be.false;
      });

      if (typeof process !== 'undefined') {
        it('does not freeze in production', function () {
          process.env.NODE_ENV = 'production';
          var object = {};
          u.freeze(object);

          expect(Object.isFrozen(object)).to.be.false;
        });
      }

      it('handles null objects', function () {
        var object = { foo: null };
        u.freeze(object);
        expect(Object.isFrozen(object)).to.be.true;
      });

      it('returns the same object', function () {
        var object = {};
        var result = u.freeze(object);
        expect(result).to.equal(object);
      });
    });

    describe('u.if', function () {
      it('does not update if the predicate is false', function () {
        var object = { a: 0 };
        var result = u.if(false, { b: 1 }, object);
        expect(result).to.eql(object);

        result = u({ x: u.if(false, 1) }, {});
        expect(result).to.eql({});
      });

      it('does update if the predicate is true', function () {
        var object = { a: 0 };
        var result = u.if(true, { b: 1 }, object);
        expect(result).to.eql({ a: 0, b: 1 });
      });

      it('will use the result of a function passed as a predicate', function () {
        var object = { a: 0 };
        var aIsThree = function aIsThree(x) {
          return x.a === 3;
        };
        var result = u.if(aIsThree, { b: 1 }, object);

        expect(result).to.eql({ a: 0 });
      });

      it('can be partially applied', function () {
        var object = { a: 2 };
        var isEven = function isEven(x) {
          return x % 2 === 0;
        };
        var inc = function inc(x) {
          return x + 1;
        };

        var result = u({
          a: u.if(isEven, inc)
        }, object);

        expect(result).to.eql({ a: 3 });
      });

      it('freezes the result', function () {
        expect(Object.isFrozen(u.if(true, {}, {}))).to.be.true;
        expect(Object.isFrozen(u.if(false, {}, {}))).to.be.true;
      });
    });

    describe('u.ifElse', function () {
      it('does updates with the else if the predicate is false', function () {
        var object = { a: 0 };
        var result = u.ifElse(false, { b: 1 }, { b: 2 }, object);
        expect(result).to.eql({ a: 0, b: 2 });
      });

      it('updates with the true update if the predicate is true', function () {
        var object = { a: 0 };
        var result = u.ifElse(true, { b: 1 }, { b: 4 }, object);
        expect(result).to.eql({ a: 0, b: 1 });
      });

      it('will use the result of a function passed as a predicate', function () {
        var object = { a: 0 };
        var aIsThree = function aIsThree(x) {
          return x.a === 3;
        };
        var result = u.ifElse(aIsThree, { b: 1 }, { b: 4 }, object);

        expect(result).to.eql({ a: 0, b: 4 });
      });

      it('can be partially applied', function () {
        var object = { a: 2 };
        var isEven = function isEven(x) {
          return x % 2 === 0;
        };
        var inc = function inc(x) {
          return x + 1;
        };
        var dec = function dec(x) {
          return x - 1;
        };

        var result = u({
          a: u.ifElse(isEven, inc, dec)
        }, object);

        expect(result).to.eql({ a: 3 });
      });

      it('freezes the result', function () {
        expect(Object.isFrozen(u.ifElse(true, {}, {}, {}))).to.be.true;
        expect(Object.isFrozen(u.ifElse(false, {}, {}, {}))).to.be.true;
      });
    });

    describe('u.is', function () {
      it('returns true if path matches a value predicate', function () {
        var result = u.is('a.b', 4, { a: { b: 4 } });
        expect(result).to.be.true;
      });

      it('returns true if path matches a function predicate', function () {
        var isEven = function isEven(x) {
          return x % 2 === 0;
        };
        var result = u.is('a.b', isEven, { a: { b: 6 } });
        expect(result).to.be.true;
      });

      it('returns false if path matches a value predicate', function () {
        var result = u.is('a.b', 4, { a: { b: 5 } });
        expect(result).to.be.false;
      });

      it('returns false if path matches a function predicate', function () {
        var isEven = function isEven(x) {
          return x % 2 === 0;
        };
        var result = u.is('a.b', isEven, { a: { b: 7 } });
        expect(result).to.be.false;
      });

      it('returns false if the path does not exist', function () {
        var result = u.is('a.b.c.d', 4, { a: { b: {} } });
        expect(result).to.be.false;
      });

      it('can test for undefined', function () {
        var result = u.is('a.b.c', undefined, { a: { b: {} } });
        expect(result).to.be.true;
      });

      it('tests the actual object if a blank path is given', function () {
        var result = u.is('', 4, 4);
        expect(result).to.be.true;
      });

      it('can use arrays as paths', function () {
        var result = u.is(['a', 'b'], 4, { a: { b: 4 } });
        expect(result).to.be.true;
      });

      it('can include array indexes in paths', function () {
        var result = u.is('a.1.b', 4, { a: [{}, { b: 4 }] });
        expect(result).to.be.true;

        result = u.is(['a', 1, 'b'], 4, { a: [{}, { b: 4 }] });
        expect(result).to.be.true;
      });

      it('can be partially applied', function () {
        var result = u.is('a.b')(4)({ a: { b: 4 } });
        expect(result).to.be.true;
      });
    });

    describe('u.map', function () {
      it('applies updates to each item in an array', function () {
        var object = [0, 1, 2];
        var inc = function inc(x) {
          return x + 1;
        };
        var result = u.map(inc, object);

        expect(result).to.eql([1, 2, 3]);
      });

      it('applies updates to each value in an object', function () {
        var object = { a: 0, b: 1, c: 2 };
        var inc = function inc(x) {
          return x + 1;
        };
        var result = u.map(inc, object);

        expect(result).to.eql({ a: 1, b: 2, c: 3 });
      });

      it('can update with a regular updates object', function () {
        var object = [{ a: 0 }, { a: 0 }];
        var result = u.map({ a: 1 }, object);

        expect(result).to.eql([{ a: 1 }, { a: 1 }]);
      });

      it('returns the same object if no updates are made', function () {
        var array = [0, 1];
        var ident = function ident(x) {
          return x;
        };
        var result = u.map(ident, array);

        expect(result).to.equal(array);

        var object = { a: 0 };
        result = u.map(ident, object);

        expect(result).to.equal(object);
      });

      it('passes the key or index as the second parameter to the iteratee', function () {
        var object = {
          a: { x: 0 },
          b: [3, 3]
        };
        var setToKey = function setToKey(_, key) {
          return key;
        };
        var result = u.map(u.map(setToKey), object);

        expect(result).to.eql({
          a: { x: 'x' },
          b: [0, 1]
        });
      });

      it('can be partially applied', function () {
        var object = {
          b: [3, 3]
        };
        var setToKey = function setToKey(_, key) {
          return key;
        };
        var result = u({
          b: u.map(setToKey)
        }, object);

        expect(result).to.eql({
          b: [0, 1]
        });
      });

      it('freezes the result', function () {
        expect(Object.isFrozen(u.map({}, {}))).to.be.true;
      });
    });

    describe('u.omit', function () {
      it('can omit a key', function () {
        var result = u({ foo: u.omit('bar') }, { foo: { bar: 7 } });

        expect(result).to.eql({ foo: {} });
      });

      it('freezes the result', function () {
        expect(Object.isFrozen(u.omit('a', {}))).to.be.true;
      });
    });

    describe('u.reject', function () {
      it('can reject by index', function () {
        var result = u.reject(function (_, index) {
          return index === 1;
        }, [3, 4, 5]);

        expect(result).to.eql([3, 5]);
      });

      it('can reject with callback shorthand', function () {
        var result = u.reject('bad', [{ bad: true }, { bad: false }]);

        expect(result).to.eql([{ bad: false }]);
      });

      it('freezes the result', function () {
        expect(Object.isFrozen(u.reject('a', []))).to.be.true;
      });
    });

    describe('u.updateIn', function () {
      it('can update a single path described with a string', function () {
        var object = { a: { b: 0 } };
        var result = u.updateIn('a.b', 3, object);
        expect(result).to.eql({ a: { b: 3 } });
      });

      it('can update a single path described with a string with a function', function () {
        var inc = function inc(x) {
          return x + 1;
        };
        var object = { a: { b: 0 } };
        var result = u.updateIn('a.b', inc, object);
        expect(result).to.eql({ a: { b: 1 } });
      });

      it('can update a single path described with an array', function () {
        var object = { a: { b: 0 } };
        var result = u.updateIn(['a', 'b'], 3, object);
        expect(result).to.eql({ a: { b: 3 } });
      });

      it('can update arrays', function () {
        var object = { a: [0, 0, 0] };
        var result = u.updateIn('a.1', 3, object);
        expect(result).to.eql({ a: [0, 3, 0] });
      });

      it('can be partially applied', function () {
        var object = { a: { b: 0 } };
        var result = u.updateIn('a.b')(3)(object);
        expect(result).to.eql({ a: { b: 3 } });
      });

      it('replaces the object outright if the path is empty', function () {
        var object = {};
        var result = u.updateIn('', 3, object);
        expect(result).to.equal(3);
      });

      it('freezes the result', function () {
        expect(Object.isFrozen(u.updateIn('a', 0, {}))).to.be.true;
      });

      it('can multiple elements of an array with *', function () {
        var object = { a: [{ b: 0 }, { b: 1 }, { b: 2 }] };
        var result = u.updateIn('a.*.b', function (x) {
          return x + 1;
        }, object);
        expect(result).to.eql({ a: [{ b: 1 }, { b: 2 }, { b: 3 }] });

        object = { a: [0, 1, 2] };
        result = u.updateIn(['a', '*'], function (x) {
          return x + 1;
        }, object);
        expect(result).to.eql({ a: [1, 2, 3] });
      });

      it('can update properties named *', function () {
        var object = { '*': 1, x: 1 };
        var result = u.updateIn('*', function (x) {
          return x + 1;
        }, object);
        expect(result).to.eql({ '*': 2, x: 1 });
      });
    });

    describe('updeep', function () {
      it('does not change anything if no updates are specified', function () {
        var object = { foo: 3, bar: [7, 5] };
        var result = u({}, object);

        expect(result).to.equal(object);
      });

      it('can update with fixed values', function () {
        var object = { foo: 3, bar: [7, 5] };
        var result = u({ foo: 4 }, object);

        expect(result).to.deep.equal({ foo: 4, bar: [7, 5] });
      });

      it('returns the same instance if an update doesn\'t make changes', function () {
        var object = { foo: 3 };
        var result = u({ foo: 3 }, object);

        expect(result).to.equal(object);
      });

      it('can update a nested structure', function () {
        var object = { foo: { bar: 7, bam: 3 }, baz: 32 };
        var result = u({ foo: { bar: 8 } }, object);

        expect(result).to.deep.equal({ foo: { bar: 8, bam: 3 }, baz: 32 });
      });

      it('can update arrays', function () {
        var object = [1, 2, 3];
        var result = u({ 1: 7 }, object);

        expect(result).to.deep.equal([1, 7, 3]);
      });

      it('replaces the object outright if updates are a constant', function () {
        expect(u(3, {})).to.equal(3);
        expect(u(null, {})).to.be.null;
      });

      it('can add an element to an array', function () {
        var object = [];
        var result = u({ 0: 3 }, object);

        expect(result).to.eql([3]);
      });

      it('can update nested arrays', function () {
        var object = { foo: [1, 2, 3], bar: 9 };
        var result = u({ foo: { 1: 7 } }, object);

        expect(result).to.deep.equal({ foo: [1, 7, 3], bar: 9 });
      });

      it('can use functions to update values', function () {
        var inc = function inc(i) {
          return i + 1;
        };
        var object = { foo: 3, bar: 4, baz: 7 };
        var result = u({ foo: inc, bar: inc }, object);

        expect(result).to.deep.equal({ foo: 4, bar: 5, baz: 7 });
      });

      it('can be partially applied', function () {
        var inc = function inc(i) {
          return i + 1;
        };
        var object = { foo: 3 };
        var incFoo = u({ foo: inc });

        var result = incFoo(object);

        expect(result).to.deep.equal({ foo: 4 });
      });

      it('passes additional arguments on to updates if it is a function', function () {
        var func = function func(_, x) {
          return x;
        };
        var result = u(func, 0, 4);

        expect(result).to.equal(4);
      });

      it('can update if the value is an array', function () {
        var object = {};
        var result = u({ foo: [0, 1] }, object);

        expect(result).to.deep.equal({ foo: [0, 1] });
      });

      it('can update when original object is undefined', function () {
        var result = u({ foo: [0, 1] }, undefined);

        expect(result).to.deep.equal({ foo: [0, 1] });
      });

      it('can take a function as the updater', function () {
        var result = u(function (i) {
          return i + 1;
        }, 7);

        expect(result).to.eql(8);
      });

      it('deeply freezes the result', function () {
        var result = u({ foo: { bar: 3 } }, { foo: { bar: 0 } });

        expect(Object.isFrozen(result)).to.be.true;
        expect(Object.isFrozen(result.foo)).to.be.true;
      });

      it('assigns null values', function () {
        expect(u({ isNull: null }, {})).to.eql({ isNull: null });
      });

      it('can use a placeholder to partially apply', function () {
        function increment(i) {
          return i + 1;
        }
        var updateJoe = u(u._, { name: 'Joe Merrill', age: 21 });
        var result = updateJoe({ age: increment });

        expect(result).to.eql({ name: 'Joe Merrill', age: 22 });
      });

      it('defaults to an empty object when null or undefined', function () {
        var result = u({ a: { b: 0 } }, { a: null });
        expect(result).to.eql({ a: { b: 0 } });

        result = u({ a: { b: 0 } }, { a: undefined });
        expect(result).to.eql({ a: { b: 0 } });

        result = u({ a: { b: 0 } }, {});
        expect(result).to.eql({ a: { b: 0 } });
      });

      it('preserves empty objects when empty updates are specified', function () {
        var result = u({ a: {} }, {});
        expect(result).to.eql({ a: {} });
      });

      it('works with date objects', function () {
        var date = new Date();
        var result = u({ created: date }, {});
        expect(result).to.eql({ created: date });
      });
    });

    describe('curry1', function () {
      it('can curry one arguments', function () {
        var addOne = curry1(function (x) {
          return x + 1;
        });
        expect(addOne(3)).to.equal(4);
        expect(addOne()(3)).to.equal(4);
      });

      it('will take up to two extra arguments', function () {
        var curried = curry1(function (a, b, c) {
          return [a, b, c];
        });
        expect(curried(1, 2, 3, 4)).to.eql([1, 2, 3]);
      });

      it('returns a fn with arity of 1', function () {
        var curried = curry1(function (a, b, c) {
          return [a, b, c];
        });
        expect(curried).to.have.length(1);
      });
    });

    describe('curry2', function () {
      it('can curry two arguments', function () {
        var add = curry2(function (x, y) {
          return x + y;
        });
        expect(add(3)(4)).to.equal(7);
        expect(add()(3)()(4)).to.equal(7);
        expect(add(3, 4)).to.equal(7);
      });

      it('will take up to two extra arguments', function () {
        var curried = curry2(function (a, b, c, d) {
          return [a, b, c, d];
        });
        expect(curried(1, 2, 3, 4, 5)).to.eql([1, 2, 3, 4]);
      });

      it('can use the placeholder', function () {
        var curried = curry2(function (a, b, c, d) {
          return [a, b, c, d];
        });
        expect(curried(_, 2)(1, 3, 4)).to.eql([1, 2, 3, 4]);
      });

      it('returns a fn with arity of 2', function () {
        var curried = curry2(function (a, b, c, d) {
          return [a, b, c, d];
        });
        expect(curried).to.have.length(2);
      });
    });

    describe('curry3', function () {
      it('can curry three arguments', function () {
        var add = curry3(function (x, y, z) {
          return x + y + z;
        });
        expect(add(3, _)(4)(5)).to.equal(12);
        expect(add()(3)()(4, 5)).to.equal(12);
        expect(add(3, 4, 5)).to.equal(12);
      });

      it('will take up to two extra arguments', function () {
        var curried = curry3(function (a, b, c, d, e) {
          return [a, b, c, d, e];
        });
        expect(curried(1, 2, 3, 4, 5, 6)).to.eql([1, 2, 3, 4, 5]);
      });

      it('can use the placeholder', function () {
        var curried = curry3(function (a, b, c, d, e) {
          return [a, b, c, d, e];
        });
        expect(curried(_, 2)('a', 3, 4, 5)).to.eql(['a', 2, 3, 4, 5]);
        expect(curried('b', _, 3)(2, 4, 5)).to.eql(['b', 2, 3, 4, 5]);
        expect(curried(_, 2, 3)('c', 4, 5)).to.eql(['c', 2, 3, 4, 5]);
        expect(curried(_, _, 3)('d', 2, 4, 5)).to.eql(['d', 2, 3, 4, 5]);
      });

      it('returns a fn with arity of 3', function () {
        var curried = curry3(function (a, b, c, d, e) {
          return [a, b, c, d, e];
        });
        expect(curried).to.have.length(3);
      });
    });

    describe('curry4', function () {
      it('can curry four arguments', function () {
        var add = curry4(function (x, y, z, u) {
          return x + y + z + u;
        });
        expect(add(3, _)(4)(5)(6)).to.equal(18);
        expect(add()(3)()(4, 5, 6)).to.equal(18);
        expect(add(3, 4, 5, 6)).to.equal(18);
      });

      it('will take up to two extra arguments', function () {
        var curried = curry4(function (a, b, c, d, e, f) {
          return [a, b, c, d, e, f];
        });
        expect(curried(1, 2, 3, 4, 5, 6, 7)).to.eql([1, 2, 3, 4, 5, 6]);
      });

      it('can use the placeholder', function () {
        var curried = curry4(function (a, b, c, d, e, f) {
          return [a, b, c, d, e, f];
        });
        expect(curried(_, 2)('a', 3, 4, 5, 6)).to.eql(['a', 2, 3, 4, 5, 6]);
        expect(curried(_, 2, 3)('b', 4, 5, 6)).to.eql(['b', 2, 3, 4, 5, 6]);
        expect(curried(_, 2, 3, 4)('c', 5, 6)).to.eql(['c', 2, 3, 4, 5, 6]);

        expect(curried('d', _, 3)(2, 4, 5, 6)).to.eql(['d', 2, 3, 4, 5, 6]);
        expect(curried('e', _, 3, 4)(2, 5, 6)).to.eql(['e', 2, 3, 4, 5, 6]);

        expect(curried('f', 2, _, 4)(3, 5, 6)).to.eql(['f', 2, 3, 4, 5, 6]);

        expect(curried(_, _, 3)('g', 2, 4, 5, 6)).to.eql(['g', 2, 3, 4, 5, 6]);
        expect(curried(_, _, 3, 4)('h', 2, 5, 6)).to.eql(['h', 2, 3, 4, 5, 6]);
        expect(curried(_, 2, _, 4)('i', 3, 5, 6)).to.eql(['i', 2, 3, 4, 5, 6]);

        expect(curried('j', _, _, 4)(2, 3, 5, 6)).to.eql(['j', 2, 3, 4, 5, 6]);

        expect(curried(_, _, _, 4)('k', 2, 3, 5, 6)).to.eql(['k', 2, 3, 4, 5, 6]);
      });

      it('returns a fn with arity of 4', function () {
        var curried = curry4(function (a, b, c, d, e, f) {
          return [a, b, c, d, e, f];
        });
        expect(curried).to.have.length(4);
      });
    });

    describe('u.withDefault', function () {
      it('uses the default as the basis for the update if the object is undefined', function () {
        var inc = function inc(x) {
          return x + 1;
        };
        var result = u.withDefault({ a: 0 }, { a: inc }, undefined);

        expect(result).to.eql({ a: 1 });
      });

      it('uses ignores the default if the object is defined', function () {
        var inc = function inc(x) {
          return x + 1;
        };
        var result = u.withDefault({ a: 0 }, { a: inc }, { a: 3 });

        expect(result).to.eql({ a: 4 });
      });

      it('can be partially applied', function () {
        var object = {};
        var result = u({
          foo: u.withDefault([], { 0: 'bar' })
        }, object);

        expect(result).to.eql({ foo: ['bar'] });
      });

      it('freezes the result', function () {
        expect(Object.isFrozen(u.withDefault({}, { a: 1 })(undefined))).to.be.true;
      });
    });

}((this.updeepTest = this.updeepTest || {})));
//# sourceMappingURL=karma.js.map