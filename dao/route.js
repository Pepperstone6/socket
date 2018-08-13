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