let mongoose = require("mongoose")
let Schema =mongoose.Schema

let userSchema =new mongoose.Schema({
  username: String,
  nickname:String,
  mobile: String,
  password: String
})

export const userModel = mongoose.model('user', userSchema)