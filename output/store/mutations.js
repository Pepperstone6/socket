'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations; // import { SET_USERINFO } from './mutation-type.js'


var _mutationType = require('./mutation-type.js');

var types = _interopRequireWildcard(_mutationType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.SET_USERINFO, function (state, userInfo) {
  state.userInfo = userInfo;
}), (0, _defineProperty3.default)(_mutations, types.SET_SOCKET, function (state, socket) {
  console.log(socket);
  state.socket = socket;
}), _mutations);
exports.default = mutations;