'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//用户表
var userSchema = new mongoose.Schema({
  username: String,
  nickname: String,
  mobile: String,
  password: String,
  sex: { type: Number, max: 1, min: 0, default: 0 },
  chat: String,
  friend: [{
    type: String,
    ref: 'user'
  }],
  avatar: {
    type: String,
    default: 'static/images/avatar.jpg'
  }
});

//验证码表
var verifyCode = new mongoose.Schema({
  mobile: Number,
  verifyCode: Number,
  date: Number
});

//请求添加好友验证表
var requestVerify = new mongoose.Schema({
  requestname: String,
  friendname: String,
  requestremark: String,
  isAgree: {
    type: Number,
    default: 0
  },
  friendavatar: String,
  requestnickname: String
});

var roomSchema = new mongoose.Schema({
  username: Array,
  room: String
});

var roomModel = exports.roomModel = mongoose.model('room', roomSchema);
var userModel = exports.userModel = mongoose.model('user', userSchema);
var verifyModel = exports.verifyModel = mongoose.model('verify', verifyCode);
var requestVerifyModel = exports.requestVerifyModel = mongoose.model('requestVerify', requestVerify);