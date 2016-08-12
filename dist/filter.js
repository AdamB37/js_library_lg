"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var filter = function filter(collection, predicate) {
  if (collection === undefined || collection === null) {
    return [];
  }

  var fn = predicate || function (a) {
    return a;
  };
  var result = [];

  for (var index = 0; index < collection.length; index++) {
    if (predicate(collection[index])) {
      result.push(collection[index]);
    }
  }

  return result;
};

exports.filter = filter;