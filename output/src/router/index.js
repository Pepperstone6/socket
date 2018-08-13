'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Login from 'com/login/login'
var Login = function Login(resolve) {
  import('com/login/login').then(function (module) {
    resolve(module);
  });
};
var Forget = function Forget(resolve) {
  import('com/forget/forget').then(function (module) {
    resolve(module);
  });
};
var Register = function Register(resolve) {
  import('com/register/register').then(function (module) {
    resolve(module);
  });
};

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'login',
    component: Login
  }, {
    path: '/forget',
    name: 'forget',
    component: Forget
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }]
});