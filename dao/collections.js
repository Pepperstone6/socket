let mongoose = require("mongoose")
let Schema =mongoose.Schema

let userSchema =new mongoose.Schema({
  username: String,
  nickname:String,
  mobile: String,
  password: String,
  chat: String,
  friend: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  avatar: {
    type:String,
    default: 'static/images/avatar.jpg'
  }
})

let verifyCode = new mongoose.Schema({
  mobile: Number,
  verifyCode: Number,
  date: Number
})

export const userModel = mongoose.model('user', userSchema)
export const verifyModel = mongoose.model('verify', verifyCode)