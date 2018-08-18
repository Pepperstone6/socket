'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.setSession = setSession;
exports.getSession = getSession;
exports.removeSession = removeSession;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setSession(key, val) {
  if ((typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object') {
    val = (0, _stringify2.default)(val);
  }
  window.sessionStorage.setItem(key, val);
}

function getSession(key) {
  try {
    JSON.parse(window.sessionStorage.getItem(key));
  } catch (e) {
    return window.sessionStorage.getItem(key);
  }
  //  window.sessionStorage.getItem(key)
  return JSON.parse(window.sessionStorage.getItem(key));
}

function removeSession(arr) {
  if (arr instanceof Array) {
    arr.forEach(function (item) {
      window.sessionStorage.removeItem(item);
    });
  } else {
    window.sessionStorage.removeItem(arr);
  }
}