'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mathCeil = undefined;

var _power = require('./util/power10');

var mathCeil = function mathCeil(number) {
  var precision = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  var power = (0, _power.power10)(precision);

  if (number > 0) {
    return parseInt(0.9 + number * power) / power;
  } else if (precision === 0) {
    return parseInt(number);
  } else {
    return -1 * parseInt(-1 * number * power) / power;
  }
};

exports.mathCeil = mathCeil;