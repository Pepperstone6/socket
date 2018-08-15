'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;
exports.verityInfo = verityInfo;

var _collections = require('./collections');

var _util = require('./util');

var _mongoose = require('mongoose');

var _mailVerify = require('./util/mailVerify.js');

var formidable = require('formidable');
function register(req, callback) {
  var form = new formidable.IncomingForm();
  var obj = {};
  var date = new Date().getTime();
  form.parse(req, function (err, fields, files) {
    // console.log(fields,222, files,111)

    var username = fields.username,
        nickname = fields.nickname,
        mobile = fields.mobile,
        password = fields.password,
        verifyCode = fields.verifyCode;

    (0, _util.findVerify)(_collections.verifyModel, {
      mobile: mobile
    }).then(function (res) {
      if (!res) {
        obj = {
          success: false,
          msg: '验证码不正确,请重新输入'
        };
        callback(obj);
        return;
      }
      if (res.verifyCode != verifyCode) {
        obj = {
          success: false,
          msg: '验证码不正确,请重新输入'
        };
        callback(obj);
        return;
      } else if (date - res.date > 300000) {
        obj = {
          success: false,
          msg: '验证码已过期'
        };
        callback(obj);
        return;
      }

      if (!username) {
        obj = {
          success: false,
          msg: '用户名不能为空'
        };
        callback(obj);
        return;
      } else if (!nickname) {
        obj = {
          success: false,
          msg: '昵称不能为空'
        };
        callback(obj);
        return;
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(mobile)) {
        obj = {
          success: false,
          msg: '请输入正确的手机号'
        };
        callback(obj);
        return;
      } else if (!/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/.test(password)) {
        obj = {
          success: false,
          msg: '密码由非空格字符组成的字符串，数字，大写字母，小写字母，特殊字符至少有两种'
        };
        callback(obj);
        return;
      }
      var findBc = function findBc(res) {
        if (res.length) {
          var _obj = {
            success: false,
            msg: '用户名已存在'
          };
          callback(_obj);
          return;
        }
        var findBc = function findBc(res) {
          if (res.length) {
            var _obj2 = {
              success: false,
              msg: '手机号已注册'
            };
            callback(_obj2);
            return;
          }
          var config = fields;
          var recordBc = function recordBc(res) {
            var obj = {
              success: true,
              msg: '注册成功'
            };
            callback(obj);
            return;
          };
          (0, _util.add)(_collections.userModel, config, recordBc);
        };
        (0, _util.find)(_collections.userModel, {
          mobile: mobile
        }, findBc);
      };
      (0, _util.find)(_collections.userModel, {
        username: username
      }, findBc);
    });
  });
}

function login(req, callback) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var username = fields.username,
        password = fields.password;

    if (!username) {
      var obj = {
        success: true,
        msg: '用户名不能为空'
      };
      callback(obj);
      return;
    } else if (!password) {
      var _obj3 = {
        success: true,
        msg: '密码不能为空'
      };
      callback(_obj3);
      return;
    }
    var config = fields;
    (0, _util.findUser)(_collections.userModel, config, callback);
  });
}

function verityInfo(req, callback) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var mobile = fields.mobile;

    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(mobile)) {
      var obj = {
        success: true,
        msg: '请输入正确的手机号'
      };
      callback(obj);
      return;
    }

    (0, _util.findVerify)(_collections.verifyModel, {
      mobile: mobile
    }).then(function (res) {
      var date = new Date().getTime();
      var code = "";
      if (res && date - res.date <= 300000) {
        code = res.verifyCode;
        date = res.date;
      } else {
        code += Math.ceil(Math.random() * 9);
        for (var i = 0; i < 5; i++) {
          code += Math.floor(Math.random() * 10);
        }
      }
      var verityBc = function verityBc(phone, code, stutas) {
        if (stutas.success) {
          var findMobileBc = function findMobileBc(verifyInfo) {
            if (!verifyInfo) {
              var verifyConfig = {
                mobile: phone,
                verifyCode: code,
                date: date
              };
              var addBc = function addBc() {
                callback(stutas);
              };
              (0, _util.add)(_collections.verifyModel, verifyConfig, addBc);
            } else {
              verifyInfo.verifyCode = code;
              verifyInfo.date = date;
              (0, _util.save)(verifyInfo);
            }
          };
          (0, _util.findOne)(_collections.verifyModel, {
            mobile: phone
          }, findMobileBc);
        } else {
          callback(stutas);
        }
      };
      (0, _mailVerify.mailVerify)(mobile, code, verityBc);
    });
  });
}