"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var inRange = function inRange(num, start, end) {
  if (num >= start && num < end) return true;
  if (num < start || num > end) return false;
};

exports.inRange = inRange;