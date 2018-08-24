import * as db from './model'
import {socketUser} from './im.js'
export function register(req, res){
  let callback = (data) => {

    res.send(data)
  }
  db.register(req, callback)
}

export function login(req, res){
  function getClientIP(req) {
    return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        req.connection.remoteAddress || // 判断 connection 的远程 IP
        req.socket.remoteAddress || // 判断后端的 socket 的 IP
        req.connection.socket.remoteAddress;
};
console.log(getClientIP(req))

  let callback = (data) => {
    if(data.success){
      console.log(data.username)
      let {username, nickname} = data
      socketUser[username] = nickname
      // io.on('connection', function(socket){
      //   socket.on(data.username, function(data){
      //     console.log(data)
      //   })
      // })
    }
    data.ip = getClientIP(req)
    res.send(data)
  }
  db.login(req, callback)
}
export function verityInfo(req, res){
  let callback = (data) => {
    // if(code)req.session.verifyCode = code
    // console.log(req.session,123132)
    res.send(data)
  }
  db.verityInfo(req, callback)
}

export function addFriend(req, res){
  let callback = function (data){
    res.send(data)
  }
  let params = req.query
  db.addFriend(params,callback)
}
export function requestAdd(req, res){
  let callback = (data) => {
    res.send(data)
  }
  db.requestAdd(req, callback)
}

export function getRequestFriend(req, res){
  let callback = (data) => {
    res.send(data)
  }
  let username = req.query.username
  db.getRequestFriend(username, callback)
}

export function agreeFriendInfo(req, res){
  let callback = (data) => {
    res.send(data)
  }
  let requestname = req.query.requestname
  db.agreeFriendInfo(requestname, callback)
}

export function agreeRequest(req, res){
  let callback = (data) => {
    console.log(data)
  }
  db.agreeRequest(req, callback)
}

export function getFriend(req, res){
  let callback = (data) =>{
    res.send(data)
  }
  let username = req.query.username
  db.getFriend(username, callback)
}