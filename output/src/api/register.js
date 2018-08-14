'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verify = verify;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verify(callback) {
    _axios2.default.post('/');
}