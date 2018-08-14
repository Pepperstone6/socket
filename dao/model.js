import {
  userModel,
  verifyModel
} from './collections'
import {
  add,
  findUser,
  find,
  findOne,
  save
} from './util'

import {
  model
} from 'mongoose';

import {
  mailVerify
} from './util/mailVerify.js'
let formidable = require('formidable')
export function register(req, callback) {
  let form = new formidable.IncomingForm()
  let obj = {}
  form.parse(req, function (err, fields, files) {
    // console.log(fields,222, files,111)

    let {
      username,
      nickname,
      mobile,
      password,
      verifyCode
    } = fields
    console.log(req.session.verifyCode, verifyCode)
    if (req.session.verifyCode != verifyCode) {
      obj = {
        success: true,
        msg: '验证码不正确'
      }
      callback(obj)
      return
    }
    if (!username) {
      obj = {
        success: true,
        msg: '用户名不能为空'
      }
      callback(obj)
      return
    } else if (!nickname) {
      obj = {
        success: true,
        msg: '昵称不能为空'
      }
      callback(obj)
      return
    } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(mobile)) {
      obj = {
        success: true,
        msg: '请输入正确的手机号'
      }
      callback(obj)
      return
    } else if (!/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/.test(password)) {
      obj = {
        success: true,
        msg: '密码由非空格字符组成的字符串，数字，大写字母，小写字母，特殊字符至少有两种'
      }
      callback(obj)
      return
    }
    let findBc = (res) => {
      if (res.length) {
        let obj = {
          success: true,
          msg: '用户名已存在'
        }
        callback(obj)
        return
      }
      let findBc = (res) => {
        if (res.length) {
          let obj = {
            success: true,
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
}

export function login(req, callback) {
  let form = new formidable.IncomingForm()
  form.parse(req, function (err, fields, files) {
    let {
      username,
      password
    } = fields
    if (!username) {
      let obj = {
        success: true,
        msg: '用户名不能为空'
      }
      callback(obj)
      return

    } else if (!password) {
      let obj = {
        success: true,
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
        success: true,
        msg: '请输入正确的手机号'
      }
      callback(obj)
      return
    }
    let code = "" + Math.ceil(Math.random() * 9)
    for (let i = 0; i < 5; i++) {
      code += Math.floor(Math.random() * 10)
    }
    let verityBc = (phone, code, stutas) => {

      if (stutas.success) {
        let findMobileBc = (verifyInfo) => {
          if (!Object.keys(verifyInfo).length) {
            let verifyConfig = {
              mobile: phone,
              verifyCode: code,
              date: new Date().getTime()
            }
            let addBc = () => {
              callback(stutas)
            }
            add(verifyModel, verifyConfig, addBc)
          }else{
            verifyInfo.verifyCode = code;
            verifyInfo.date = new Date().getTime()
            save(verifyInfo)
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
}
