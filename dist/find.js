"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var find = function find(collection, value) {
  for (var index = 0; index < collection.length; index++) {
    if (value === collection[index]) {
      return value;
    }
  }

  return undefined;
};

exports.find = find;