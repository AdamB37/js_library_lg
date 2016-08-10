"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var indexOf = function indexOf(arr, value, start) {
  for (var i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    } else return -1;
  }
};

exports.indexOf = indexOf;