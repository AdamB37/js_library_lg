"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var power10 = function power10(exponent) {
  var result = 1;

  for (var e = 0; e < exponent; e++) {
    result *= 10;
  }

  return result;
};

exports.power10 = power10;