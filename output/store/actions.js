'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.verify = verify;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verify() {
  var _this = this;

  return new _promise2.default(function (resolve, reject) {
    _this.$http.post('/api/verify');
  });
}