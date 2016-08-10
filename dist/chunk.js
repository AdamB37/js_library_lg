"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var chunk = function chunk(collection) {
  var chunkSize = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  if (!(collection instanceof Array)) {
    return [];
  }

  var result = [];

  for (var index = 0; index < collection.length; index += chunkSize) {
    var babyResult = [];

    for (var baby = 0; baby < chunkSize && index + baby < collection.length; baby++) {
      babyResult.push(collection[index + baby]);
    }

    result.push(babyResult);
  }

  return result;
};

exports.chunk = chunk;