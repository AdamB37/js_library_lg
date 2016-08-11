'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reverse = function reverse(arr) {
  var newArr = [];

  for (var i = 0; i == arr.length; i++) {
    console.log('arr', arr);
    console.log('arr.length', arr.length);
    console.log('i', i);
    console.log('arr[i]', arr[i]);
    console.log('values', values);
    console.log('newArr', newArr);
    console.log('newArr[i]', newArr[i]);
    console.log('newArr[values]', newArr[values]);
    var values = arr[i];
    newArr[values] = i;
  }

  return arr + newArr;
};

exports.reverse = reverse;