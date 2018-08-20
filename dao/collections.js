let mongoose = require("mongoose")
let Schema =mongoose.Schema
//用户表
let userSchema =new mongoose.Schema({
  username: String,
  nickname:String,
  mobile: String,
  password: String,
  sex:{type:Number,max:1,min:0,default:0},
  chat: String,
  friend: [{
    type: String,
    ref: 'user'
  }],
  avatar: {
    type:String,
    default: 'static/images/avatar.jpg'
  }
})

//验证码表
let verifyCode = new mongoose.Schema({
  mobile: Number,
  verifyCode: Number,
  date: Number
})

//请求添加好友验证表
let  requestVerify = new mongoose.Schema({
  requestname: String,
  friendname: String,
  ramark: String,
  isAgree: {
    type: Number,
    default: 0
  },
  friendavatar: String
})

export const userModel = mongoose.model('user', userSchema)
export const verifyModel = mongoose.model('verify', verifyCode)
export const requestVerifyModel = mongoose.model('requestVerify', requestVerify)