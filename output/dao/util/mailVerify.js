'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */
var SMSClient = require('@alicloud/sms-sdk');

var mailVerify = function mailVerify(phone, code, callback) {
  // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
  var accessKeyId = 'LTAI5q8lYFhFJeT6';
  var secretAccessKey = 'RLtXjU3HmZfqI9xcMONWQf3xMiplTs';

  //初始化sms_client
  var smsClient = new SMSClient({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
  });

  //发送短信
  smsClient.sendSMS({
    PhoneNumbers: phone,
    //18682337907
    // 必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为00+国际区号+号码，如“0085200000000”
    SignName: '陈伟平',
    // 必填:短信签名-可在短信控制台中找到
    TemplateCode: 'SMS_142147884',
    // 必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
    TemplateParam: '{"code":' + code + '}'
    // 可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时。
  }).then(function (res) {
    var Code = res.Code;

    if (Code === 'OK') {
      //处理返回参数
      var obj = {
        success: true,
        msg: '发送成功'
      };
      callback(phone, code, obj);
      return;
    } else {
      //处理返回参数
      var _obj = {
        success: false,
        msg: '发送失败'
      };
      callback(phone, code, _obj);
      return;
    }
  }, function (err) {
    console.log(err);
    if (err.code === 'isv.BUSINESS_LIMIT_CONTROL') {

      //处理返回参数
      var obj = {
        success: false,
        msg: '发送条数达到上限'
      };
      callback(phone, code, obj);
      return;
    } else {
      //处理返回参数
      var _obj2 = {
        success: false,
        msg: '发送失败'
      };
      callback(phone, code, _obj2);
      return;
    }
  });
};

exports.mailVerify = mailVerify;