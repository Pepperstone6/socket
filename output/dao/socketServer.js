'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socketServer = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _im = require('../dao/im.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socketServer = exports.socketServer = function socketServer(io) {
  io.on('connection', function (socket) {
    if ((0, _keys2.default)(_im.socketUser).length) {
      var _loop = function _loop(item) {
        socket.emit(item, {
          status: 'online',
          msg: _im.socketUser[item] + '\u5DF2\u4E0A\u7EBF'
        });
        socket.on(item, function (friend, msg) {
          socket.emit(friend, item, msg);
        });
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(_im.socketUser)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          _loop(item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  });
};