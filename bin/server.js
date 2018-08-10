let express = require('express')
let app = express()
let http = require('http').Server(app)
let path = require('path')
let io = require('socket.io')(http)

import router from '../dao/router'

app.use(express.static(path.resolve(__dirname, '../static/')))

app.use('/', router)
http.listen(3001, function (){
  console.log('server connetion')
})

io.on('connection', function(socket){
  console.log('socket')
})