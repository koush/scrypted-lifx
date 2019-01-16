(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var lifx = exports;

// Export constants
lifx.constants = __webpack_require__(108);

// Export utils
lifx.utils = __webpack_require__(109);

// Export packet parser
lifx.packet = __webpack_require__(112);

// Export light device object
lifx.Light = __webpack_require__(235).Light;

// Export client
lifx.Client = __webpack_require__(244).Client;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(54);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
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
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(145),
    getValue = __webpack_require__(150);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
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
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(30),
    isLength = __webpack_require__(33);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
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
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(21);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(26)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
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
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11),
    getRawTag = __webpack_require__(146),
    objectToString = __webpack_require__(147);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(60),
    baseKeys = __webpack_require__(185),
    isArrayLike = __webpack_require__(6);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
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
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

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
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isKey = __webpack_require__(36),
    stringToPath = __webpack_require__(195),
    toString = __webpack_require__(198);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(135),
    listCacheDelete = __webpack_require__(136),
    listCacheGet = __webpack_require__(137),
    listCacheHas = __webpack_require__(138),
    listCacheSet = __webpack_require__(139);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(9);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
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


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(159);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(41),
    isObject = __webpack_require__(3);

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var hide = __webpack_require__(48);
var has = __webpack_require__(99);
var SRC = __webpack_require__(100)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(47).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(132),
    findIndex = __webpack_require__(206);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isObject = __webpack_require__(3);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(151),
    mapCacheDelete = __webpack_require__(158),
    mapCacheGet = __webpack_require__(160),
    mapCacheHas = __webpack_require__(161),
    mapCacheSet = __webpack_require__(162);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(180),
    isObjectLike = __webpack_require__(5);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
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
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

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
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(14),
    toKey = __webpack_require__(7);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(21);

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
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(72),
    eq = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(15),
    overRest = __webpack_require__(75),
    setToString = __webpack_require__(40);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(231),
    shortOut = __webpack_require__(76);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(41),
    baseLodash = __webpack_require__(43);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
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
    base = ' ' + formatError(value);
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
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(246);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(247);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(55), __webpack_require__(245)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.2' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(49);
var createDesc = __webpack_require__(98);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25);
var IE8_DOM_DEFINE = __webpack_require__(95);
var toPrimitive = __webpack_require__(97);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(25);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(133),
    baseMatchesProperty = __webpack_require__(193),
    identity = __webpack_require__(15),
    isArray = __webpack_require__(2),
    property = __webpack_require__(203);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(17),
    stackClear = __webpack_require__(140),
    stackDelete = __webpack_require__(141),
    stackGet = __webpack_require__(142),
    stackHas = __webpack_require__(143),
    stackSet = __webpack_require__(144);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(55)))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(163),
    isObjectLike = __webpack_require__(5);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(164),
    arraySome = __webpack_require__(167),
    cacheHas = __webpack_require__(168);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

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


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(179),
    isArguments = __webpack_require__(32),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(61),
    isIndex = __webpack_require__(13),
    isTypedArray = __webpack_require__(63);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
    stubFalse = __webpack_require__(181);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(62)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(182),
    baseUnary = __webpack_require__(183),
    nodeUtil = __webpack_require__(184);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

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


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(201),
    hasPath = __webpack_require__(202);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(207);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(14),
    isFunction = __webpack_require__(30),
    toKey = __webpack_require__(7);

/**
 * This method is like `_.get` except that if the resolved value is a
 * function it's invoked with the `this` binding of its parent object and
 * its result is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to resolve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 *
 * _.result(object, 'a[0].b.c1');
 * // => 3
 *
 * _.result(object, 'a[0].b.c2');
 * // => 4
 *
 * _.result(object, 'a[0].b.c3', 'default');
 * // => 'default'
 *
 * _.result(object, 'a[0].b.c3', _.constant('default'));
 * // => 'default'
 */
function result(object, path, defaultValue) {
  path = castPath(path, object);

  var index = -1,
      length = path.length;

  // Ensure the loop is entered when path is empty.
  if (!length) {
    length = 1;
    object = undefined;
  }
  while (++index < length) {
    var value = object == null ? undefined : object[toKey(path[index])];
    if (value === undefined) {
      index = length;
      value = defaultValue;
    }
    object = isFunction(value) ? value.call(object) : value;
  }
  return object;
}

module.exports = result;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(37),
    baseAssignValue = __webpack_require__(72);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(73);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(38),
    isIterateeCall = __webpack_require__(77);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(39);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(9),
    isArrayLike = __webpack_require__(6),
    isIndex = __webpack_require__(13),
    isObject = __webpack_require__(3);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(60),
    baseKeysIn = __webpack_require__(233),
    isArrayLike = __webpack_require__(6);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(37),
    copyObject = __webpack_require__(71),
    createAssigner = __webpack_require__(74),
    isArrayLike = __webpack_require__(6),
    isPrototype = __webpack_require__(34),
    keys = __webpack_require__(12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(15),
    metaMap = __webpack_require__(81);

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(64);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(83),
    composeArgsRight = __webpack_require__(84),
    countHolders = __webpack_require__(255),
    createCtor = __webpack_require__(22),
    createRecurry = __webpack_require__(85),
    getHolder = __webpack_require__(44),
    reorder = __webpack_require__(269),
    replaceHolders = __webpack_require__(23),
    root = __webpack_require__(1);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var isLaziable = __webpack_require__(256),
    setData = __webpack_require__(89),
    setWrapToString = __webpack_require__(90);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(81),
    noop = __webpack_require__(257);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(41),
    baseLodash = __webpack_require__(43);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(80),
    shortOut = __webpack_require__(76);

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var getWrapDetails = __webpack_require__(262),
    insertWrapDetails = __webpack_require__(263),
    setToString = __webpack_require__(40),
    updateWrapDetails = __webpack_require__(264);

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(106);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_2__);




__webpack_require__(107);

var LifxClient = __webpack_require__(0).Client;

var client = new LifxClient();

function VirtualDevice(light) {
  this.light = light;
}

VirtualDevice.prototype.turnOn = function () {
  this.light.on();
};

VirtualDevice.prototype.turnOff = function () {
  this.light.off();
};

VirtualDevice.prototype.setLevel = function (level) {
  this.light.maxIR(level);
}; // need to implement state polling or something


VirtualDevice.prototype.isOn = function () {
  return false;
};

VirtualDevice.prototype.getLevel = function () {
  return 0;
};

VirtualDevice.prototype.supportsSpectrumRgb = function () {
  return true;
};

VirtualDevice.prototype.supportsSpectrumHsv = function () {
  return true;
};

VirtualDevice.prototype.supportsTemperature = function () {
  return true;
};

VirtualDevice.prototype.getTemperatureMinK = function () {
  return 2500;
};

VirtualDevice.prototype.getTemperatureMaxK = function () {
  return 9000;
};

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

VirtualDevice.prototype.setRgb = function (r, g, b) {
  this.light.colorRgbHex(rgbToHex(r, g, b));
};

VirtualDevice.prototype.setHsv = function (h, s, v) {
  this.light.color(h, Math.round(s * 100), Math.round(v * 100));
};

function DeviceProvider() {
  this.lights = {};
}

DeviceProvider.prototype.getDevice = function (id) {
  var light = this.lights[id];

  if (light) {
    return new VirtualDevice(light);
  }
};

DeviceProvider.prototype.newLight = function (light) {
  var _this = this;

  light.getHardwareVersion(function (err, data) {
    if (err) {
      log.e("unable to get product version: ".concat(err));
      return;
    }

    var interfaces = ['OnOff', 'Brightness'];

    if (data.productFeatures && data.productFeatures.color) {
      interfaces.push('ColorSetting');
    }

    _this.lights[light.id] = light;
    var info = {
      name: data.productName,
      id: light.id,
      interfaces: interfaces,
      type: 'Light'
    };
    log.i("light found: ".concat(JSON.stringify(info)));
    deviceManager.onDeviceDiscovered(info);
  });
};

var deviceProvider = new DeviceProvider();
client.on('light-new', deviceProvider.newLight.bind(deviceProvider));
client.init();
/* harmony default export */ __webpack_exports__["default"] = (deviceProvider);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(94);

$export($export.P, 'Function', { bind: __webpack_require__(102) });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var core = __webpack_require__(47);
var hide = __webpack_require__(48);
var redefine = __webpack_require__(27);
var ctx = __webpack_require__(101);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(26)(function () {
  return Object.defineProperty(__webpack_require__(96)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
var document = __webpack_require__(24).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(16);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 99 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 100 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(50);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(50);
var isObject = __webpack_require__(16);
var invoke = __webpack_require__(103);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(105);
var anObject = __webpack_require__(25);
var $flags = __webpack_require__(51);
var DESCRIPTORS = __webpack_require__(8);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(27)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(26)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(8) && /./g.flags != 'g') __webpack_require__(49).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(51)
});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(27)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 107 */
/***/ (function(module, exports) {

const bufferToString = Buffer.prototype.toString;
const bufferWrite = Buffer.prototype.write;

Buffer.prototype.toString = function (encoding, start, end) {
    if (encoding != 'hex') {
        return bufferToString.apply(this, arguments);
    }

    if (!start) {
        start = 0;
    }
    if (!end) {
        end = this.length;
    }

    var ret = '';
    for (var i = start; i < end; i++) {
        ret += ('00' + this[i].toString(16)).slice(-2);
    }

    return ret;
}

Buffer.prototype.write = function(string) {
    var offset;
    var length;
    var encoding;
    var i = 1;
    if (typeof arguments[i] == 'string') {
        encoding = arguments[i++];
    }
    else {
        offset = arguments[i++];
        if (typeof arguments[i] == 'string') {
            encoding = arguments[i++];
        }
        else {
            length = arguments[i++];
            encoding = arguments[i++];
        }
    }

    if (encoding != 'hex') {
        return bufferToString.apply(this, arguments);
    }

    if (!offset) {
        offset = 0;
    }
    if (!length) {
        length = this.length - offset;
    }

    for (var i = 0; i < Math.min(length, string.length); i++) {
        var val = parseInt(string.substr(i * 2, 2), 16);
        this[offset + i] = val;
    }
}


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  // Ports used by LIFX
  LIFX_DEFAULT_PORT: 56700,
  LIFX_ANY_PORT: 56800,

  // Masks for packet description in packet header
  ADDRESSABLE_BIT: 0x1000,
  TAGGED_BIT: 0x2000,
  ORIGIN_BITS: 0xC000,
  PROTOCOL_VERSION_BITS: 0xFFF,

  // Masks for response types in packet header
  RESPONSE_REQUIRED_BIT: 0x1,
  ACK_REQUIRED_BIT: 0x2,

  // Protocol version mappings
  PROTOCOL_VERSION_CURRENT: 1024,
  PROTOCOL_VERSION_1: 1024,

  MESSAGE_RATE_LIMIT: 50, // in ms
  DISCOVERY_INTERVAL: 5000, // in ms

  // Packet headers
  PACKET_HEADER_SIZE: 36,
  PACKET_HEADER_SEQUENCE_MAX: 255, // 8 bit

  // HSBK value calculation
  HSBK_MINIMUM_KELVIN: 2500,
  HSBK_DEFAULT_KELVIN: 3500,
  HSBK_MAXIMUM_KELVIN: 9000,
  HSBK_MINIMUM_BRIGHTNESS: 0,
  HSBK_MAXIMUM_BRIGHTNESS: 100,
  HSBK_MINIMUM_SATURATION: 0,
  HSBK_MAXIMUM_SATURATION: 100,
  HSBK_MINIMUM_HUE: 0,
  HSBK_MAXIMUM_HUE: 360,

  // RGB value
  RGB_MAXIMUM_VALUE: 255,
  RGB_MINIMUM_VALUE: 0,

  // Infrared values
  IR_MINIMUM_BRIGHTNESS: 0,
  IR_MAXIMUM_BRIGHTNESS: 100,

  // Waveform values, order is important here
  LIGHT_WAVEFORMS: [
    'SAW',
    'SINE',
    'HALF_SINE',
    'TRIANGLE',
    'PULSE'
  ],

  // Packet types used by internal sending process
  PACKET_TRANSACTION_TYPES: {
    ONE_WAY: 0,
    REQUEST_RESPONSE: 1
  },

  // Maps color names to hue and saturation mapping
  // Kelvin and brightness are kept the same
  COLOR_NAME_HS_VALUES: {
    white: {hue: 0, saturation: 0},
    red: {hue: 0, saturation: 100},
    orange: {hue: 35, saturation: 100},
    yellow: {hue: 59, saturation: 100},
    cyan: {hue: 179, saturation: 100},
    green: {hue: 120, saturation: 100},
    blue: {hue: 249, saturation: 100},
    purple: {hue: 279, saturation: 100},
    pink: {hue: 324, saturation: 100}
  }
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var os = __webpack_require__(110);
var constants = __webpack_require__(0).constants;
var productDetailList = __webpack_require__(111);
var utils = exports;

/**
 * Return all ip addresses of the machine
 * @return {Array} list containing ip address info
 */
utils.getHostIPs = function() {
  var ips = [];
  var ifaces = os.networkInterfaces();
  Object.keys(ifaces).forEach(function(ifname) {
    ifaces[ifname].forEach(function(iface) {
      ips.push(iface.address);
    });
  });
  return ips;
};

/**
 * Generates a random hex string of the given length
 * @example
 * // returns something like 8AF1
 * utils.getRandomHexString(4)
 * @example
 * // returns something like 0D41C8AF
 * utils.getRandomHexString()
 * @param  {Number} [length=8] string length to generate
 * @return {String}            random hex string
 */
utils.getRandomHexString = function(length) {
  var string = '';
  var chars = '0123456789ABCDEF';

  if (!length) {
    length = 8;
  }

  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    string += chars.substring(randomNumber, randomNumber + 1);
  }

  return string;
};

/**
 * Reads a little-endian unsigned 64-bit value and returns it as buffer
 * This function exists for easy replacing if a native method will be provided
 * by node.js and does not make sense like is
 * @param  {Buffer} buffer buffer to read from
 * @param  {Number} offset offset to begin reading from
 * @return {Buffer}        resulting 64-bit buffer
 */
utils.readUInt64LE = function(buffer, offset) {
  return buffer.slice(offset, offset + 8);
};

/**
 * Writes a 64-bit value provided as buffer and returns the result
 * This function exists for easy replacing if a native method will be provided
 * by node.js and does not make sense like is
 * @param  {Buffer} buffer buffer to write from
 * @param  {Number} offset offset to begin reading from
 * @param  {Buffer} input  the buffer to write
 * @return {Buffer}        resulting 64-bit buffer
 */
utils.writeUInt64LE = function(buffer, offset, input) {
  return input.copy(buffer, offset, 0, 8);
};

/**
 * Validates a given ip address is IPv4 format
 * @param  {String} ip IP address to validate
 * @return {Boolean}   is IPv4 format?
 */
utils.isIpv4Format = function(ip) {
  var ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  return ipv4Regex.test(ip);
};

/**
 * Converts an RGB Hex string to an object with decimal representations
 * @example rgbHexStringToObject('#FF00FF')
 * @param {String} rgbHexString hex value to parse, with leading #
 * @return {Object}             object with decimal values for r, g, b
 */
utils.rgbHexStringToObject = function(rgbHexString) {
  if (typeof rgbHexString !== 'string') {
    throw new TypeError('LIFX util rgbHexStringToObject expects first parameter to be a string');
  }
  var hashChar = rgbHexString.substr(0, 1);
  if (hashChar !== '#') {
    throw new RangeError('LIFX util rgbHexStringToObject expects hex parameter with leading \'#\' sign');
  }
  var pureHex = rgbHexString.substr(1);
  if (pureHex.length !== 6 && pureHex.length !== 3) {
    throw new RangeError('LIFX util rgbHexStringToObject expects hex value parameter to be 3 or 6 chars long');
  }

  var r;
  var g;
  var b;

  if (pureHex.length === 6) {
    r = pureHex.substring(0, 2);
    g = pureHex.substring(2, 4);
    b = pureHex.substring(4, 6);
  } else if (pureHex.length === 3) {
    r = pureHex.substring(0, 1);
    r += r;
    g = pureHex.substring(1, 2);
    g += g;
    b = pureHex.substring(2, 3);
    b += b;
  }

  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16)
  };
};

utils.minNumberInArray = function(array) {
  var sortedCopy = array.slice();
  sortedCopy.sort(function(a, b) {
    return a - b;
  });
  return sortedCopy[0];
};

utils.maxNumberInArray = function(array) {
  var sortedCopy = array.slice();
  sortedCopy.sort(function(a, b) {
    return a - b;
  });
  return sortedCopy[sortedCopy.length - 1];
};

/**
 * Converts an object with r,g,b integer values to an
 * hsb integer object
 * @param {Object} rgbObj object with r,g,b keys and values
 * @return {Object} hsbObj object with h,s,b keys and converted values
 */
utils.rgbToHsb = function(rgbObj) {
  var red = rgbObj.r / constants.RGB_MAXIMUM_VALUE;
  var green = rgbObj.g / constants.RGB_MAXIMUM_VALUE;
  var blue = rgbObj.b / constants.RGB_MAXIMUM_VALUE;
  var rgb = [red, green, blue];
  var hsb = {};

  var max = utils.maxNumberInArray(rgb);
  var min = utils.minNumberInArray(rgb);
  var c = max - min;

  // https://en.wikipedia.org/wiki/HSL_and_HSV#Hue_and_chroma
  var hue;
  if (c === 0) {
    hue = 0;
  } else if (max === red) {
    hue = ((green - blue) / c);
    if (hue < 0) {
      hue += 6;
    }
  } else if (max === green) {
    hue = 2 + ((blue - red) / c);
  } else { // max === blue
    hue = 4 + ((red - green) / c);
  }
  hsb.h = Math.round(60 * hue);

  // https://en.wikipedia.org/wiki/HSL_and_HSV#Lightness
  var lightness = max;
  hsb.b = Math.round(lightness * 100);

  // https://en.wikipedia.org/wiki/HSL_and_HSV#Saturation
  var saturation;
  if (c === 0) {
    saturation = 0;
  } else {
    saturation = (c / lightness);
  }
  hsb.s = Math.round(saturation * 100);

  return hsb;
};

/**
 * Get's product and vendor details for the given id's
 * hsb integer object
 * @param {Number} vendorId id of the vendor
 * @param {Number} productId id of the product
 * @return {Object|Boolean} product and details vendor details or false if not found
 */
utils.getHardwareDetails = function(vendorId, productId) {
  for (var i = 0; i < productDetailList.length; i += 1) {
    if (productDetailList[i].vid === vendorId) {
      for (var j = 0; j < productDetailList[i].products.length; j += 1) {
        if (productDetailList[i].products[j].pid === productId) {
          return {
            vendorName: productDetailList[i].name,
            productName: productDetailList[i].products[j].name,
            productFeatures: productDetailList[i].products[j].features
          };
        }
      }
    }
  }

  return false;
};


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "networkInterfaces", function() { return networkInterfaces; });
function networkInterfaces() {
    var nis = __getNetworkInterfaces();

    var ret = {};
    for (var i = 0; i < nis.length; i++) {
        var ni = nis[i];
        var iface = [];
        ret[ni.getName()] = iface;
        var addrs = ni.getInterfaceAddresses();
        for (var j = 0; j < addrs.size(); j++) {
            var addr = addrs.get(j);
            iface.push({
                address: addr.getAddress().getHostAddress(),
            });
        }
    }
    return ret;
}



/***/ }),
/* 111 */
/***/ (function(module) {

module.exports = [{"vid":1,"name":"LIFX","products":[{"pid":1,"name":"Original 1000","features":{"color":true,"infrared":false,"multizone":false}},{"pid":3,"name":"Color 650","features":{"color":true,"infrared":false,"multizone":false}},{"pid":10,"name":"White 800 (Low Voltage)","features":{"color":false,"infrared":false,"multizone":false}},{"pid":11,"name":"White 800 (High Voltage)","features":{"color":false,"infrared":false,"multizone":false}},{"pid":18,"name":"White 900 BR30 (Low Voltage)","features":{"color":false,"infrared":false,"multizone":false}},{"pid":20,"name":"Color 1000 BR30","features":{"color":true,"infrared":false,"multizone":false}},{"pid":22,"name":"Color 1000","features":{"color":true,"infrared":false,"multizone":false}},{"pid":27,"name":"LIFX A19","features":{"color":true,"infrared":false,"multizone":false}},{"pid":28,"name":"LIFX BR30","features":{"color":true,"infrared":false,"multizone":false}},{"pid":29,"name":"LIFX+ A19","features":{"color":true,"infrared":true,"multizone":false}},{"pid":30,"name":"LIFX+ BR30","features":{"color":true,"infrared":true,"multizone":false}},{"pid":31,"name":"LIFX Z","features":{"color":true,"infrared":false,"multizone":true}},{"pid":36,"name":"LIFX Downlight","features":{"color":true,"infrared":false,"multizone":false,"chain":false}},{"pid":37,"name":"LIFX Downlight","features":{"color":true,"infrared":false,"multizone":false,"chain":false}},{"pid":38,"name":"LIFX Beam","features":{"color":true,"infrared":false,"multizone":true,"chain":false}},{"pid":43,"name":"LIFX A19","features":{"color":true,"infrared":false,"multizone":false,"chain":false}},{"pid":44,"name":"LIFX BR30","features":{"color":true,"infrared":false,"multizone":false,"chain":false}},{"pid":45,"name":"LIFX+ A19","features":{"color":true,"infrared":true,"multizone":false,"chain":false}},{"pid":46,"name":"LIFX+ BR30","features":{"color":true,"infrared":true,"multizone":false,"chain":false}},{"pid":49,"name":"LIFX Mini Color","features":{"color":true,"infrared":false,"multizone":true}},{"pid":50,"name":"LIFX Mini Day and Dusk","features":{"color":false,"infrared":false,"multizone":false,"chain":false}},{"pid":51,"name":"LIFX Mini White","features":{"color":false,"infrared":false,"multizone":false,"chain":false}},{"pid":52,"name":"LIFX GU10","features":{"color":true,"infrared":false,"multizone":false,"chain":false}},{"pid":55,"name":"LIFX Tile","features":{"color":true,"infrared":false,"multizone":false,"chain":true}},{"pid":59,"name":"LIFX Mini Color","features":{"color":true,"infrared":false,"multizone":false,"chain":false}},{"pid":60,"name":"LIFX Mini Day and Dusk","features":{"color":false,"infrared":false,"multizone":false,"chain":false}},{"pid":61,"name":"LIFX Mini White","features":{"color":false,"infrared":false,"multizone":false,"chain":false}}]}];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constants = __webpack_require__(0).constants;
var packets = __webpack_require__(113);
var utils = __webpack_require__(0).utils;
var _ = {
  result: __webpack_require__(70),
  find: __webpack_require__(28),
  extend: __webpack_require__(229),
  assign: __webpack_require__(79)
};

/*
  Package headers 36 bit in total consisting of
  size - 2 bit
  frameDescription - 2 bit

  source - 4 bit
  target - 6 bit
  00 00 -
  site - 6 bit

  frameAddressDescription - 1 bit
  sequence - 1 bit
  time - 8 bit
  type - 2 bit
  00 00
 */
var Packet = {};

/**
 * Mapping for types
 * @type {Array}
 */
Packet.typeList = [
  {id: 2, name: 'getService'},
  {id: 3, name: 'stateService'},
  {id: 12, name: 'getHostInfo'},
  {id: 13, name: 'stateHostInfo'},
  {id: 14, name: 'getHostFirmware'},
  {id: 15, name: 'stateHostFirmware'},
  {id: 16, name: 'getWifiInfo'},
  {id: 17, name: 'stateWifiInfo'},
  {id: 18, name: 'getWifiFirmware'},
  {id: 19, name: 'stateWifiFirmware'},
  // {id: 20, name: 'getPower'}, // These are for device level
  // {id: 21, name: 'setPower'}, // and do not support duration value
  // {id: 22, name: 'statePower'}, // since that we don't use them
  {id: 23, name: 'getLabel'},
  {id: 24, name: 'setLabel'},
  {id: 25, name: 'stateLabel'},
  {id: 32, name: 'getVersion'},
  {id: 33, name: 'stateVersion'},
  {id: 45, name: 'acknowledgement'},
  {id: 48, name: 'getLocation'},
  {id: 50, name: 'stateLocation'},
  {id: 51, name: 'getGroup'},
  {id: 53, name: 'stateGroup'},
  {id: 54, name: 'getOwner'},
  {id: 56, name: 'stateOwner'},
  {id: 58, name: 'echoRequest'},
  {id: 59, name: 'echoResponse'},
  {id: 69, name: 'getTemperature'},
  {id: 70, name: 'stateTemperature'},
  {id: 101, name: 'getLight'},
  {id: 102, name: 'setColor'},
  {id: 103, name: 'setWaveform'},
  {id: 107, name: 'stateLight'},
  {id: 111, name: 'stateTemperature'},
  // {id: 113, name: 'setSimpleEvent'},
  // {id: 114, name: 'getSimpleEvent'},
  // {id: 115, name: 'stateSimpleEvent'},
  {id: 116, name: 'getPower'},
  {id: 117, name: 'setPower'},
  {id: 118, name: 'statePower'},
  // {id: 119, name: 'setWaveformOptional'},
  {id: 120, name: 'getInfrared'},
  {id: 121, name: 'stateInfrared'},
  {id: 122, name: 'setInfrared'},
  {id: 401, name: 'getAmbientLight'},
  {id: 402, name: 'stateAmbientLight'}
  // {id: 403, name: 'getDimmerVoltage'},
  // {id: 404, name: 'stateDimmerVoltage'}
];

/**
 * Parses a lifx packet header
 * @param {Buffer} buf Buffer containg lifx packet including header
 * @return {Object} parsed packet header
 */
Packet.headerToObject = function(buf) {
  var obj = {};
  var offset = 0;

  // Frame
  obj.size = buf.readUInt16LE(offset);
  offset += 2;

  var frameDescription = buf.readUInt16LE(offset);
  obj.addressable = (frameDescription & constants.ADDRESSABLE_BIT) !== 0;
  obj.tagged = (frameDescription & constants.TAGGED_BIT) !== 0;
  obj.origin = ((frameDescription & constants.ORIGIN_BITS) >> 14) !== 0;
  obj.protocolVersion = (frameDescription & constants.PROTOCOL_VERSION_BITS);
  offset += 2;

  obj.source = buf.toString('hex', offset, offset + 4);
  offset += 4;

  // Frame address
  obj.target = buf.toString('hex', offset, offset + 6);
  offset += 6;

  obj.reserved1 = buf.slice(offset, offset + 2);
  offset += 2;

  obj.site = buf.toString('utf8', offset, offset + 6);
  obj.site = obj.site.replace(/\0/g, '');
  offset += 6;

  var frameAddressDescription = buf.readUInt8(offset);
  obj.ackRequired = (frameAddressDescription & constants.ACK_REQUIRED_BIT) !== 0;
  obj.resRequired = (frameAddressDescription & constants.RESPONSE_REQUIRED_BIT) !== 0;
  offset += 1;

  obj.sequence = buf.readUInt8(offset);
  offset += 1;

  // Protocol header
  obj.time = utils.readUInt64LE(buf, offset);
  offset += 8;

  obj.type = buf.readUInt16LE(offset);
  offset += 2;

  obj.reserved2 = buf.slice(offset, offset + 2);
  offset += 2;

  return obj;
};

/**
 * Parses a lifx packet
 * @param {Buffer} buf Buffer with lifx packet
 * @return {Object} parsed packet
 */
Packet.toObject = function(buf) {
  var obj = {};

  // Try to read header of packet
  try {
    obj = this.headerToObject(buf);
  } catch (err) {
    // If this fails return with error
    return err;
  }

  if (obj.type !== undefined) {
    var typeName = _.result(_.find(this.typeList, {id: obj.type}), 'name');
    if (packets[typeName] !== undefined) {
      if (typeof packets[typeName].toObject === 'function') {
        var specificObj = packets[typeName].toObject(buf.slice(constants.PACKET_HEADER_SIZE));
        obj = _.extend(obj, specificObj);
      }
    }
  }

  return obj;
};

/**
 * Creates a lifx packet header from a given object
 * @param {Object} obj Object containg header configuration for packet
 * @return {Buffer} packet header buffer
 */
Packet.headerToBuffer = function(obj) {
  var buf = new Buffer(36);
  buf.fill(0);
  var offset = 0;

  // Frame
  buf.writeUInt16LE(obj.size, offset);
  offset += 2;

  if (obj.protocolVersion === undefined) {
    obj.protocolVersion = constants.PROTOCOL_VERSION_CURRENT;
  }
  var frameDescription = obj.protocolVersion;

  if (obj.addressable !== undefined && obj.addressable === true) {
    frameDescription |= constants.ADDRESSABLE_BIT;
  } else if (obj.source !== undefined && obj.source.length > 0 && obj.source !== '00000000') {
    frameDescription |= constants.ADDRESSABLE_BIT;
  }

  if (obj.tagged !== undefined && obj.tagged === true) {
    frameDescription |= constants.TAGGED_BIT;
  }

  if (obj.origin !== undefined && obj.origin === true) {
    // 0 or 1 to the 14 bit
    frameDescription |= (1 << 14);
  }

  buf.writeUInt16LE(frameDescription, offset);
  offset += 2;

  if (obj.source !== undefined && obj.source.length > 0) {
    if (obj.source.length === 8) {
      buf.write(obj.source, offset, 4, 'hex');
    } else {
      throw new RangeError('LIFX source must be given in 8 characters');
    }
  }
  offset += 4;

  // Frame address
  if (obj.target !== undefined && obj.target !== null) {
    buf.write(obj.target, offset, 6, 'hex');
  }
  offset += 6;

  // reserved1
  offset += 2;

  if (obj.site !== undefined && obj.site !== null) {
    buf.write(obj.site, offset, 6, 'utf8');
  }
  offset += 6;

  var frameAddressDescription = 0;
  if (obj.ackRequired !== undefined && obj.ackRequired === true) {
    frameAddressDescription |= constants.ACK_REQUIRED_BIT;
  }

  if (obj.resRequired !== undefined && obj.resRequired === true) {
    frameAddressDescription |= constants.RESPONSE_REQUIRED_BIT;
  }
  buf.writeUInt8(frameAddressDescription, offset);
  offset += 1;

  if (typeof obj.sequence === 'number') {
    buf.writeUInt8(obj.sequence, offset);
  }
  offset += 1;

  // Protocol header
  if (obj.time !== undefined) {
    utils.writeUInt64LE(buf, offset, obj.time);
  }
  offset += 8;

  if (typeof obj.type === 'number') {
    obj.type = _.result(_.find(this.typeList, {id: obj.type}), 'id');
  } else if (typeof obj.type === 'string' || obj.type instanceof String) {
    obj.type = _.result(_.find(this.typeList, {name: obj.type}), 'id');
  }
  if (obj.type === undefined) {
    throw new Error('Unknown lifx packet of type: ' + obj.type);
  }
  buf.writeUInt16LE(obj.type, offset);
  offset += 2;

  // reserved2
  offset += 2;

  return buf;
};

/**
 * Creates a packet from a configuration object
 * @param {Object} obj Object with configuration for packet
 * @return {Buffer|Boolean} the packet or false in case of error
 */
Packet.toBuffer = function(obj) {
  if (obj.type !== undefined) {
    // Map id to string if needed
    if (typeof obj.type === 'number') {
      obj.type = _.result(_.find(this.typeList, {id: obj.type}), 'name');
    } else if (typeof obj.type === 'string' || obj.type instanceof String) {
      obj.type = _.result(_.find(this.typeList, {name: obj.type}), 'name');
    }

    if (obj.type !== undefined) {
      if (typeof packets[obj.type].toBuffer === 'function') {
        var packetTypeData = packets[obj.type].toBuffer(obj);
        return Buffer.concat([
          this.headerToBuffer(obj),
          packetTypeData
        ]);
      }
      return this.headerToBuffer(obj);
    }
  }

  return false;
};

/**
 * Creates a new packet by the given type
 * Note: This does not validate the given params
 * @param  {String|Number} type the type of packet to create as number or string
 * @param  {Object} params further settings to pass
 * @param  {String} [source] the source of the packet, length 8
 * @param  {String} [target] the target of the packet, length 12
 * @return {Object} The prepared packet object including header
 */
Packet.create = function(type, params, source, target) {
  var obj = {};
  if (type !== undefined) {
    // Check if type is valid
    if (typeof type === 'string' || type instanceof String) {
      obj.type = _.result(_.find(this.typeList, {name: type}), 'id');
    } else if (typeof type === 'number') {
      var typeMatch = _.find(this.typeList, {id: type});
      obj.type = _.result(typeMatch, 'id');
      type = _.result(typeMatch, 'name');
    }
    if (obj.type === undefined) {
      return false;
    }
  } else {
    return false;
  }
  obj.size = constants.PACKET_HEADER_SIZE + packets[type].size;

  if (source !== undefined) {
    obj.source = source;
  }
  if (target !== undefined) {
    obj.target = target;
  }
  if (packets[type].tagged !== undefined) {
    obj.tagged = packets[type].tagged;
  }

  return _.assign(obj, params);
};

module.exports = Packet;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var packets = exports;

/*
 * Device related packages
 */
packets.getService = __webpack_require__(114);
packets.stateService = __webpack_require__(115);

packets.getHostInfo = __webpack_require__(116);
packets.stateHostInfo = __webpack_require__(117);

packets.getHostFirmware = __webpack_require__(118);
packets.stateHostFirmware = __webpack_require__(119);

packets.getWifiInfo = __webpack_require__(120);
packets.stateWifiInfo = __webpack_require__(121);

packets.getWifiFirmware = __webpack_require__(122);
packets.stateWifiFirmware = __webpack_require__(123);

packets.getLabel = __webpack_require__(124);
packets.setLabel = __webpack_require__(125);
packets.stateLabel = __webpack_require__(126);

packets.getPower = __webpack_require__(127);
packets.setPower = __webpack_require__(128);
packets.statePower = __webpack_require__(129);

packets.getVersion = __webpack_require__(130);
packets.stateVersion = __webpack_require__(131);

packets.acknowledgement = __webpack_require__(209);

packets.echoRequest = __webpack_require__(210);
packets.echoResponse = __webpack_require__(211);

packets.getLocation = __webpack_require__(212);
packets.stateLocation = __webpack_require__(213);

packets.getOwner = __webpack_require__(214);
packets.stateOwner = __webpack_require__(215);

packets.getGroup = __webpack_require__(216);
packets.stateGroup = __webpack_require__(217);

/*
 * Light device related packages
 */
packets.getLight = __webpack_require__(218);
packets.stateLight = __webpack_require__(219);

packets.setColor = __webpack_require__(220);
packets.setWaveform = __webpack_require__(221);

packets.getTemperature = __webpack_require__(222);
packets.stateTemperature = __webpack_require__(223);

packets.getInfrared = __webpack_require__(224);
packets.setInfrared = __webpack_require__(225);
packets.stateInfrared = __webpack_require__(226);

/*
 * Sensor related packages
 */
packets.getAmbientLight = __webpack_require__(227);
packets.stateAmbientLight = __webpack_require__(228);


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0,
  tagged: true
};

module.exports = Packet;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 5
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateService LIFX packet');
  }

  obj.service = buf.readUInt8(offset);
  offset += 1;

  /*
    Map service to a value
    -------------
    UDP -> 1
    reserved -> 2
    reserved -> 3
    reserved -> 4
  */
  if (obj.service === 1) {
    obj.service = 'udp';
  } else if (obj.service >= 2 && obj.service <= 4) {
    obj.serice = 'reserved';
  } else {
    obj.serice = 'unknown';
  }

  obj.port = buf.readUInt32LE(offset);
  offset += 4;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.writeUInt8(obj.service, offset);
  offset += 1;

  buf.writeUInt32LE(obj.port, offset);
  offset += 4;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 14
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  // Check length
  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateHostInfo LIFX packet');
  }

  obj.signal = buf.readFloatLE(offset);
  offset += 4;

  obj.tx = buf.readUInt32LE(offset);
  offset += 4;

  obj.rx = buf.readUInt32LE(offset);
  offset += 4;

  obj.mcuTemperature = buf.readUInt16LE(offset);
  offset += 2;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.writeFloatLE(obj.signal, offset);
  offset += 4;

  buf.writeUInt32LE(obj.tx, offset);
  offset += 4;

  buf.writeUInt32LE(obj.rx, offset);
  offset += 4;

  buf.writeUInt16LE(obj.mcuTemperature, offset);
  offset += 2;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0).utils;

var Packet = {
  size: 20
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  // Check length
  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateHostFirmware LIFX packet');
  }

  obj.build = utils.readUInt64LE(buf, offset);
  offset += 8;

  obj.install = utils.readUInt64LE(buf, offset);
  offset += 8;

  var version = buf.readUInt32LE(offset);
  obj.majorVersion = (version >> 16) & 0xFF;
  obj.minorVersion = version & 0xFF;
  offset += 4;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  utils.writeUInt64LE(buf, offset, obj.build);
  offset += 8;

  utils.writeUInt64LE(buf, offset, obj.install);
  offset += 8;

  buf.writeUInt32LE(obj.version, offset);
  offset += 4;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 14
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  // Check length
  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateWifiInfo LIFX packet');
  }

  obj.signal = buf.readFloatLE(offset);
  offset += 4;

  obj.tx = buf.readUInt32LE(offset);
  offset += 4;

  obj.rx = buf.readUInt32LE(offset);
  offset += 4;

  obj.mcuTemperature = buf.readUInt16LE(offset);
  offset += 2;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.writeFloatLE(obj.signal, offset);
  offset += 4;

  buf.writeUInt32LE(obj.tx, offset);
  offset += 4;

  buf.writeUInt32LE(obj.rx, offset);
  offset += 4;

  buf.writeUInt16LE(obj.mcuTemperature, offset);
  offset += 2;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0).utils;

var Packet = {
  size: 20
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  // Check length
  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateWifiFirmware LIFX packet');
  }

  obj.build = utils.readUInt64LE(buf, offset);
  offset += 8;

  obj.install = utils.readUInt64LE(buf, offset);
  offset += 8;

  var version = buf.readUInt32LE(offset);
  obj.majorVersion = (version >> 16) & 0xFF;
  obj.minorVersion = version & 0xFF;
  offset += 4;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  utils.writeUInt64LE(buf, offset, obj.build);
  offset += 8;

  utils.writeUInt64LE(buf, offset, obj.install);
  offset += 8;

  buf.writeUInt32LE(obj.version, offset);
  offset += 4;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 32
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for setLabel LIFX packet');
  }

  obj.label = buf.toString('utf8', offset, offset + 32);
  obj.label = obj.label.replace(/\0/g, '');
  offset += 32;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @param  {string} obj.label label to set, maximum 32 bytes
 * @return {Buffer} packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.write(obj.label, offset, 32, 'utf8');
  offset += 32;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 32
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateLabel LIFX packet');
  }

  obj.label = buf.toString('utf8', offset, offset + 32);
  obj.label = obj.label.replace(/\0/g, '');
  offset += 32;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @param  {string} obj.label label to set, maximum 32 bytes
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.write(obj.label, offset, 32, 'utf8');
  offset += 32;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 6
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for setPower LIFX packet');
  }

  obj.level = buf.readUInt16LE(offset);
  offset += 2;

  obj.duration = buf.readUInt32LE(offset);
  offset += 4;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @param  {Number} obj.level 0 for off, 65535 for on
 * @param  {Number} [obj.duration] transition time in milliseconds
 * @return {Buffer} packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  if (obj.level !== 0 && obj.level !== 65535) {
    throw new RangeError('Invalid level given for setPower LIFX packet, only 0 and 65535 are supported');
  }
  buf.writeUInt16LE(obj.level, offset);
  offset += 2;

  // Duration is 0 by default
  if (obj.duration !== undefined) {
    buf.writeUInt32LE(obj.duration, offset);
  }
  offset += 4;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 2
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for statePower LIFX packet');
  }

  obj.level = buf.readUInt16LE(offset);
  offset += 2;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.writeUInt16LE(obj.level, offset);
  offset += 2;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = {
  find: __webpack_require__(28)
};
var constants = __webpack_require__(0).constants;

var Packet = {
  size: 12
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  // Check length
  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateHostFirmware LIFX packet');
  }

  obj.vendorId = buf.readUInt32LE(offset);
  var vendor = _.find(constants.LIFX_VENDOR_IDS, {id: obj.vendorId});
  if (vendor !== undefined) {
    obj.vendorName = vendor.name;
  }
  offset += 4;

  obj.productId = buf.readUInt32LE(offset);
  offset += 4;

  obj.version = buf.readUInt32LE(offset);
  offset += 4;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.writeUInt32LE(obj.vendor, offset);
  offset += 4;

  buf.writeUInt32LE(obj.product, offset);
  offset += 4;

  buf.writeUInt32LE(obj.version, offset);
  offset += 4;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(52),
    isArrayLike = __webpack_require__(6),
    keys = __webpack_require__(12);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(134),
    getMatchData = __webpack_require__(192),
    matchesStrictComparable = __webpack_require__(66);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(53),
    baseIsEqual = __webpack_require__(57);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

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
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
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
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(17);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

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
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

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
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

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
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(17),
    Map = __webpack_require__(29),
    MapCache = __webpack_require__(31);

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
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(30),
    isMasked = __webpack_require__(148),
    isObject = __webpack_require__(3),
    toSource = __webpack_require__(56);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(149);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(152),
    ListCache = __webpack_require__(17),
    Map = __webpack_require__(29);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(153),
    hashDelete = __webpack_require__(154),
    hashGet = __webpack_require__(155),
    hashHas = __webpack_require__(156),
    hashSet = __webpack_require__(157);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 154 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

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
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 159 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(53),
    equalArrays = __webpack_require__(58),
    equalByTag = __webpack_require__(169),
    equalObjects = __webpack_require__(173),
    getTag = __webpack_require__(188),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(61),
    isTypedArray = __webpack_require__(63);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

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
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(31),
    setCacheAdd = __webpack_require__(165),
    setCacheHas = __webpack_require__(166);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 165 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 167 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11),
    Uint8Array = __webpack_require__(170),
    eq = __webpack_require__(9),
    equalArrays = __webpack_require__(58),
    mapToArray = __webpack_require__(171),
    setToArray = __webpack_require__(172);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

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

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

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
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 172 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(174);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(175),
    getSymbols = __webpack_require__(176),
    keys = __webpack_require__(12);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    isArray = __webpack_require__(2);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(177),
    stubArray = __webpack_require__(178);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

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


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 181 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isLength = __webpack_require__(33),
    isObjectLike = __webpack_require__(5);

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
    dataViewTag = '[object DataView]',
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
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 183 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(54);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(62)(module)))

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(34),
    nativeKeys = __webpack_require__(186);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(187);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 187 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(189),
    Map = __webpack_require__(29),
    Promise = __webpack_require__(190),
    Set = __webpack_require__(191),
    WeakMap = __webpack_require__(64),
    baseGetTag = __webpack_require__(10),
    toSource = __webpack_require__(56);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(65),
    keys = __webpack_require__(12);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(57),
    get = __webpack_require__(194),
    hasIn = __webpack_require__(67),
    isKey = __webpack_require__(36),
    isStrictComparable = __webpack_require__(65),
    matchesStrictComparable = __webpack_require__(66),
    toKey = __webpack_require__(7);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(35);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
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


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(196);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(197);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(31);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(199);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
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
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11),
    arrayMap = __webpack_require__(200),
    isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(21);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 200 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 201 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(14),
    isArguments = __webpack_require__(32),
    isArray = __webpack_require__(2),
    isIndex = __webpack_require__(13),
    isLength = __webpack_require__(33),
    toKey = __webpack_require__(7);

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
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(204),
    basePropertyDeep = __webpack_require__(205),
    isKey = __webpack_require__(36),
    toKey = __webpack_require__(7);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 204 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(35);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(68),
    baseIteratee = __webpack_require__(52),
    toInteger = __webpack_require__(69);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(208);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3),
    isSymbol = __webpack_require__(21);

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
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 64
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  // Check length
  if (buf.length !== this.size) {
    throw new Error('Invalid length given for echoRequest LIFX packet');
  }

  obj.payload = buf.toString('utf8', offset, offset + 64);
  offset += 64;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * This packet expects payload field of max. length 64 utf8
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.write(obj.payload, offset, 64);
  offset += 64;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 64
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  // Check length
  if (buf.length !== this.size) {
    throw new Error('Invalid length given for echoResponse LIFX packet');
  }

  obj.payload = buf.toString('utf8', offset, offset + 64);
  obj.payload = obj.payload.replace(/\0/g, '');
  offset += 64;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * This packet expects payload field of max. length 64 utf8
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.write(obj.payload, offset, 64);
  offset += 64;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0).utils;

var Packet = {
  size: 56
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateLocation LIFX packet');
  }

  obj.location = buf.toString('hex', offset, offset + 16);
  offset += 16;

  obj.label = buf.toString('utf8', offset, offset + 32);
  obj.label = obj.label.replace(/\0/g, '');
  offset += 32;

  obj.updatedAt = utils.readUInt64LE(buf, offset);
  offset += 8;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.write(obj.location, offset, 16, 'hex');
  offset += 16;

  buf.write(obj.label, offset, 32, 'utf8');
  offset += 32;

  utils.writeUInt64LE(buf, offset, obj.updatedAt);
  offset += 8;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0).utils;

var Packet = {
  size: 56
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateOwner LIFX packet');
  }

  obj.owner = buf.toString('hex', offset, offset + 16);
  offset += 16;

  obj.label = buf.toString('utf8', offset, offset + 32);
  obj.label = obj.label.replace(/\0/g, '');
  offset += 32;

  obj.updatedAt = utils.readUInt64LE(buf, offset);
  offset += 8;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  if (obj.owner !== undefined) {
    buf.write(obj.owner, offset, 16, 'hex');
    offset += 16;
  }

  if (obj.label !== undefined) {
    buf.write(obj.label, offset, 32, 'utf8');
    offset += 32;
  }

  if (obj.updatedAt !== undefined) {
    utils.writeUInt64LE(buf, offset, obj.updatedAt);
    offset += 8;
  }

  return buf;
};

module.exports = Packet;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0).utils;

var Packet = {
  size: 56
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateGroup LIFX packet');
  }

  obj.group = buf.toString('hex', offset, offset + 16);
  offset += 16;

  obj.label = buf.toString('utf8', offset, offset + 32);
  obj.label = obj.label.replace(/\0/g, '');
  offset += 32;

  obj.updatedAt = utils.readUInt64LE(buf, offset);
  offset += 8;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.write(obj.group, offset, 16, 'hex');
  offset += 16;

  buf.write(obj.label, offset, 32, 'utf8');
  offset += 32;

  utils.writeUInt64LE(buf, offset, obj.updatedAt);
  offset += 8;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0).utils;

var Packet = {
  size: 52
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateLight LIFX packet');
  }

  obj.color = {};
  obj.color.hue = buf.readUInt16LE(offset);
  offset += 2;
  obj.color.saturation = buf.readUInt16LE(offset);
  offset += 2;
  obj.color.brightness = buf.readUInt16LE(offset);
  offset += 2;
  obj.color.kelvin = buf.readUInt16LE(offset);
  offset += 2;

  obj.dim = buf.readUInt16LE(offset);
  offset += 2;

  obj.power = buf.readUInt16LE(offset);
  offset += 2;

  obj.label = buf.toString('utf8', offset, offset + 32);
  obj.label = obj.label.replace(/\0/g, '');
  offset += 32;

  obj.tags = utils.readUInt64LE(buf, offset);
  offset += 8;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.writeUInt16LE(obj.color.hue, offset);
  offset += 2;
  buf.writeUInt16LE(obj.color.saturation, offset);
  offset += 2;
  buf.writeUInt16LE(obj.color.brightness, offset);
  offset += 2;
  buf.writeUInt16LE(obj.color.kelvin, offset);
  offset += 2;

  buf.writeUInt16LE(obj.dim, offset);
  offset += 2;

  buf.writeUInt16LE(obj.power, offset);
  offset += 2;

  buf.write(obj.label, offset, 32, 'utf8');
  offset += 32;

  utils.writeUInt64LE(buf, offset, obj.tags);
  offset += 8;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constants = __webpack_require__(0).constants;

var Packet = {
  size: 13
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for setColor LIFX packet');
  }

  obj.stream = buf.readUInt8(offset);
  offset += 1;

  obj.color = {};
  obj.color.hue = buf.readUInt16LE(offset);
  offset += 2;
  obj.color.saturation = buf.readUInt16LE(offset);
  offset += 2;
  obj.color.brightness = buf.readUInt16LE(offset);
  offset += 2;
  obj.color.kelvin = buf.readUInt16LE(offset);
  offset += 2;

  obj.duration = buf.readUInt32LE(offset);
  offset += 4;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @param  {Object} obj.color an objects with colors to set
 * @param  {Number} obj.color.hue between 0 and 65535
 * @param  {Number} obj.color.saturation between 0 and 65535
 * @param  {Number} obj.color.brightness between 0 and 65535
 * @param  {Number} obj.color.kelvin between 2500 and 9000
 * @param  {Number} [obj.duration] transition time in milliseconds
 * @return {Buffer} packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  // obj.stream field has unknown function so leave it as 0
  offset += 1;

  if (typeof obj.hue !== 'number' && obj.hue < 0 || obj.hue > 65535) {
    throw new RangeError('Invalid color hue given for setColor LIFX packet, must be a number between 0 and 65535');
  }
  buf.writeUInt16LE(obj.hue, offset);
  offset += 2;

  if (typeof obj.saturation !== 'number' && obj.saturation < 0 || obj.saturation > 65535) {
    throw new RangeError('Invalid color saturation given for setColor LIFX packet, must be a number between 0 and 65535');
  }
  buf.writeUInt16LE(obj.saturation, offset);
  offset += 2;

  if (typeof obj.brightness !== 'number' && obj.brightness < 0 || obj.brightness > 65535) {
    throw new RangeError('Invalid color brightness given for setColor LIFX packet, must be a number between 0 and 65535');
  }
  buf.writeUInt16LE(obj.brightness, offset);
  offset += 2;

  if (obj.kelvin === undefined) {
    obj.kelvin = constants.HSBK_DEFAULT_KELVIN;
  }
  if (typeof obj.kelvin !== 'number' && obj.kelvin < 2500 || obj.kelvin > 9000) {
    throw new RangeError('Invalid color kelvin given for setColor LIFX packet, must be a number between 2500 and 9000');
  }
  buf.writeUInt16LE(obj.kelvin, offset);
  offset += 2;

  // Duration is 0 by default
  if (obj.duration !== undefined) {
    buf.writeUInt32LE(obj.duration, offset);
  }
  offset += 4;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constants = __webpack_require__(0).constants;

var Packet = {
  size: 21
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for setWaveform LIFX packet');
  }

  obj.stream = buf.readUInt8(offset);
  offset += 1;

  obj.isTransient = buf.readUInt8(offset);
  offset += 1;

  obj.color = {};
  obj.color.hue = buf.readUInt16LE(offset);
  offset += 2;
  obj.color.saturation = buf.readUInt16LE(offset);
  offset += 2;
  obj.color.brightness = buf.readUInt16LE(offset);
  offset += 2;
  obj.color.kelvin = buf.readUInt16LE(offset);
  offset += 2;

  obj.period = buf.readUInt32LE(offset);
  offset += 4;

  obj.cycles = buf.readFloatLE(offset);
  offset += 4;

  obj.skewRatio = buf.readUInt16LE(offset);
  offset += 2;

  obj.waveform = buf.readUInt8(offset);
  offset += 1;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object}  obj object with configuration data
 * @param  {Boolean} obj.isTransient restore color used before effect
 * @param  {Object}  obj.color an objects with colors to set
 * @param  {Number}  obj.color.hue between 0 and 65535
 * @param  {Number}  obj.color.saturation between 0 and 65535
 * @param  {Number}  obj.color.brightness between 0 and 65535
 * @param  {Number}  [obj.color.kelvin=3500] between 2500 and 9000
 * @param  {Number}  obj.period length of one cycle in milliseconds
 * @param  {Number}  obj.cycles how often to repeat through effect
 * @param  {Number}  obj.skewRatio distribution between time on original and new color , positive is for more new color, negative for original color
 * @param  {Number}  obj.waveform between 0 and 4 for form of effect
 * @return {Buffer}  packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  // obj.stream field has unknown function so leave it as 0
  offset += 1;

  if (obj.isTransient === undefined) {
    throw new TypeError('obj.isTransient value must be given for setWaveform LIFX packet');
  }
  if (typeof obj.isTransient !== 'boolean') {
    throw new TypeError('Invalid isTransient value given for setWaveform LIFX packet, must be boolean');
  }
  buf.writeUInt8(obj.isTransient, offset);
  offset += 1;

  if (typeof obj.color !== 'object') {
    throw new TypeError('Invalid object for color given for setWaveform LIFX packet');
  }

  if (typeof obj.color.hue !== 'number' && obj.color.hue < 0 || obj.color.hue > 65535) {
    throw new RangeError('Invalid color hue given for setWaveform LIFX packet, must be a number between 0 and 65535');
  }
  buf.writeUInt16LE(obj.color.hue, offset);
  offset += 2;

  if (typeof obj.color.saturation !== 'number' && obj.color.saturation < 0 || obj.color.saturation > 65535) {
    throw new RangeError('Invalid color saturation given for setWaveform LIFX packet, must be a number between 0 and 65535');
  }
  buf.writeUInt16LE(obj.color.saturation, offset);
  offset += 2;

  if (typeof obj.color.brightness !== 'number' && obj.color.brightness < 0 || obj.color.brightness > 65535) {
    throw new RangeError('Invalid color brightness given for setWaveform LIFX packet, must be a number between 0 and 65535');
  }
  buf.writeUInt16LE(obj.color.brightness, offset);
  offset += 2;

  if (obj.color.kelvin === undefined) {
    obj.color.kelvin = constants.HSBK_DEFAULT_KELVIN;
  }
  if (typeof obj.color.kelvin !== 'number' && obj.color.kelvin < 2500 || obj.color.kelvin > 9000) {
    throw new RangeError('Invalid color kelvin given for setWaveform LIFX packet, must be a number between 2500 and 9000');
  }
  buf.writeUInt16LE(obj.color.kelvin, offset);
  offset += 2;

  if (obj.period === undefined) {
    throw new TypeError('obj.period value must be given for setWaveform LIFX packet');
  }
  if (typeof obj.period !== 'number') {
    throw new TypeError('Invalid period type given for setWaveform LIFX packet, must be a number');
  }
  buf.writeUInt32LE(obj.period, offset);
  offset += 4;

  if (obj.cycles === undefined) {
    throw new TypeError('obj.cycles value must be given for setWaveform LIFX packet');
  }
  if (typeof obj.cycles !== 'number') {
    throw new TypeError('Invalid cycles type given for setWaveform LIFX packet, must be a number');
  }
  buf.writeFloatLE(obj.cycles, offset);
  offset += 4;

  if (obj.skewRatio === undefined) {
    throw new TypeError('obj.skewRatio value must be given for setWaveform LIFX packet');
  }
  if (typeof obj.skewRatio !== 'number') {
    throw new TypeError('Invalid skewRatio type given for setWaveform LIFX packet, must be a number');
  }
  buf.writeInt16LE(obj.skewRatio, offset);
  offset += 2;

  if (obj.waveform === undefined) {
    throw new TypeError('obj.waveform value must be given for setWaveform LIFX packet');
  }
  if (typeof obj.waveform !== 'number' && obj.waveform < 0 || obj.waveform > (constants.LIGHT_WAVEFORMS.length - 1)) {
    throw new RangeError('Invalid waveform value given for setWaveform LIFX packet, must be a number between 0 and ' + (constants.LIGHT_WAVEFORMS.length - 1));
  }
  buf.writeUInt8(obj.waveform, offset);
  offset += 1;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 2
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateTemperature LIFX packet');
  }

  obj.temperature = buf.readUInt16LE(offset);
  offset += 2;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.writeUInt16LE(obj.temperature, offset);
  offset += 2;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 2
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for setInfrared LIFX packet');
  }

  obj.brightness = buf.readUInt16LE(offset);
  offset += 2;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @param  {Number} obj.brightness between 0 and 65535
 * @return {Buffer} packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  if (typeof obj.brightness !== 'number' && obj.brightness < 0 && obj.brightness > 65535) {
    throw new RangeError('Invalid brightness given for setInfrared LIFX packet, must be a number between 0 and 65535');
  }
  buf.writeUInt16LE(obj.brightness, offset);
  offset += 2;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 2
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateInfrared LIFX packet');
  }

  obj.brightness = buf.readUInt16LE(offset);
  offset += 2;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.writeUInt16LE(obj.brightness, offset);
  offset += 2;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 0
};

module.exports = Packet;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Packet = {
  size: 4
};

/**
 * Converts packet specific data from a buffer to an object
 * @param  {Buffer} buf Buffer containing only packet specific data no header
 * @return {Object}     Information contained in packet
 */
Packet.toObject = function(buf) {
  var obj = {};
  var offset = 0;

  if (buf.length !== this.size) {
    throw new Error('Invalid length given for stateAmbientLight LIFX packet');
  }

  obj.flux = buf.readFloatLE(offset);
  offset += 4;

  return obj;
};

/**
 * Converts the given packet specific object into a packet
 * @param  {Object} obj object with configuration data
 * @param  {Number} obj.flux flux value to set
 * @return {Buffer}     packet
 */
Packet.toBuffer = function(obj) {
  var buf = new Buffer(this.size);
  buf.fill(0);
  var offset = 0;

  buf.writeFloatLE(obj.flux, offset);
  offset += 4;

  return buf;
};

module.exports = Packet;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(230);


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(71),
    createAssigner = __webpack_require__(74),
    keysIn = __webpack_require__(78);

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

module.exports = assignIn;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(232),
    defineProperty = __webpack_require__(73),
    identity = __webpack_require__(15);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 232 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3),
    isPrototype = __webpack_require__(34),
    nativeKeysIn = __webpack_require__(234);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 234 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var packet = __webpack_require__(0).packet;
var constants = __webpack_require__(0).constants;
var utils = __webpack_require__(0).utils;
var _ = {
  pick: __webpack_require__(236),
  assign: __webpack_require__(79)
};

/**
 * A representation of a light bulb
 * @class
 * @param {Obj} constr constructor object
 * @param {Lifx/Client} constr.client the client the light belongs to
 * @param {String} constr.id the id used to target the light
 * @param {String} constr.address ip address of the light
 * @param {Number} constr.port port of the light
 * @param {Number} constr.seenOnDiscovery on which discovery the light was last seen
 */
function Light(constr) {
  this.client = constr.client;
  this.id = constr.id; // Used to target the light
  this.address = constr.address;
  this.port = constr.port;
  this.label = null;
  this.status = 'on';

  this.seenOnDiscovery = constr.seenOnDiscovery;
}

/**
 * Turns the light off
 * @example light('192.168.2.130').off()
 * @param {Number} [duration] transition time in milliseconds
 * @param {Function} [callback] called when light did receive message
 */
Light.prototype.off = function(duration, callback) {
  if (duration !== undefined && typeof duration !== 'number') {
    throw new RangeError('LIFX light off method expects duration to be a number');
  }
  if (callback !== undefined && typeof callback !== 'function') {
    throw new TypeError('LIFX light off method expects callback to be a function');
  }
  var packetObj = packet.create('setPower', {level: 0, duration: duration}, this.client.source);
  packetObj.target = this.id;
  this.client.send(packetObj, callback);
};

/**
 * Turns the light on
 * @example light('192.168.2.130').on()
 * @param {Number} [duration] transition time in milliseconds
 * @param {Function} [callback] called when light did receive message
 */
Light.prototype.on = function(duration, callback) {
  if (duration !== undefined && typeof duration !== 'number') {
    throw new RangeError('LIFX light on method expects duration to be a number');
  }
  if (callback !== undefined && typeof callback !== 'function') {
    throw new TypeError('LIFX light on method expects callback to be a function');
  }
  var packetObj = packet.create('setPower', {level: 65535, duration: duration}, this.client.source);
  packetObj.target = this.id;
  this.client.send(packetObj, callback);
};

/**
 * Changes the color to the given HSBK value
 * @param {Number} hue        color hue from 0 - 360 (in °)
 * @param {Number} saturation color saturation from 0 - 100 (in %)
 * @param {Number} brightness color brightness from 0 - 100 (in %)
 * @param {Number} [kelvin=3500]   color kelvin between 2500 and 9000
 * @param {Number} [duration] transition time in milliseconds
 * @param {Function} [callback] called when light did receive message
 */
Light.prototype.color = function(hue, saturation, brightness, kelvin, duration, callback) {
  if (typeof hue !== 'number' || hue < constants.HSBK_MINIMUM_HUE || hue > constants.HSBK_MAXIMUM_HUE) {
    throw new RangeError('LIFX light color method expects hue to be a number between ' +
      constants.HSBK_MINIMUM_HUE + ' and ' + constants.HSBK_MAXIMUM_HUE
    );
  }
  hue = Math.round(hue / constants.HSBK_MAXIMUM_HUE * 65535);

  if (typeof saturation !== 'number' || saturation < constants.HSBK_MINIMUM_SATURATION || saturation > constants.HSBK_MAXIMUM_SATURATION) {
    throw new RangeError('LIFX light color method expects saturation to be a number between ' +
      constants.HSBK_MINIMUM_SATURATION + ' and ' + constants.HSBK_MAXIMUM_SATURATION
    );
  }
  saturation = Math.round(saturation / constants.HSBK_MAXIMUM_SATURATION * 65535);

  if (typeof brightness !== 'number' || brightness < constants.HSBK_MINIMUM_BRIGHTNESS || brightness > constants.HSBK_MAXIMUM_BRIGHTNESS) {
    throw new RangeError('LIFX light color method expects brightness to be a number between ' +
      constants.HSBK_MINIMUM_BRIGHTNESS + ' and ' + constants.HSBK_MAXIMUM_BRIGHTNESS
    );
  }
  brightness = Math.round(brightness / constants.HSBK_MAXIMUM_BRIGHTNESS * 65535);

  if (duration !== undefined && typeof duration !== 'number') {
    throw new RangeError('LIFX light color method expects duration to be a number');
  }

  if (callback !== undefined && typeof callback !== 'function') {
    throw new TypeError('LIFX light color method expects callback to be a function');
  }

  var packetObj = packet.create('setColor', {
    hue: hue,
    saturation: saturation,
    brightness: brightness,
    kelvin: kelvin,
    duration: duration
  }, this.client.source);
  packetObj.target = this.id;
  this.client.send(packetObj, callback);
};

/**
 * Changes the color to the given rgb value
 * Note RGB poorly represents the color of light, prefer setting HSBK values with the color method
 * @example light.colorRgb(255, 0, 0)
 * @param {Integer} red value between 0 and 255 representing amount of red in color
 * @param {Integer} green value between 0 and 255 representing amount of green in color
 * @param {Integer} blue value between 0 and 255 representing amount of blue in color
 * @param {Number} [duration] transition time in milliseconds
 * @param {Function} [callback] called when light did receive message
 */
Light.prototype.colorRgb = function(red, green, blue, duration, callback) {
  if (typeof red !== 'number') {
    throw new TypeError('LIFX light colorRgb method expects first parameter red to a number');
  }
  if (red < constants.RGB_MINIMUM_VALUE || red > constants.RGB_MAXIMUM_VALUE) {
    throw new RangeError('LIFX light colorRgb method expects first parameter red to be between 0 and 255');
  }
  if (typeof green !== 'number') {
    throw new TypeError('LIFX light colorRgb method expects second parameter green to a number');
  }
  if (green < constants.RGB_MINIMUM_VALUE || green > constants.RGB_MAXIMUM_VALUE) {
    throw new RangeError('LIFX light colorRgb method expects second parameter green to be between 0 and 255');
  }
  if (typeof blue !== 'number') {
    throw new TypeError('LIFX light colorRgb method expects third parameter blue to a number');
  }
  if (blue < constants.RGB_MINIMUM_VALUE || blue > constants.RGB_MAXIMUM_VALUE) {
    throw new RangeError('LIFX light colorRgb method expects third parameter blue to be between 0 and 255');
  }

  if (duration !== undefined && typeof duration !== 'number') {
    throw new RangeError('LIFX light colorRgb method expects duration to be a number');
  }

  if (callback !== undefined && typeof callback !== 'function') {
    throw new TypeError('LIFX light colorRgb method expects callback to be a function');
  }

  var hsbObj = utils.rgbToHsb({r: red, g: green, b: blue});
  this.color(hsbObj.h, hsbObj.s, hsbObj.b, 3500, duration, callback);
};

/**
 * Changes the color to the given rgb value
 * Note RGB poorly represents the color of light, prefer setting HSBK values with the color method
 * @example light.colorRgb('#FF0000')
 * @param {String} hexString rgb hex string starting with # char
 * @param {Number} [duration] transition time in milliseconds
 * @param {Function} [callback] called when light did receive message
 */
Light.prototype.colorRgbHex = function(hexString, duration, callback) {
  if (typeof hexString !== 'string') {
    throw new TypeError('LIFX light colorRgbHex method expects first parameter hexString to a string');
  }

  if (duration !== undefined && typeof duration !== 'number') {
    throw new RangeError('LIFX light colorRgbHex method expects duration to be a number');
  }

  if (callback !== undefined && typeof callback !== 'function') {
    throw new TypeError('LIFX light colorRgbHex method expects callback to be a function');
  }

  var rgbObj = utils.rgbHexStringToObject(hexString);
  var hsbObj = utils.rgbToHsb(rgbObj);
  this.color(hsbObj.h, hsbObj.s, hsbObj.b, 3500, duration, callback);
};

/**
 * Sets the Maximum Infrared brightness
 * @param {Number} brightness infrared brightness from 0 - 100 (in %)
 * @param {Function} [callback] called when light did receive message
 */
Light.prototype.maxIR = function(brightness, callback) {
  if (typeof brightness !== 'number' || brightness < constants.IR_MINIMUM_BRIGHTNESS || brightness > constants.IR_MAXIMUM_BRIGHTNESS) {
    throw new RangeError('LIFX light setMaxIR method expects brightness to be a number between ' +
      constants.IR_MINIMUM_BRIGHTNESS + ' and ' + constants.IR_MAXIMUM_BRIGHTNESS
    );
  }
  brightness = Math.round(brightness / constants.IR_MAXIMUM_BRIGHTNESS * 65535);

  if (callback !== undefined && typeof callback !== 'function') {
    throw new TypeError('LIFX light setMaxIR method expects callback to be a function');
  }

  var packetObj = packet.create('setInfrared', {
    brightness: brightness
  }, this.client.source);
  packetObj.target = this.id;
  this.client.send(packetObj, callback);
};

/**
 * Requests the current state of the light
 * @param {Function} callback a function to accept the data
 */
Light.prototype.getState = function(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('LIFX light getState method expects callback to be a function');
  }
  var packetObj = packet.create('getLight', {}, this.client.source);
  packetObj.target = this.id;
  var sqnNumber = this.client.send(packetObj);
  this.client.addMessageHandler('stateLight', function(err, msg) {
    if (err) {
      return callback(err, null);
    }
    // Convert HSB to readable format
    msg.color.hue = Math.round(msg.color.hue * (constants.HSBK_MAXIMUM_HUE / 65535));
    msg.color.saturation = Math.round(msg.color.saturation * (constants.HSBK_MAXIMUM_SATURATION / 65535));
    msg.color.brightness = Math.round(msg.color.brightness * (constants.HSBK_MAXIMUM_BRIGHTNESS / 65535));
    // Convert power to readable format
    if (msg.power === 65535) {
      msg.power = 1;
    }
    callback(null, {
      color: msg.color,
      power: msg.power,
      label: msg.label
    });
  }, sqnNumber);
};

/**
 * Requests the current maximum setting for the infrared channel
 * @param  {Function} callback a function to accept the data
 */
Light.prototype.getMaxIR = function(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('LIFX light getMaxIR method expects callback to be a function');
  }
  var packetObj = packet.create('getInfrared', {}, this.client.source);
  packetObj.target = this.id;
  var sqnNumber = this.client.send(packetObj);
  this.client.addMessageHandler('stateInfrared', function(err, msg) {
    if (err) {
      return callback(err, null);
    }

    msg.brightness = Math.round(msg.brightness * (constants.HSBK_MAXIMUM_BRIGHTNESS / 65535));

    callback(null, msg.brightness);
  }, sqnNumber);
};

/**
 * Requests hardware info from the light
 * @param {Function} callback a function to accept the data with error and
 *                   message as parameters
 */
Light.prototype.getHardwareVersion = function(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('LIFX light getHardwareVersion method expects callback to be a function');
  }
  var packetObj = packet.create('getVersion', {}, this.client.source);
  packetObj.target = this.id;
  var sqnNumber = this.client.send(packetObj);
  this.client.addMessageHandler('stateVersion', function(err, msg) {
    if (err) {
      return callback(err, null);
    }
    var versionInfo = _.pick(msg, [
      'vendorId',
      'productId',
      'version'
    ]);
    callback(null, _.assign(
      versionInfo,
      utils.getHardwareDetails(versionInfo.vendorId, versionInfo.productId)
    ));
  }, sqnNumber);
};

/**
 * Requests used version from the microcontroller unit of the light
 * @param {Function} callback a function to accept the data
 */
Light.prototype.getFirmwareVersion = function(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('LIFX light getFirmwareVersion method expects callback to be a function');
  }
  var packetObj = packet.create('getHostFirmware', {}, this.client.source);
  packetObj.target = this.id;
  var sqnNumber = this.client.send(packetObj);
  this.client.addMessageHandler('stateHostFirmware', function(err, msg) {
    if (err) {
      return callback(err, null);
    }
    callback(null, _.pick(msg, [
      'majorVersion',
      'minorVersion'
    ]));
  }, sqnNumber);
};

/**
 * Requests infos from the microcontroller unit of the light
 * @param {Function} callback a function to accept the data
 */
Light.prototype.getFirmwareInfo = function(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('LIFX light getFirmwareVersion method expects callback to be a function');
  }
  var packetObj = packet.create('getHostInfo', {}, this.client.source);
  packetObj.target = this.id;
  var sqnNumber = this.client.send(packetObj);
  this.client.addMessageHandler('stateHostInfo', function(err, msg) {
    if (err) {
      return callback(err, null);
    }
    callback(null, _.pick(msg, [
      'signal',
      'tx',
      'rx'
    ]));
  }, sqnNumber);
};

/**
 * Requests wifi infos from for the light
 * @param {Function} callback a function to accept the data
 */
Light.prototype.getWifiInfo = function(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('LIFX light getFirmwareVersion method expects callback to be a function');
  }
  var packetObj = packet.create('getWifiInfo', {}, this.client.source);
  packetObj.target = this.id;
  var sqnNumber = this.client.send(packetObj);
  this.client.addMessageHandler('stateWifiInfo', function(err, msg) {
    if (err) {
      return callback(err, null);
    }
    callback(null, _.pick(msg, [
      'signal',
      'tx',
      'rx'
    ]));
  }, sqnNumber);
};

/**
 * Requests used version from the wifi controller unit of the light (wifi firmware version)
 * @param {Function} callback a function to accept the data
 */
Light.prototype.getWifiVersion = function(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('LIFX light getFirmwareVersion method expects callback to be a function');
  }
  var packetObj = packet.create('getWifiFirmware', {}, this.client.source);
  packetObj.target = this.id;
  var sqnNumber = this.client.send(packetObj);
  this.client.addMessageHandler('stateWifiFirmware', function(err, msg) {
    if (err) {
      return callback(err, null);
    }
    return callback(null, _.pick(msg, [
      'majorVersion',
      'minorVersion'
    ]));
  }, sqnNumber);
};

/**
 * Requests the label of the light
 * @param {Function} callback a function to accept the data
 * @param {Boolean} [cache=false] return cached result if existent
 * @return {Function} callback(err, label)
 */
Light.prototype.getLabel = function(callback, cache) {
  if (typeof callback !== 'function') {
    throw new TypeError('LIFX light getLabel method expects callback to be a function');
  }
  if (cache !== undefined && typeof cache !== 'boolean') {
    throw new TypeError('LIFX light getLabel method expects cache to be a boolean');
  }
  if (cache === true) {
    if (typeof this.label === 'string' && this.label.length > 0) {
      return callback(null, this.label);
    }
  }
  var packetObj = packet.create('getLabel', {
    target: this.id
  }, this.client.source);
  var sqnNumber = this.client.send(packetObj);
  this.client.addMessageHandler('stateLabel', function(err, msg) {
    if (err) {
      return callback(err, null);
    }
    return callback(null, msg.label);
  }, sqnNumber);
};

/**
 * Sets the label of light
 * @example light.setLabel('Kitchen')
 * @param {String} label new label to be set, maximum 32 bytes
 * @param {Function} [callback] called when light did receive message
 */
Light.prototype.setLabel = function(label, callback) {
  if (label === undefined || typeof label !== 'string') {
    throw new TypeError('LIFX light setLabel method expects label to be a string');
  }
  if (Buffer.byteLength(label, 'utf8') > 32) {
    throw new RangeError('LIFX light setLabel method expects a maximum of 32 bytes as label');
  }
  if (label.length < 1) {
    throw new RangeError('LIFX light setLabel method expects a minimum of one char as label');
  }
  if (callback !== undefined && typeof callback !== 'function') {
    throw new TypeError('LIFX light setLabel method expects callback to be a function');
  }

  var packetObj = packet.create('setLabel', {label: label}, this.client.source);
  packetObj.target = this.id;
  this.client.send(packetObj, callback);
};

/**
 * Requests ambient light value of the light
 * @param {Function} callback a function to accept the data
 */
Light.prototype.getAmbientLight = function(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('LIFX light getAmbientLight method expects callback to be a function');
  }
  var packetObj = packet.create('getAmbientLight', {}, this.client.source);
  packetObj.target = this.id;
  var sqnNumber = this.client.send(packetObj);
  this.client.addMessageHandler('stateAmbientLight', function(err, msg) {
    if (err) {
      return callback(err, null);
    }
    return callback(null, msg.flux);
  }, sqnNumber);
};

/**
 * Requests the power level of the light
 * @param {Function} callback a function to accept the data
 */
Light.prototype.getPower = function(callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('LIFX light getPower method expects callback to be a function');
  }
  var packetObj = packet.create('getPower', {}, this.client.source);
  packetObj.target = this.id;
  var sqnNumber = this.client.send(packetObj);
  this.client.addMessageHandler('statePower', function(err, msg) {
    if (err) {
      return callback(err, null);
    }
    if (msg.level === 65535) {
      msg.level = 1;
    }
    return callback(null, msg.level);
  }, sqnNumber);
};

exports.Light = Light;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(237),
    flatRest = __webpack_require__(240);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(238),
    hasIn = __webpack_require__(67);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(35),
    baseSet = __webpack_require__(239),
    castPath = __webpack_require__(14);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(37),
    castPath = __webpack_require__(14),
    isIndex = __webpack_require__(13),
    isObject = __webpack_require__(3),
    toKey = __webpack_require__(7);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(241),
    overRest = __webpack_require__(75),
    setToString = __webpack_require__(40);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(242);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    isFlattenable = __webpack_require__(243);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
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


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11),
    isArguments = __webpack_require__(32),
    isArray = __webpack_require__(2);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(45);
var dgram = __webpack_require__(248);
var EventEmitter = __webpack_require__(249);
var _ = {
  result: __webpack_require__(70),
  isArray: __webpack_require__(2),
  defaults: __webpack_require__(250),
  find: __webpack_require__(28),
  bind: __webpack_require__(251),
  forEach: __webpack_require__(272)
};
var Packet = __webpack_require__(0).packet;
var Light = __webpack_require__(0).Light;
var constants = __webpack_require__(0).constants;
var utils = __webpack_require__(0).utils;

/**
 * Creates a lifx client
 * @extends EventEmitter
 */
function Client() {
  EventEmitter.call(this);

  this.debug = false;
  this.socket = dgram.createSocket('udp4');
  this.isSocketBound = false;
  this.devices = {};
  this.port = null;
  this.messagesQueue = [];
  this.sendTimer = null;
  this.discoveryTimer = null;
  this.discoveryPacketSequence = 0;
  this.messageHandlers = [{
    type: 'stateService',
    callback: this.processDiscoveryPacket.bind(this)
  }, {
    type: 'stateLabel',
    callback: this.processLabelPacket.bind(this)
  }, {
    type: 'stateLight',
    callback: this.processLabelPacket.bind(this)
  }];
  this.sequenceNumber = 0;
  this.lightOfflineTolerance = 3;
  this.messageHandlerTimeout = 45000; // 45 sec
  this.resendPacketDelay = 150;
  this.resendMaxTimes = 5;
  this.source = utils.getRandomHexString(8);
  this.broadcastAddress = '255.255.255.255';
}
util.inherits(Client, EventEmitter);

/**
 * Creates a new socket and starts discovery
 * @example
 * init({debug: true}, function() {
 *   console.log('Client started');
 * })
 * @param {Object} [options] Configuration to use
 * @param {String} [options.address] The IPv4 address to bind to
 * @param {Number} [options.port] The port to bind to
 * @param {Boolean} [options.debug] Show debug output
 * @param {Number} [options.lightOfflineTolerance] If light hasn't answered for amount of discoveries it is set offline
 * @param {Number} [options.messageHandlerTimeout] Message handlers not called will be removed after this delay in ms
 * @param {String} [options.source] The source to send to light, must be 8 chars lowercase or digit
 * @param {Boolean} [options.startDiscovery] Weather to start discovery after initialization or not
 * @param {Array} [options.lights] Pre set list of ip addresses of known addressable lights
 * @param {String} [options.broadcast] The broadcast address to use for light discovery
 * @param {Number} [options.sendPort] The port to send messages to
 * @param {Function} [callback] Called after initialation
 */
Client.prototype.init = function(options, callback) {
  var defaults = {
    address: '0.0.0.0',
    port: 0,
    debug: false,
    lightOfflineTolerance: 3,
    messageHandlerTimeout: 45000,
    source: '',
    startDiscovery: true,
    lights: [],
    broadcast: '255.255.255.255',
    sendPort: constants.LIFX_DEFAULT_PORT,
    resendPacketDelay: 150,
    resendMaxTimes: 3
  };

  options = options || {};
  var opts = _.defaults(options, defaults);

  if (typeof opts.port !== 'number') {
    throw new TypeError('LIFX Client port option must be a number');
  } else if (opts.port > 65535 || opts.port < 0) {
    throw new RangeError('LIFX Client port option must be between 0 and 65535');
  }

  if (typeof opts.debug !== 'boolean') {
    throw new TypeError('LIFX Client debug option must be a boolean');
  }
  this.debug = opts.debug;

  if (typeof opts.lightOfflineTolerance !== 'number') {
    throw new TypeError('LIFX Client lightOfflineTolerance option must be a number');
  }
  this.lightOfflineTolerance = opts.lightOfflineTolerance;

  if (typeof opts.messageHandlerTimeout !== 'number') {
    throw new TypeError('LIFX Client messageHandlerTimeout option must be a number');
  }
  this.messageHandlerTimeout = opts.messageHandlerTimeout;

  if (typeof opts.resendPacketDelay !== 'number') {
    throw new TypeError('LIFX Client resendPacketDelay option must be a number');
  }
  this.resendPacketDelay = opts.resendPacketDelay;

  if (typeof opts.resendMaxTimes !== 'number') {
    throw new TypeError('LIFX Client resendMaxTimes option must be a number');
  }
  this.resendMaxTimes = opts.resendMaxTimes;

  if (typeof opts.broadcast !== 'string') {
    throw new TypeError('LIFX Client broadcast option must be a string');
  } else if (!utils.isIpv4Format(opts.broadcast)) {
    throw new TypeError('LIFX Client broadcast option does only allow IPv4 address format');
  }
  this.broadcastAddress = opts.broadcast;

  if (typeof opts.sendPort !== 'number') {
    throw new TypeError('LIFX Client sendPort option must be a number');
  } else if (opts.sendPort > 65535 || opts.sendPort < 1) {
    throw new RangeError('LIFX Client sendPort option must be between 1 and 65535');
  }
  this.sendPort = opts.sendPort;

  if (!_.isArray(opts.lights)) {
    throw new TypeError('LIFX Client lights option must be an array');
  } else {
    opts.lights.forEach(function(light) {
      if (!utils.isIpv4Format(light)) {
        throw new TypeError('LIFX Client lights option array element \'' + light + '\' is not expected IPv4 format');
      }
    });
  }

  if (opts.source !== '') {
    if (typeof opts.source === 'string') {
      if (/^[0-9A-F]{8}$/.test(opts.source)) {
        this.source = opts.source;
      } else {
        throw new RangeError('LIFX Client source option must be 8 hex chars');
      }
    } else {
      throw new TypeError('LIFX Client source option must be given as string');
    }
  }

  this.socket.on('error', function(err) {
    this.isSocketBound = false;
    console.error('LIFX Client UDP error');
    console.trace(err);
    this.socket.close();
    this.emit('error', err);
  }.bind(this));

  this.socket.on('message', function(msg, rinfo) {
    // Ignore own messages and false formats
    if (utils.getHostIPs().indexOf(rinfo.address) >= 0 || !Buffer.isBuffer(msg)) {
      return;
    }

    /* istanbul ignore if  */
    if (this.debug) {
      console.log('DEBUG - ' + msg.toString('hex') + ' from ' + rinfo.address);
    }

    // Parse packet to object
    var parsedMsg = Packet.toObject(msg);

    // Check if packet is read successfully
    if (parsedMsg instanceof Error) {
      console.error('LIFX Client invalid packet header error');
      console.error('Packet: ', msg.toString('hex'));
      console.trace(parsedMsg);
    } else {
      // Convert type before emitting
      var messageTypeName = _.result(_.find(Packet.typeList, {id: parsedMsg.type}), 'name');
      if (messageTypeName !== undefined) {
        parsedMsg.type = messageTypeName;
      }
      // Check for handlers of given message and rinfo
      this.processMessageHandlers(parsedMsg, rinfo);

      this.emit('message', parsedMsg, rinfo);
    }
  }.bind(this));

  this.socket.bind(opts.port, opts.address, function() {
    this.isSocketBound = true;
    this.socket.setBroadcast(true);
    this.emit('listening');
    this.port = opts.port;

    // Start scanning
    if (opts.startDiscovery) {
      this.startDiscovery(opts.lights);
    }
    if (typeof callback === 'function') {
      return callback();
    }
  }.bind(this));
};

/**
 * Destroy an instance
 */
Client.prototype.destroy = function() {
  this.stopDiscovery();
  this.stopSendingProcess();
  if (this.isSocketBound) {
    this.socket.close();
  }
};

/**
 * Sends a packet from the messages queue or stops the sending process
 * if queue is empty
 **/
Client.prototype.sendingProcess = function() {
  if (!this.isSocketBound) {
    this.stopSendingProcess();
    console.log('LIFX Client stopped sending due to unbound socket');
    return;
  }

  if (this.messagesQueue.length > 0) {
    var msg = this.messagesQueue.pop();
    if (msg.address === undefined) {
      msg.address = this.broadcastAddress;
    }
    if (msg.transactionType === constants.PACKET_TRANSACTION_TYPES.ONE_WAY) {
      this.socket.send(msg.data, 0, msg.data.length, this.sendPort, msg.address);
      /* istanbul ignore if  */
      if (this.debug) {
        console.log('DEBUG - ' + msg.data.toString('hex') + ' to ' + msg.address);
      }
    } else if (msg.transactionType === constants.PACKET_TRANSACTION_TYPES.REQUEST_RESPONSE) {
      if (msg.timesSent < this.resendMaxTimes) {
        if (Date.now() > (msg.timeLastSent + this.resendPacketDelay)) {
          this.socket.send(msg.data, 0, msg.data.length, this.sendPort, msg.address);
          msg.timesSent += 1;
          msg.timeLastSent = Date.now();
          /* istanbul ignore if  */
          if (this.debug) {
            console.log(
              'DEBUG - ' + msg.data.toString('hex') + ' to ' + msg.address +
              ', send ' + msg.timesSent + ' time(s)'
            );
          }
        }
        // Add to the end of the queue again
        this.messagesQueue.unshift(msg);
      } else {
        this.messageHandlers.forEach(function(handler, hdlrIndex) {
          if (handler.type === 'acknowledgement' && handler.sequenceNumber === msg.sequence) {
            this.messageHandlers.splice(hdlrIndex, 1);
            var err = new Error('No LIFX response after max resend limit of ' + this.resendMaxTimes);
            return handler.callback(err, null, null);
          }
        }.bind(this));
      }
    }
  } else {
    this.stopSendingProcess();
  }
};

/**
 * Starts the sending of all packages in the queue
 */
Client.prototype.startSendingProcess = function() {
  if (this.sendTimer === null) { // Already running?
    this.sendTimer = setInterval(this.sendingProcess.bind(this), constants.MESSAGE_RATE_LIMIT);
  }
};

/**
 * Stops sending of all packages in the queue
 */
Client.prototype.stopSendingProcess = function() {
  if (this.sendTimer !== null) {
    clearInterval(this.sendTimer);
    this.sendTimer = null;
  }
};

/**
 * Start discovery of lights
 * This will keep the list of lights updated, finds new lights and sets lights
 * offline if no longer found
 * @param {Array} [lights] Pre set list of ip addresses of known addressable lights to request directly
 */
Client.prototype.startDiscovery = function(lights) {
  lights = lights || [];
  var sendDiscoveryPacket = function() {
    // Sign flag on inactive lights
    _.forEach(this.devices, _.bind(function(info, deviceId) {
      if (this.devices[deviceId].status !== 'off') {
        var diff = this.discoveryPacketSequence - info.seenOnDiscovery;
        if (diff >= this.lightOfflineTolerance) {
          this.devices[deviceId].status = 'off';
          this.emit('bulb-offline', info); // deprecated
          this.emit('light-offline', info);
        }
      }
    }, this));

    // Send a discovery packet broadcast
    this.send(Packet.create('getService', {}, this.source));

    // Send a discovery packet to each light given directly
    lights.forEach(function(lightAddress) {
      var msg = Packet.create('getService', {}, this.source);
      msg.address = lightAddress;
      this.send(msg);
    }, this);

    // Keep track of a sequent number to find not answering lights
    if (this.discoveryPacketSequence >= Number.MAX_VALUE) {
      this.discoveryPacketSequence = 0;
    } else {
      this.discoveryPacketSequence += 1;
    }
  }.bind(this);

  this.discoveryTimer = setInterval(
    sendDiscoveryPacket,
    constants.DISCOVERY_INTERVAL
  );

  sendDiscoveryPacket();
};

/**
 * Checks all registered message handlers if they request the given message
 * @param  {Object} msg message to check handler for
 * @param  {Object} rinfo rinfo address info to check handler for
 */
Client.prototype.processMessageHandlers = function(msg, rinfo) {
  // Process only packages for us
  if (msg.source.toLowerCase() !== this.source.toLowerCase()) {
    return;
  }
  // We check our message handler if the answer received is requested
  this.messageHandlers.forEach(function(handler, hdlrIndex) {
    if (msg.type === handler.type) {
      if (handler.sequenceNumber !== undefined) {
        if (handler.sequenceNumber === msg.sequence) {
          // Remove if specific packet was request, since it should only be called once
          this.messageHandlers.splice(hdlrIndex, 1);
          this.messagesQueue.forEach(function(packet, packetIndex) {
            if (packet.transactionType === constants.PACKET_TRANSACTION_TYPES.REQUEST_RESPONSE &&
                packet.sequence === msg.sequence) {
              this.messagesQueue.splice(packetIndex, 1);
            }
          }.bind(this));

          // Call the function requesting the packet
          return handler.callback(null, msg, rinfo);
        }
      } else {
        // Call the function requesting the packet
        return handler.callback(null, msg, rinfo);
      }
    }

    // We want to call expired request handlers for specific packages after the
    // messageHandlerTimeout set in options, to specify an error
    if (handler.sequenceNumber !== undefined) {
      if (Date.now() > (handler.timestamp + this.messageHandlerTimeout)) {
        this.messageHandlers.splice(hdlrIndex, 1);

        var err = new Error('No LIFX response in time');
        return handler.callback(err, null, null);
      }
    }
  }, this);
};

/**
 * Processes a discovery report packet to update internals
 * @param  {Object} err Error if existant
 * @param  {Object} msg The discovery report package
 * @param  {Object} rinfo Remote host details
 */
Client.prototype.processDiscoveryPacket = function(err, msg, rinfo) {
  if (err) {
    return;
  }
  if (msg.service === 'udp' && msg.port === constants.LIFX_DEFAULT_PORT) {
    // Add / update the found gateway
    if (!this.devices[msg.target]) {
      var lightDevice = new Light({
        client: this,
        id: msg.target,
        address: rinfo.address,
        port: msg.port,
        seenOnDiscovery: this.discoveryPacketSequence
      });
      this.devices[msg.target] = lightDevice;

      // Request label
      var labelRequest = Packet.create('getLabel', {}, this.source);
      labelRequest.target = msg.target;
      this.send(labelRequest);

      this.emit('bulb-new', lightDevice); // deprecated
      this.emit('light-new', lightDevice);
    } else {
      if (this.devices[msg.target].status === 'off') {
        this.devices[msg.target].status = 'on';
        this.emit('bulb-online', this.devices[msg.target]); // deprecated
        this.emit('light-online', this.devices[msg.target]);
      }
      this.devices[msg.target].address = rinfo.address;
      this.devices[msg.target].seenOnDiscovery = this.discoveryPacketSequence;
    }
  }
};

/**
 * Processes a state label packet to update internals
 * @param {Object} err Error if existant
 * @param {Object} msg The state label package
 */
Client.prototype.processLabelPacket = function(err, msg) {
  if (err) {
    return;
  }
  if (this.devices[msg.target] !== undefined) {
    this.devices[msg.target].label = msg.label;
  }
};

/**
 * This stops the discovery process
 * The client will be no longer updating the state of lights or find lights
 */
Client.prototype.stopDiscovery = function() {
  clearInterval(this.discoveryTimer);
  this.discoveryTimer = null;
};

/**
 * Send a LIFX message objects over the network
 * @param  {Object} msg A message object or multiple with data to send
 * @param  {Function} [callback] Function to handle error and success after send
 * @return {Number} The sequence number of the request
 */
Client.prototype.send = function(msg, callback) {
  var packet = {
    timeCreated: Date.now(),
    timeLastSent: 0,
    timesSent: 0,
    transactionType: constants.PACKET_TRANSACTION_TYPES.ONE_WAY
  };

  // Add the target ip address if target given
  if (msg.address !== undefined) {
    packet.address = msg.address;
  }
  if (msg.target !== undefined) {
    var targetBulb = this.light(msg.target);
    if (targetBulb) {
      packet.address = targetBulb.address;
      // If we would exceed the max value for the int8 field start over again
      if (this.sequenceNumber >= constants.PACKET_HEADER_SEQUENCE_MAX) {
        this.sequenceNumber = 0;
      } else {
        this.sequenceNumber += 1;
      }
    }
  }

  msg.sequence = this.sequenceNumber;
  packet.sequence = this.sequenceNumber;
  if (typeof callback === 'function') {
    msg.ackRequired = true;
    this.addMessageHandler('acknowledgement', callback, msg.sequence);
    packet.transactionType = constants.PACKET_TRANSACTION_TYPES.REQUEST_RESPONSE;
  }
  packet.data = Packet.toBuffer(msg);
  this.messagesQueue.unshift(packet);
  this.startSendingProcess();

  return this.sequenceNumber;
};

/**
 * Get network address data from connection
 * @return {Object} Network address data
 */
Client.prototype.address = function() {
  var address = null;
  try {
    address = this.socket.address();
  } catch (e) {}
  return address;
};

/**
 * Sets debug on or off at runtime
 * @param  {boolean} debug debug messages on
 */
Client.prototype.setDebug = function(debug) {
  if (typeof debug !== 'boolean') {
    throw new TypeError('LIFX Client setDebug expects boolean as parameter');
  }
  this.debug = debug;
};

/**
 * Adds a message handler that calls a function when the requested
 * info was received
 * @param {String} type A type of packet to listen for, like stateLight
 * @param {Function} callback the function to call if the packet was received,
 *                   this will be called with parameters msg and rinfo
 * @param {Number} [sequenceNumber] Expects a specific sequenceNumber on which will
 *                                  be called, this will call it only once. If not
 *                                  given the callback handler is permanent
 */
Client.prototype.addMessageHandler = function(type, callback, sequenceNumber) {
  if (typeof type !== 'string') {
    throw new TypeError('LIFX Client addMessageHandler expects type parameter to be string');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('LIFX Client addMessageHandler expects callback parameter to be a function');
  }

  var typeName = _.find(Packet.typeList, {name: type});
  if (typeName === undefined) {
    throw new RangeError('LIFX Client addMessageHandler unknown packet type: ' + type);
  }

  var handler = {
    type: type,
    callback: callback.bind(this),
    timestamp: Date.now()
  };

  if (sequenceNumber !== undefined) {
    if (typeof sequenceNumber !== 'number') {
      throw new TypeError('LIFX Client addMessageHandler expects sequenceNumber to be a integer');
    } else {
      handler.sequenceNumber = sequenceNumber;
    }
  }

  this.messageHandlers.push(handler);
};

/**
 * Returns the list of all known lights
 * @example client.lights()
 * @param {String} [status='on'] Status to filter for, empty string for all
 * @return {Array} Lights
 */
Client.prototype.lights = function(status) {
  if (status === undefined) {
    status = 'on';
  } else if (typeof status !== 'string') {
    throw new TypeError('LIFX Client lights expects status to be a string');
  }

  if (status.length > 0) {
    if (status !== 'on' && status !== 'off') {
      throw new TypeError('Lifx Client lights expects status to be \'on\', \'off\' or \'\'');
    }

    var result = [];
    _.forEach(this.devices, function(light) {
      if (light.status === status) {
        result.push(light);
      }
    });
    return result;
  }

  return this.devices;
};

/**
 * Find a light by label, id or ip
 * @param {String} identifier label, id or ip to search for
 * @return {Object|Boolean} the light object or false if not found
 */
Client.prototype.light = function(identifier) {
  var result;
  if (typeof identifier !== 'string') {
    throw new TypeError('LIFX Client light expects identifier for LIFX light to be a string');
  }

  // There is no ip or id longer than 45 chars, no label longer than 32 bit
  if (identifier.length > 45 && Buffer.byteLength(identifier, 'utf8') > 32) {
    return false;
  }

  // Dots or colons is high likely an ip
  if (identifier.indexOf('.') >= 0 || identifier.indexOf(':') >= 0) {
    result = _.find(this.devices, {address: identifier}) || false;
    if (result !== false) {
      return result;
    }
  }

  // Search id
  result = _.find(this.devices, {id: identifier}) || false;
  if (result !== false) {
    return result;
  }

  // Search label
  result = _.find(this.devices, {label: identifier}) || false;

  return result;
};

exports.Client = Client;


/***/ }),
/* 245 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 247 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSocket", function() { return createSocket; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);



function Udp() {
    eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a.call(this);
}

Object(util__WEBPACK_IMPORTED_MODULE_1__["inherits"])(Udp, eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a);

Udp.prototype.close = function() {
    if (this.socket) {
        this.socket.close();
        this.socket = null;
    }
}

Udp.prototype.bind = function() {
    var port;
    var address;
    var cb;

    var type = typeof arguments[0];
    if (type == 'function') {
        cb = arguments[0];
        port = 0;
    }
    else if (type == 'number') {
        port = arguments[0];
        type = typeof arguments[1];
        if (type == 'function') {
            cb = arguments[1];
        }
        else if (type == 'string') {
            address = arguments[1];
            cb = arguments[2];
        }
        else {
            throw new Error('unexpected argument');
        }
}
    else if (type == 'object') {
        var port = arguments[0].port || 0;
        var address = arguments[0].address;
        cb = arguments[1];
    }
    else {
        throw new Error('unexpected argument');
    }

    this.ensureSocket(address, port, cb);
}

Udp.prototype.setBroadcast = function(broadcast) {
    __datagramSetBroadcast(this.socket, broadcast);
}

Udp.prototype.send = function() {
    var i = 0;
    var message = arguments[i++];
    var offset = 0;
    var length = message.length;
    var port;
    var address;
    var cb;
    if (typeof arguments[i] == 'number') {
        offset = arguments[i++];
    }
    if (typeof arguments[i] == 'number') {
        length = arguments[i++];
    }
    port = arguments[i++];
    if (typeof arguments[i] == 'string') {
        address = arguments[i++]
    }
    if (i < arguments.length) {
        cb = arguments[i++];
    }

    return __datagramSend(this.socket, new Uint8Array(message), offset, length, port, address, cb);
}

Udp.prototype.address = function() {
    return null;
}

Udp.prototype.ensureSocket = function(address, port, cb) {
    if (this.socket) {
        cb();
        return;
    }

    __datagramCreate(address, port,
    function socketCallback(e, result) {
        if (e != null) {
            this.emit('error', new Error(e.getMessage()));
            return;
        }

        this.socket = result;
        this.address = result.getLocalAddress().getHostAddress();
        this.port = result.getLocalPort();
        cb();
    }.bind(this),
    function closeCallback() {
        this.emit('close')
    }.bind(this),
    function errorCallback(e) {
        this.emit('error', new Error(e.getMessage()));
    }.bind(this),
    function messageCallback(data, remoteAddress) {
        var buffer = new Buffer(data);
        var rinfo = {
            address: remoteAddress.getHostString(),
            family: 'IPv4',
            port: remoteAddress.getPort(),
            size: data.length,
        }
        this.emit('message', buffer, rinfo);
    }.bind(this));
}

// events...
// error
// message

function createSocket(type, cb) {
    var ret = new Udp();
    if (cb) {
        ret.on('data', cb);
    }
    return ret;
}



/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(38),
    eq = __webpack_require__(9),
    isIterateeCall = __webpack_require__(77),
    keysIn = __webpack_require__(78);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(38),
    createWrap = __webpack_require__(252),
    getHolder = __webpack_require__(44),
    replaceHolders = __webpack_require__(23);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(80),
    createBind = __webpack_require__(253),
    createCurry = __webpack_require__(254),
    createHybrid = __webpack_require__(82),
    createPartial = __webpack_require__(270),
    getData = __webpack_require__(86),
    mergeData = __webpack_require__(271),
    setData = __webpack_require__(89),
    setWrapToString = __webpack_require__(90),
    toInteger = __webpack_require__(69);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var createCtor = __webpack_require__(22),
    root = __webpack_require__(1);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(39),
    createCtor = __webpack_require__(22),
    createHybrid = __webpack_require__(82),
    createRecurry = __webpack_require__(85),
    getHolder = __webpack_require__(44),
    replaceHolders = __webpack_require__(23),
    root = __webpack_require__(1);

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ }),
/* 255 */
/***/ (function(module, exports) {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(42),
    getData = __webpack_require__(86),
    getFuncName = __webpack_require__(258),
    lodash = __webpack_require__(260);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),
/* 257 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(259);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),
/* 259 */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(42),
    LodashWrapper = __webpack_require__(87),
    baseLodash = __webpack_require__(43),
    isArray = __webpack_require__(2),
    isObjectLike = __webpack_require__(5),
    wrapperClone = __webpack_require__(261);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(42),
    LodashWrapper = __webpack_require__(87),
    copyArray = __webpack_require__(88);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),
/* 262 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ }),
/* 263 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(91),
    arrayIncludes = __webpack_require__(265);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(266);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(68),
    baseIsNaN = __webpack_require__(267),
    strictIndexOf = __webpack_require__(268);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 267 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 268 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(88),
    isIndex = __webpack_require__(13);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(39),
    createCtor = __webpack_require__(22),
    root = __webpack_require__(1);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(83),
    composeArgsRight = __webpack_require__(84),
    replaceHolders = __webpack_require__(23);

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(91),
    baseEach = __webpack_require__(273),
    castFunction = __webpack_require__(278),
    isArray = __webpack_require__(2);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(274),
    createBaseEach = __webpack_require__(277);

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


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(275),
    keys = __webpack_require__(12);

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


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(276);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 276 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
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


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(6);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(15);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map