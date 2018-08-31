'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;
exports.verityInfo = verityInfo;
exports.addFriend = addFriend;
exports.requestAdd = requestAdd;
exports.getRequestFriend = getRequestFriend;
exports.agreeFriendInfo = agreeFriendInfo;
exports.agreeRequest = agreeRequest;
exports.getFriend = getFriend;
exports.getFriendInfo = getFriendInfo;

var _model = require('./model');

var db = _interopRequireWildcard(_model);

var _im = require('./im.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function register(req, res) {
  var callback = function callback(data) {

    res.send(data);
  };
  db.register(req, callback);
}

function login(req, res) {
  function getClientIP(req) {
    return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
    req.connection.remoteAddress || // 判断 connection 的远程 IP
    req.socket.remoteAddress || // 判断后端的 socket 的 IP
    req.connection.socket.remoteAddress;
  };
  console.log(getClientIP(req));

  var callback = function callback(data) {
    if (data.success) {
      console.log(data.username);
      var username = data.username,
          nickname = data.nickname;

      _im.socketUser[username] = nickname;
      // io.on('connection', function(socket){
      //   socket.on(data.username, function(data){
      //     console.log(data)
      //   })
      // })
    }
    data.ip = getClientIP(req);
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
function requestAdd(req, res) {
  var callback = function callback(data) {
    res.send(data);
  };
  db.requestAdd(req, callback);
}

function getRequestFriend(req, res) {
  var callback = function callback(data) {
    res.send(data);
  };
  var username = req.query.username;
  db.getRequestFriend(username, callback);
}

function agreeFriendInfo(req, res) {
  var callback = function callback(data) {
    res.send(data);
  };
  var requestname = req.query.requestname;
  db.agreeFriendInfo(requestname, callback);
}

function agreeRequest(req, res) {
  var callback = function callback(data) {
    console.log(data);
  };
  db.agreeRequest(req, callback);
}

function getFriend(req, res) {
  var callback = function callback(data) {
    res.send(data);
  };
  var username = req.query.username;
  db.getFriend(username, callback);
}

function getFriendInfo(req, res) {
  var callback = function callback(data) {
    res.send(data);
  };
  var friendname = req.query.friendname;
  db.getFriendInfo(friendname, callback);
}