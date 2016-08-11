"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var takeRight = function takeRight(array) {
  var size = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  if (!(array instanceof Array)) {
    return [];
  }

  var result = [];

  for (var index = 1; index <= size; index++) {
    result.push(array[array.length - index]);
  }

  return result;
};

exports.takeRight = takeRight;