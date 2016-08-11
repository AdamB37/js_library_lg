"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var size = function size(obj) {
  var iterate = 0;
  for (var props in obj) {
    iterate++;
  }
  return iterate;
};
exports.size = size;