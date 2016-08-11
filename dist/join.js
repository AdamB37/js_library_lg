'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var join = function join(arr) {
  var separator = arguments.length <= 1 || arguments[1] === undefined ? ',' : arguments[1];


  if (!(arr instanceof Array)) {
    return [];
  }
  var result = '';

  for (var i = 0; i <= arr.length; i++) {
    result = arr[i] + separator;
    console.log(result);
  }

  return result;
};

exports.join = join;