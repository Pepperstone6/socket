'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;

var _collections = require('./collections');

var _util = require('./util');

var _mongoose = require('mongoose');

var formidable = require('formidable');
function register(req, callback) {
  var form = new formidable.IncomingForm();
  var obj = {};
  form.parse(req, function (err, fields, files) {
    // console.log(fields,222, files,111)
    var username = fields.username,
        nickname = fields.nickname,
        mobile = fields.mobile,
        password = fields.password;

    if (!username) {
      obj = {
        success: true,
        msg: '用户名不能为空'
      };
      callback(obj);
      return;
    } else if (!nickname) {
      obj = {
        success: true,
        msg: '昵称不能为空'
      };
      callback(obj);
      return;
    } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(mobile)) {
      obj = {
        success: true,
        msg: '请输入正确的手机号'
      };
      callback(obj);
      return;
    } else if (!/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/.test(password)) {
      obj = {
        success: true,
        msg: '密码由非空格字符组成的字符串，数字，大写字母，小写字母，特殊字符至少有两种'
      };
      callback(obj);
      return;
    }
    var findBc = function findBc(res) {
      if (res.length) {
        var _obj = {
          success: true,
          msg: '用户名已存在'
        };
        callback(_obj);
        return;
      }
      var findBc = function findBc(res) {
        if (res.length) {
          var _obj2 = {
            success: true,
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
      (0, _util.find)(_collections.userModel, { mobile: mobile }, findBc);
    };
    (0, _util.find)(_collections.userModel, { username: username }, findBc);
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