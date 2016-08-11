"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var concat = function concat() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var result = [];

  for (var index = 0; index < args.length; index++) {
    var argument = args[index];

    if (argument instanceof Array) {
      for (var inner = 0; inner < argument.length; inner++) {
        result.push(argument[inner]);
      }
    } else {
      result.push(argument);
    }
  }

  return result;
};

exports.concat = concat;