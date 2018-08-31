let express = require('express')
let app = express()
let mongoose = require('mongoose')
let http = require('http').Server(app);
let path = require('path')
let cookieParser = require('cookie-parser')
let session = require('express-session')
let io = require('socket.io')(http)

const bodyParser = require('body-parser')

import router from '../dao/router'

import {socketServer} from '../dao/socketServer.js'
mongoose.connect('mongodb://localhost/socket')

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connetcion error;'));
db.once('open',function(){
  console.log('database connect')
})

app.use(cookieParser());
app.use(session({
  secret: '12345',
  cookie:{maxAge: 300000},
  resave:false,
  saveUninitialized:true
}))
app.use(express.static(path.resolve(__dirname, '../static/')))
app.use(express.static(path.resolve(__dirname, '../public/')))


app.use('/', router)
http.listen(3001,'0.0.0.0', function (){
  console.log('server connetion')
})
console.log(session)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))
// io.on('connection', function(socket){
//   console.log(socketUser, typeof socketUser)
//   if(Object.keys(socketUser).length){
//     for(let item of Object.keys(socketUser)){
//       socket.emit(item, {
//         status: 'online',
//         msg: `${socketUser[item]}已上线`
//       })
//       socket.on(item, function (data){
//         console.log(item,data,123)
//         socket.emit(item, {
//           status: 'online',
//           msg: `${socketUser[item]}已上线`
//         })
//       })
//     }
//   }
// })

socketServer(io)