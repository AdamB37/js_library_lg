"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var indexOf = function indexOf(arr, value, start) {
  for (var i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      var theIndex = i;
      return theIndex;
    } else return -1;
  }
};

exports.indexOf = indexOf;