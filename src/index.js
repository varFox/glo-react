"use strict";

var _emp = _interopRequireDefault(require("./modules/emp"));

var _money = _interopRequireDefault(require("./modules/money"));

var _makeBusiness = _interopRequireDefault(require("./modules/makeBusiness"));

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