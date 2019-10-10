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