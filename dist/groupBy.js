'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var groupBy = function groupBy(collection, iteratee) {
  var fn = resolveIteratee(iteratee);

  var result = {};

  for (var key in collection) {
    var resultKey = fn(collection[key]);
    console.log(fn, collection[key], resultKey);

    result[resultKey] = result[resultKey] || [];
    result[resultKey].push(collection[key]);
  }

  return result;
};

var resolveIteratee = function resolveIteratee(iteratee) {
  if (_typeof(iteratee === 'string')) {
    return function (object) {
      return object[iteratee];
    };
  } else {
    return iteratee || function (a) {
      return a;
    };
  }
};

exports.groupBy = groupBy;