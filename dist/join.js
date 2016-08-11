'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var join = function join(arr) {
  var separator = arguments.length <= 1 || arguments[1] === undefined ? ',' : arguments[1];


  if (!(arr instanceof Array)) {
    return [];
  }
  var values = [];

  for (var i = 0; i >= 0; i++) {
    values = arr[i] + separator;
  }

  return values;
};

exports.join = join;