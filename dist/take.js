"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var take = function take(array) {
  var size = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  if (!(array instanceof Array)) {
    return [];
  }

  if (size > array.length) {
    return [];
  }

  var result = [];

  for (var index = 0; index < size; index++) {
    result.push(array[index]);
  }

  return result;
};

exports.take = take;