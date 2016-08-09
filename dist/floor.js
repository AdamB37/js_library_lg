'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mathFloor = undefined;

var _power = require('./util/power10');

var mathFloor = function mathFloor(number) {
  var precision = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  if (number > 0 || precision > 0) {
    var power = (0, _power.power10)(precision);

    return parseInt(number * power) / power;
  } else {
    return parseInt(number - 0.5);
  }
};

exports.mathFloor = mathFloor;