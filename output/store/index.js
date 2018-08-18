'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _getter = require('./getter');

var getters = _interopRequireWildcard(_getter);

var _vuexPersistedstate = require('vuex-persistedstate');

var _vuexPersistedstate2 = _interopRequireDefault(_vuexPersistedstate);

var _persistedstate = require('./pulgins/persistedstate.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var store = new _vuex2.default.Store({
  state: _state2.default,
  mutations: _mutations2.default,
  actions: actions,
  getters: getters,
  plugins: [(0, _vuexPersistedstate2.default)(_persistedstate.presistedConfig)]
});

exports.default = store;