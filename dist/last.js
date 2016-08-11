"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var last = function last(array) {
  if (!(array instanceof Array)) {
    return [];
  }
  var lastValue = array.length - 1;

  return array[lastValue];
};
exports.last = last;