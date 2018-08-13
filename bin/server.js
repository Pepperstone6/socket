let express = require('express')
let app = express()
let mongoose = require('mongoose')
let http = require('http').Server(app);
let path = require('path')
let io = require('socket.io')(http)
const bodyParser = require('body-parser')

import router from '../dao/router'
mongoose.connect('mongodb://localhost/socket')
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connetcion error;'));
db.once('open',function(){
  console.log('database connect')
})

app.use(express.static(path.resolve(__dirname, '../static/')))

app.use('/', router)
http.listen(3001, function (){
  console.log('server connetion')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))
io.on('connection', function(socket){
  console.log('socket')
})
