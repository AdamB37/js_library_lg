"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var map = function map(input, iteratee) {
  var fn = iteratee || function (a) {
    return a;
  };
  var target = input || [];
  var result = [];

  for (var key in target) {
    result.push(fn(target[key], key, target));
  }

  return result;
};

exports.map = map;