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