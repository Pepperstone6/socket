import {socketUser} from '../dao/im.js'
let obj ={}
export const socketServer = function (io) {
  const vm = io.sockets.sockets
  io.on('connection', function (socket) {
    if(Object.keys(socketUser).length){
      console.log(socket)
      for(let item of Object.keys(socketUser)){
        if(typeof obj[item] === 'undefined'){
          obj[item] = socket.id;
        }
        console.log(obj)
        socket.emit(item, {
          status: 'online',
          msg: `${socketUser[item]}已上线`
        })
        socket.on(item,(config) => {
         let friendname = config.friendname
         let socketId = obj[friendname]
         console.log(obj,socketId,132)
        //  console.log(vm[socketId],'obj')
          vm[socketId].emit(friendname, item ,{msg: config.msg})
        })
      }
    }
  });

     
}