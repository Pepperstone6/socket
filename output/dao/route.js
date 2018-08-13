'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;

var _model = require('./model');

var db = _interopRequireWildcard(_model);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function register(req, res) {
  var callback = function callback(data) {

    res.send(data);
  };
  db.register(req, callback);
}

function login(req, res) {
  var callback = function callback(data) {

    res.send(data);
  };
  db.login(req, callback);
}