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
var Index = function Index(resolve) {
  import('com/index/index').then(function (module) {
    resolve(module);
  });
};

var Message = function Message(resolve) {
  import('com/message/message').then(function (module) {
    resolve(module);
  });
};
var Relative = function Relative(resolve) {
  import('com/relative/relative').then(function (module) {
    resolve(module);
  });
};
var Search = function Search(resolve) {
  import('com/search/search').then(function (module) {
    resolve(module);
  });
};
var AddFrinend = function AddFrinend(resolve) {
  import('com/addFriend/addFriend').then(function (module) {
    resolve(module);
  });
};
var RequestAdd = function RequestAdd(resolve) {
  import('com/requestAdd/requestAdd').then(function (module) {
    resolve(module);
  });
};
var AgreeFriend = function AgreeFriend(resolve) {
  import('com/agreeFriend/agreeFriend').then(function (module) {
    resolve(module);
  });
};
_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  hash: "history",
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
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }, {
    path: '/addfriend',
    name: 'addfriend',
    component: AddFrinend
  }, {
    path: '/requestadd',
    name: 'requestadd',
    component: RequestAdd
  }, {
    path: '/agreefriend',
    name: 'agreefriend',
    component: AgreeFriend
  }, {
    path: '/index',
    name: 'index',
    component: Index,
    children: [{
      path: 'message',
      component: Message
    }, {
      path: 'relative',
      component: Relative
    }, {
      path: 'look',
      component: Message
    }, {
      path: 'dong',
      component: Message
    }]
  }]
});