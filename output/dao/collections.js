'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  username: String,
  nickname: String,
  mobile: String,
  password: String,
  chat: String,
  friend: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  avatar: {
    type: String,
    default: 'static/images/avatar.jpg'
  }
});

var verifyCode = new mongoose.Schema({
  mobile: Number,
  verifyCode: Number,
  date: Number
});

var userModel = exports.userModel = mongoose.model('user', userSchema);
var verifyModel = exports.verifyModel = mongoose.model('verify', verifyCode);