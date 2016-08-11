"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reverse = function reverse(arr) {

  if (!(arr instanceof Array)) {
    return [];
  }
  var values = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    values.push(arr[i]);
  }
  arr = values;

  return arr;
};

exports.reverse = reverse;