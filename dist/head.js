"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var head = function head(arr) {
  if (!(arr instanceof Array)) {
    return -1;
  }

  return arr[0];
};

exports.head = head;