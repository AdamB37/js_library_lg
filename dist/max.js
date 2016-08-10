"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mathMax = function mathMax(array) {
  if (!(array instanceof Array)) {
    return undefined;
  }

  var largestNum = array[0];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;

      if (el > largestNum) {
        largestNum = el;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return largestNum;
};

exports.mathMax = mathMax;