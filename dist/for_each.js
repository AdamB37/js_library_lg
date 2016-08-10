"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var forEach = function forEach(input, iteratee) {
  var fn = iteratee || function (a) {
    return a;
  };
  var target = input || [];

  for (var key in target) {
    fn(target[key], key, target);
  }

  return input;
};

exports.forEach = forEach;