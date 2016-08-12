"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var shuffle = function shuffle(array) {
  var result = [].concat(_toConsumableArray(array));

  for (var index = 0; index < array.length; index++) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var temp = result[index];
    result[index] = result[randomIndex];
    result[randomIndex] = temp;
  }

  return result;
};

exports.shuffle = shuffle;