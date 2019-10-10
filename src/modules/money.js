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