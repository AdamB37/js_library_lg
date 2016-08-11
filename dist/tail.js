"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tail = function tail(array) {
  var newArray = [];

  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
};

exports.tail = tail;