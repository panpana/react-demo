'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popconfirm = require('antd/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/popconfirm/style/css');

require('antd/lib/icon/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.less');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexPage = function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IndexPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call.apply(_ref, [this].concat(args))), _this), _this.confirmHandler = function (id) {
      _reactRouter.browserHistory.push('/commodity/' + id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IndexPage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = [{ id: 1, name: '每日坚果', intro: '弊社ではさまざまな加工技術による、', price: '38.8', restNumber: 12, url: '../../../src/assets/pro.jpg' }, { id: 2, name: '每日坚果', intro: '弊社ではさまざまな加工技術による、', price: '38.8', restNumber: 12, url: '../../src/assets/pro.jpg' }, { id: 3, name: '每日坚果', intro: '弊社ではさまざまな加工技術による、', price: '38.8', restNumber: 12, url: '../../src/assets/pro.jpg' }, { id: 4, name: '每日坚果', intro: '弊社ではさまざまな加工技術による、', price: '38.8', restNumber: 12, url: '../../src/assets/pro.jpg' }, { id: 5, name: '每日坚果', intro: '弊社ではさまざまな加工技術による、', price: '38.8', restNumber: 12, url: '../../src/assets/pro.jpg' }, { id: 6, name: '每日坚果', intro: '弊社ではさまざまな加工技術による、', price: '38.8', restNumber: 12, url: '../../src/assets/pro.jpg' }, { id: 7, name: '每日坚果', intro: '弊社ではさまざまな加工技術による、', price: '38.8', restNumber: 12, url: '../../src/assets/pro.jpg' }, { id: 8, name: '每日坚果', intro: '弊社ではさまざまな加工技術による、', price: '38.8', restNumber: 12, url: '../../src/assets/pro.jpg' }, { id: 9, name: '每日坚果', intro: '弊社ではさまざまな加工技術による、', price: '38.8', restNumber: 12, url: '../../src/assets/pro.jpg' }, { id: 10, name: '每日坚果', intro: '弊社ではさまざまな加工技術による、', price: '38.8', restNumber: 12, url: '../../src/assets/pro.jpg' }];
      return _react2.default.createElement(
        'div',
        { className: 'wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'product' },
          data.map(function (item) {
            return _react2.default.createElement(
              'div',
              { className: 'productItem', key: item.id },
              _react2.default.createElement('img', { src: item.url, className: 'img', alt: 'product' }),
              _react2.default.createElement(
                'div',
                { className: 'name' },
                item.name
              ),
              _react2.default.createElement(
                'div',
                { className: 'intro' },
                item.intro
              ),
              _react2.default.createElement(
                'div',
                { className: 'price' },
                '\uFFE5 ' + item.price
              ),
              _react2.default.createElement(
                _popconfirm2.default,
                { title: '\u786E\u8BA4\u8D2D\u4E70\uFF1F', onConfirm: _this2.confirmHandler.bind(_this2, item.id), okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88' },
                _react2.default.createElement(
                  'div',
                  { className: 'cart' },
                  _react2.default.createElement(_icon2.default, { type: 'shopping-cart' })
                )
              )
            );
          })
        )
      );
    }
  }]);

  return IndexPage;
}(_react2.default.Component);

IndexPage.propTypes = {};
exports.default = IndexPage;