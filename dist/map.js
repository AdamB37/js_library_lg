'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var map = function map(input, iteratee) {
  var fn = iteratee || function (a) {
    return a;
  };

  if (input instanceof Array || typeof input === 'string' || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
    return objectMap(input, fn);
  } else {
    return [];
  }
};

var objectMap = function objectMap(input, fn) {
  var result = [];

  for (var key in input) {
    result.push(fn(input[key], key, input));
  }

  return result;
};

exports.map = map;