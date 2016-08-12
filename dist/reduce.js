"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reduce = function reduce(collection, iteratee, memo) {
  var total = memo;

  for (var key in collection) {
    if (total === undefined) {
      total = collection[key];
    } else {
      total = iteratee(total, collection[key], key, collection);
    }
  }

  return total;
};

exports.reduce = reduce;