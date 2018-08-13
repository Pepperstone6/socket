'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _route = require('./route');

var route = _interopRequireWildcard(_route);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {});
router.post('/login', route.login);
router.post('/register', route.register);
exports.default = router;