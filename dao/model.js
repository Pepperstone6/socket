import {
  userModel,
  verifyModel,
  requestVerifyModel
} from './collections'
import {
  add,
  findUser,
  find,
  findOne,
  save,
  findVerify
} from './util'

import {
  model
} from 'mongoose';

import {
  mailVerify
} from './util/mailVerify.js'
let transliteration = require('transliteration')
let pinyinlite = require('pinyinlite')
let pinyin = require('pinyin')
let formidable = require('formidable')
export function register(req, callback) {
  let form = new formidable.IncomingForm()
  let obj = {}
  let date = new Date().getTime()
  // console.log(transliteration.transliterate('@dsad`你好，世界'))
  form.parse(req, function (err, fields, files) {
    // console.log(fields,222, files,111)
 
    let {
      username,
      nickname,
      mobile,
      password,
      verifyCode
    } = fields
    findVerify(verifyModel, {
      mobile
    }).then(res => {
      // if(!res){
      //   obj = {
      //     success: false,
      //     msg: '验证码不正确,请重新输入'
      //   }
      //   callback(obj)
      //   return
      // }
      // if(res.verifyCode != verifyCode){
      //   obj = {
      //     success: false,
      //     msg: '验证码不正确,请重新输入'
      //   }
      //   callback(obj)
      //   return
      // }else if(date-res.date>300000){
      //   obj = {
      //     success: false,
      //     msg: '验证码已过期'
      //   }
      //   callback(obj)
      //   return
      // }

      if (!username) {
        obj = {
          success: false,
          msg: '用户名不能为空'
        }
        callback(obj)
        return
      } else if(/[^\w\./|_]/ig.test(username)){
        obj = {
          success: false,
          msg: '用户名只允许数字,_或者字母'
        }
        callback(obj)
        return
      }else if (!nickname) {
        obj = {
          success: false,
          msg: '昵称不能为空'
        }
        callback(obj)
        return
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(mobile)) {
        obj = {
          success: false,
          msg: '请输入正确的手机号'
        }
        callback(obj)
        return
      } else if (!/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/.test(password)) {
        obj = {
          success: false,
          msg: '密码由非空格字符组成的字符串，数字，大写字母，小写字母，特殊字符至少有两种'
        }
        callback(obj)
        return
      }
      let chat = pinyin(nickname,{
        style: pinyin.STYLE_NORMAL
      })[0]
      let letter = chat[0].substr(0,1).toUpperCase()
      if(/[A-z]/.test(letter)){
        fields.chat = letter
      }else{
        fields.chat = '#'
      }
      console.log(fields.chat)
      // if(chat.length){
      //   fields.chat = chat[0].substr(0,1).toUpperCase()
        
      // }else{
      //   fields.chat = '#'
      // }
      let findBc = (res) => {
        if (res.length) {
          let obj = {
            success: false,
            msg: '用户名已存在'
          }
          callback(obj)
          return
        }
        let findBc = (res) => {
          if (res.length) {
            let obj = {
              success: false,
              msg: '手机号已注册'
            }
            callback(obj)
            return
          }
          let config = fields
          let recordBc = (res) => {
            let obj = {
              success: true,
              msg: '注册成功'
            }
            callback(obj)
            return
          }
          add(userModel, config, recordBc)
        }
        find(userModel, {
          mobile
        }, findBc)
      }
      find(userModel, {
        username
      }, findBc)
    })
  })
}

export function login(req, callback) {
  let form = new formidable.IncomingForm()
  form.parse(req, function (err, fields, files) {
    let {
      username,
      password
    } = fields
    console.log(fields)
    if (!username) {
      let obj = {
        success: false,
        msg: '用户名不能为空'
      }
      callback(obj)
      return

    } else if (!password) {
      let obj = {
        success: false,
        msg: '密码不能为空'
      }
      callback(obj)
      return
    }
    let config = fields
    findUser(userModel, config, callback)
  })
}

export function verityInfo(req, callback) {
  let form = new formidable.IncomingForm()
  form.parse(req, function (err, fields, files) {
    let {
      mobile
    } = fields
    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(mobile)) {
      let obj = {
        success: false,
        msg: '请输入正确的手机号'
      }
      callback(obj)
      return
    }

    findVerify(verifyModel, {
      mobile
    }).then(res => {
      let date = new Date().getTime()
      let code = ""
      if (res && date - res.date <= 300000) {
        code = res.verifyCode
        date = res.date
      } else {
        code += Math.ceil(Math.random()*9)
        for (let i = 0; i < 5; i++) {
          code += Math.floor(Math.random()*10)
        }
      }
      let verityBc = (phone, code, stutas) => {
        if (stutas.success) {
          let findMobileBc = (verifyInfo) => {
            if (!verifyInfo) {
              let verifyConfig = {
                mobile: phone,
                verifyCode: code,
                date: date
              }
              let addBc = () => {
                callback(stutas)
              }
              add(verifyModel, verifyConfig, addBc)
            } else {
              verifyInfo.verifyCode = code;
              verifyInfo.date = date

              let changeBc = () => {
                callback(stutas)
              }
              save(verifyInfo, changeBc)
            }
          }
          findOne(verifyModel, {
            mobile: phone
          }, findMobileBc)
        } else {
          callback(stutas)
        }
      }
      mailVerify(mobile, code, verityBc)
    })
  })
}

export function addFriend(params, callback){
  let selectBc = (res) =>{
    console.log(res)
    if(res.length){
      let friendInfo = res[0]
      console.log(123)
      if(friendInfo.username != params.requestname){
        let obj = {
          success:true,
          data:{
            username: friendInfo.username,
            nickname: friendInfo.nickname,
            avatar: friendInfo.avatar,
            sex: friendInfo.sex
          }
        }
        callback(obj)
      }else{
        console.log(123)
        let obj = {
          success: false,
          msg: '不能将自己添加到通讯录'
        }
        callback(obj)
        return
      }
      
      // callback(res)
    }else{
      let obj = {
        success: false,
        msg: '该用户不存在'
      }
      callback(obj)
    }
  }
  console.log(params)
  find(userModel, {username: params.friendname}, selectBc)
}

export function requestAdd(req, callback){
  let form = new formidable.IncomingForm()
  form.parse(req, function(err, fields, files){
    if(err){
      console.error(err)
    }
    console.log(fields,111)
    let {requestname, friendname,requestremark, friendavatar,requestnickname} = fields
    let config = {
      requestname,
      friendname,
    }
    if(requestname === friendname){
      let obj = {
        success: false,
        msg: '没办法添加自己到通讯录'
      }
      callback(obj)
      return
    }
    // let findResult = () => {

    // }
    find(requestVerifyModel, config).then(data => {
      if(data.length){
        let obj = {
          success: false,
          msg: '你已发送过请求，请等待对方验证'
        }
        callback(obj)
        return
      }
      let params = {
        requestname,
        friendname,
        requestremark,
        friendavatar,
        requestnickname
      }
      let addResult = (addData) => {
        let obj = {
          success: true,
          msg: '请求已发送，等待对方验证'
        }
        callback(obj)
      }
      add(requestVerifyModel, params, addResult)
    })
  })
}

export function getRequestFriend(username, callback){
  
  find(requestVerifyModel, {friendname: username}).then(res => {
    let obj ={
      success: true,
      data: res
    }
    callback(obj)
  })
}
export function agreeFriendInfo(requestname, callback){
    findOne(userModel, {username: requestname}).then(data => {
      console.log(data)
      if(!data){
        let obj = {
          success: false,
          msg: '该用户不存在'
        }
      }else{
          let findResult = (findData) => {
            console.log(findData)
            let obj = {
                success: true,
                data:{
                  sex: data.sex,
                nickname: data.nickname,
                name: data.username,
                remark: findData.requestremark,
                avatar:data.avatar,
                isAgree: findData.isAgree
                }
  
            }
            callback(obj)
          }
          findOne(requestVerifyModel, {requestname: data.username}, findResult)
      }
      // let obj = {
      //   success:true,
      //   data:{
      //     name: data.username,
      //     avatar:data.avatar,
      //     remark:
      //   }
      // }
      // callback(obj)
    })
}

export function agreeRequest(req, callback){
  let form = new formidable.IncomingForm()
  form.parse(req, function(err, fields, files){
    let findResult = (data) => {
      data.isAgree = 1
      save(data)
    }
    findOne(requestVerifyModel, fields,findResult)
  })
}

export function getFriend(username, callback){
  find(requestVerifyModel, {isAgree:1,$or:[{friendname:username},{requestname:username}]}).then(res => {
    let friendArr = []
      res.forEach((item, index)=>{
        let obj ={}
        if(item.requestname != username){
          obj.username = item.requestname
          friendArr.push(obj)
        }else if(item.friendname != username){
          obj.username = item.friendname
          friendArr.push(obj)
        }
      })
      return find(userModel,{$or:friendArr})
  }).then(res => {
  let arr =  []
  res.forEach((item, index)=> {
      item = {
        sex: item.sex,
        avatar: item.avatar,
        _id: item['_id'],
        chat: item.chat,
        mobile: item.mobile,
        nickname: item.nickname,
        username: item.username
      }
      arr.push(item)
    })
    let obj ={
      success: true,
      data: arr
    }
    callback(obj)
  })
}