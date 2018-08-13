'use strict';

var _router = require('../dao/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/socket');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connetcion error;'));
db.once('open', function () {
  console.log('database connect');
});

app.use(express.static(path.resolve(__dirname, '../static/')));

app.use('/', _router2.default);
http.listen(3001, function () {
  console.log('server connetion');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
io.on('connection', function (socket) {
  console.log('socket');
});