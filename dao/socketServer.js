import {socketUser} from '../dao/im.js'
export const socketServer = function (io) {
  io.on('connection', function (socket) {
    if(Object.keys(socketUser).length){
      for(let item of Object.keys(socketUser)){
        socket.emit(item, {
          status: 'online',
          msg: `${socketUser[item]}已上线`
        })
        socket.on(item,(friend, msg) => {
            socket.emit(friend, item ,msg)
        })
      }
    }
  });

     
}