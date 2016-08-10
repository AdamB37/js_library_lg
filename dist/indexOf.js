"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var indexOf = function indexOf(arr, value) {
  var start = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

  if (!(arr instanceof Array)) {
    return -1;
  }

  for (var i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
};

exports.indexOf = indexOf;