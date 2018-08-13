"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyRegister = verifyRegister;
function verifyRegister(str, msg, callback) {
  if (!str) {
    var obj = {
      success: true,
      msg: msg
    };
    callback(obj);
    return;
  }
}