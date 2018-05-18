'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('../page/App');

var _App2 = _interopRequireDefault(_App);

var _Demo = require('../page/Demo');

var _Demo2 = _interopRequireDefault(_Demo);

var _Index = require('../page/Index');

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { component: _App2.default, path: '/' },
    _react2.default.createElement(_reactRouter.Route, { component: _Index2.default, path: '/index' }),
    _react2.default.createElement(_reactRouter.Route, { component: _Demo2.default, path: 'demo/:id' })
  )
);