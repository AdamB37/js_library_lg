"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var nth = function nth(arr, value) {
  for (var i = 0; i < arr.length; i++) {

    if (arr[i] === value) {
      return i;
    } else if (value < 0) {
      var adjustedIndex = arr.length + value;
      return arr[adjustedIndex];
    }
  }
};

exports.nth = nth;