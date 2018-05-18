'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var TYPES = {
  TEST: Symbol('TEST')
};

var initialState = {
  test: 'mumuxi'
};

exports.actions = {
  updateCur: function updateCur(curTab) {
    return {
      type: TYPES.TEST,
      payload: curTab
    };
  }
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type;

  if (type === TYPES.TEST) {
    return _extends({}, state);
  }
  return state;
};