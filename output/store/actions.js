'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.verify = verify;
exports.setUserInfo = setUserInfo;
exports.setSocket = setSocket;

var _mutationType = require('./mutation-type.js');

var types = _interopRequireWildcard(_mutationType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verify() {
  var _this = this;

  return new _promise2.default(function (resolve, reject) {
    _this.$http.post('/api/verify');
  });
} // import { SET_USERINFO } from './mutation-type'
function setUserInfo(_ref, userInfo) {
  var commit = _ref.commit;

  commit(types.SET_USERINFO, userInfo);
  console.log(userInfo);
}
function setSocket(_ref2, socket) {
  var commit = _ref2.commit;

  commit(types.SET_SOCKET, socket);
}