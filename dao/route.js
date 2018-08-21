import * as db from './model'

export function register(req, res){
  let callback = (data) => {

    res.send(data)
  }
  db.register(req, callback)
}

export function login(req, res){
  let callback = (data) => {

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