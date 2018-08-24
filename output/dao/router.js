'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _route = require('./route');

var route = _interopRequireWildcard(_route);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {});
router.post('/login', route.login);
router.post('/register', route.register);
router.post('/verityInfo', route.verityInfo);
//查找添加的好友
router.get('/addFriend', route.addFriend);
//请求添加好友
router.post('/requestAdd', route.requestAdd);
//
router.get('/getRequestFriend', route.getRequestFriend);
//
router.get('/agreeFriendInfo', route.agreeFriendInfo);
//
router.post('/agreeRequest', route.agreeRequest);
//获取好友
router.get('/getFriend', route.getFriend);
exports.default = router;