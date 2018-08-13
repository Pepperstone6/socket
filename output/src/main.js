'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Icon = require('vue2-svg-icon/Icon.vue');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.component('icon', _Icon2.default);

// Icon.inject('user')
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.config.productionTip = false;
_axios2.default.defaults.headers['Content-Type'] = 'application/json';
_axios2.default.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

_vue2.default.prototype.$http = _axios2.default;
/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: _router2.default,
  components: { App: _App2.default },
  template: '<App/>'
});