'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var context = require.context('./', false, /\.js$/);
var modalFiles = context.keys().filter(function (item) {
  return item !== './index.js';
});

var reducers = {};
modalFiles.map(function (item) {
  reducers[item.replace(/(\.\/|\.js)/g, '')] = context(item).default;
});

exports.default = (0, _redux.combineReducers)(reducers);