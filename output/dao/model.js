'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;
exports.verityInfo = verityInfo;
exports.addFriend = addFriend;
exports.requestAdd = requestAdd;
exports.getRequestFriend = getRequestFriend;
exports.agreeFriendInfo = agreeFriendInfo;
exports.agreeRequest = agreeRequest;
exports.getFriend = getFriend;

var _collections = require('./collections');

var _util = require('./util');

var _mongoose = require('mongoose');

var _mailVerify = require('./util/mailVerify.js');

var transliteration = require('transliteration');
var pinyinlite = require('pinyinlite');
var pinyin = require('pinyin');
var formidable = require('formidable');
function register(req, callback) {
  var form = new formidable.IncomingForm();
  var obj = {};
  var date = new Date().getTime();
  // console.log(transliteration.transliterate('@dsad`你好，世界'))
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
        };
        callback(obj);
        return;
      } else if (/[^\w\./|_]/ig.test(username)) {
        obj = {
          success: false,
          msg: '用户名只允许数字,_或者字母'
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
      var chat = pinyin(nickname, {
        style: pinyin.STYLE_NORMAL
      })[0];
      var letter = chat[0].substr(0, 1).toUpperCase();
      if (/[A-z]/.test(letter)) {
        fields.chat = letter;
      } else {
        fields.chat = '#';
      }
      console.log(fields.chat);
      // if(chat.length){
      //   fields.chat = chat[0].substr(0,1).toUpperCase()

      // }else{
      //   fields.chat = '#'
      // }
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

    console.log(fields);
    if (!username) {
      var obj = {
        success: false,
        msg: '用户名不能为空'
      };
      callback(obj);
      return;
    } else if (!password) {
      var _obj3 = {
        success: false,
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
        success: false,
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

              var changeBc = function changeBc() {
                callback(stutas);
              };
              (0, _util.save)(verifyInfo, changeBc);
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

function addFriend(params, callback) {
  var selectBc = function selectBc(res) {
    console.log(res);
    if (res.length) {
      var friendInfo = res[0];
      console.log(123);
      if (friendInfo.username != params.requestname) {
        var obj = {
          success: true,
          data: {
            username: friendInfo.username,
            nickname: friendInfo.nickname,
            avatar: friendInfo.avatar,
            sex: friendInfo.sex
          }
        };
        callback(obj);
      } else {
        console.log(123);
        var _obj4 = {
          success: false,
          msg: '不能将自己添加到通讯录'
        };
        callback(_obj4);
        return;
      }

      // callback(res)
    } else {
      var _obj5 = {
        success: false,
        msg: '该用户不存在'
      };
      callback(_obj5);
    }
  };
  console.log(params);
  (0, _util.find)(_collections.userModel, { username: params.friendname }, selectBc);
}

function requestAdd(req, callback) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    if (err) {
      console.error(err);
    }
    console.log(fields, 111);
    var requestname = fields.requestname,
        friendname = fields.friendname,
        requestremark = fields.requestremark,
        friendavatar = fields.friendavatar,
        requestnickname = fields.requestnickname;

    var config = {
      requestname: requestname,
      friendname: friendname
    };
    if (requestname === friendname) {
      var obj = {
        success: false,
        msg: '没办法添加自己到通讯录'
      };
      callback(obj);
      return;
    }
    // let findResult = () => {

    // }
    (0, _util.find)(_collections.requestVerifyModel, config).then(function (data) {
      if (data.length) {
        var _obj6 = {
          success: false,
          msg: '你已发送过请求，请等待对方验证'
        };
        callback(_obj6);
        return;
      }
      var params = {
        requestname: requestname,
        friendname: friendname,
        requestremark: requestremark,
        friendavatar: friendavatar,
        requestnickname: requestnickname
      };
      var addResult = function addResult(addData) {
        var obj = {
          success: true,
          msg: '请求已发送，等待对方验证'
        };
        callback(obj);
      };
      (0, _util.add)(_collections.requestVerifyModel, params, addResult);
    });
  });
}

function getRequestFriend(username, callback) {

  (0, _util.find)(_collections.requestVerifyModel, { friendname: username }).then(function (res) {
    var obj = {
      success: true,
      data: res
    };
    callback(obj);
  });
}
function agreeFriendInfo(requestname, callback) {
  (0, _util.findOne)(_collections.userModel, { username: requestname }).then(function (data) {
    console.log(data);
    if (!data) {
      var obj = {
        success: false,
        msg: '该用户不存在'
      };
    } else {
      var findResult = function findResult(findData) {
        console.log(findData);
        var obj = {
          success: true,
          data: {
            sex: data.sex,
            nickname: data.nickname,
            name: data.username,
            remark: findData.requestremark,
            avatar: data.avatar,
            isAgree: findData.isAgree
          }

        };
        callback(obj);
      };
      (0, _util.findOne)(_collections.requestVerifyModel, { requestname: data.username }, findResult);
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
  });
}

function agreeRequest(req, callback) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var findResult = function findResult(data) {
      data.isAgree = 1;
      (0, _util.save)(data);
    };
    (0, _util.findOne)(_collections.requestVerifyModel, fields, findResult);
  });
}

function getFriend(username, callback) {
  (0, _util.find)(_collections.requestVerifyModel, { isAgree: 1, $or: [{ friendname: username }, { requestname: username }] }).then(function (res) {
    var friendArr = [];
    res.forEach(function (item, index) {
      var obj = {};
      if (item.requestname != username) {
        obj.username = item.requestname;
        friendArr.push(obj);
      } else if (item.friendname != username) {
        obj.username = item.friendname;
        friendArr.push(obj);
      }
    });
    return (0, _util.find)(_collections.userModel, { $or: friendArr });
  }).then(function (res) {
    var arr = [];
    res.forEach(function (item, index) {
      item = {
        sex: item.sex,
        avatar: item.avatar,
        _id: item['_id'],
        chat: item.chat,
        mobile: item.mobile,
        nickname: item.nickname,
        username: item.username
      };
      arr.push(item);
    });
    var obj = {
      success: true,
      data: arr
    };
    callback(obj);
  });
}