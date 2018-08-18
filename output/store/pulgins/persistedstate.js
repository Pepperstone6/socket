"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var presistedConfig = exports.presistedConfig = {
  storage: window.localStorage,
  reducer: function reducer(state) {
    return {
      userInfo: state.userInfo
    };
  }
};