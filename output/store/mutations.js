'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutationType = require('./mutation-type.js');

var types = _interopRequireWildcard(_mutationType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutations = (0, _defineProperty3.default)({}, types.SET_USERINFO, function (state, userInfo) {
  state.userInfo = userInfo;
}); // import { SET_USERINFO } from './mutation-type.js'
exports.default = mutations;