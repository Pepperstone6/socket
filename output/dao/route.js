'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;
exports.verityInfo = verityInfo;
exports.addFriend = addFriend;

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
function verityInfo(req, res) {
  var callback = function callback(data) {
    // if(code)req.session.verifyCode = code
    // console.log(req.session,123132)
    res.send(data);
  };
  db.verityInfo(req, callback);
}

function addFriend(req, res) {
  var callback = function callback(data) {
    res.send(data);
  };
  var params = req.query;
  db.addFriend(params, callback);
}