"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  username: String,
  nickname: String,
  mobile: String,
  password: String
});

var userModel = exports.userModel = mongoose.model('user', userSchema);