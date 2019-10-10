/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _emp = _interopRequireDefault(__webpack_require__(/*! ./modules/emp */ "./src/modules/emp.js"));

var _money = _interopRequireDefault(__webpack_require__(/*! ./modules/money */ "./src/modules/money.js"));

var _makeBusiness = _interopRequireDefault(__webpack_require__(/*! ./modules/makeBusiness */ "./src/modules/makeBusiness.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var emp = new _emp.default('Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann');
var money = new _money.default({
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
});
var makeBusiness = new _makeBusiness.default({
  cash: money.calcCash(),
  emp: emp.employersNames(),
  sponsors: money.getSponsors()
});
makeBusiness.viewOut();

/***/ }),

/***/ "./src/modules/emp.js":
/*!****************************!*\
  !*** ./src/modules/emp.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Emp =
/*#__PURE__*/
function () {
  function Emp() {
    _classCallCheck(this, Emp);

    for (var _len = arguments.length, employers = new Array(_len), _key = 0; _key < _len; _key++) {
      employers[_key] = arguments[_key];
    }

    this.employers = employers;
  }

  _createClass(Emp, [{
    key: "employersNames",
    value: function employersNames() {
      return this.employers.filter(function (name) {
        return name.trim().length > 0;
      }).map(function (name) {
        return name.toLowerCase().trim();
      });
    }
  }]);

  return Emp;
}();

exports.default = Emp;

/***/ }),

/***/ "./src/modules/makeBusiness.js":
/*!*************************************!*\
  !*** ./src/modules/makeBusiness.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness(_ref) {
    var _ref$owner = _ref.owner,
        owner = _ref$owner === void 0 ? 'Sam' : _ref$owner,
        _ref$cash = _ref.cash,
        cash = _ref$cash === void 0 ? 0 : _ref$cash,
        _ref$emp = _ref.emp,
        emp = _ref$emp === void 0 ? 'nobody' : _ref$emp,
        _ref$director = _ref.director,
        director = _ref$director === void 0 ? 'Victor' : _ref$director,
        _ref$sumSponsors = _ref.sumSponsors,
        sumSponsors = _ref$sumSponsors === void 0 ? '0' : _ref$sumSponsors,
        _ref$sponsors = _ref.sponsors,
        sponsors = _ref$sponsors === void 0 ? '???' : _ref$sponsors;

    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.cash = cash;
    this.emp = emp;
    this.director = director;
    this.sumSponsors = sumSponsors;
    this.sponsors = sponsors;
  }

  _createClass(MakeBusiness, [{
    key: "viewOut",
    value: function viewOut() {
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp, "\nAnd we have a sponsors:\n").concat(this.sponsors, "\nNote. Be careful with ").concat(this.sponsors[0], ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

exports.default = MakeBusiness;

/***/ }),

/***/ "./src/modules/money.js":
/*!******************************!*\
  !*** ./src/modules/money.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Money =
/*#__PURE__*/
function () {
  function Money(_ref) {
    var _ref$cash = _ref.cash,
        cash = _ref$cash === void 0 ? 0 : _ref$cash,
        _ref$eu = _ref.eu,
        eu = _ref$eu === void 0 ? [] : _ref$eu,
        _ref$rus = _ref.rus,
        rus = _ref$rus === void 0 ? [] : _ref$rus;

    _classCallCheck(this, Money);

    this.cash = cash;
    this.eu = eu;
    this.rus = rus;
  }

  _createClass(Money, [{
    key: "calcCash",
    value: function calcCash() {
      return this.cash.reduce(function (a, b) {
        return a + b;
      });
    }
  }, {
    key: "getSponsors",
    value: function getSponsors() {
      return this.eu.concat(this.rus, 'unexpected sponsor');
    }
  }]);

  return Money;
}();

exports.default = Money;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map