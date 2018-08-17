// import { SET_USERINFO } from './mutation-type'
import * as types from './mutation-type.js'

export function verify(){
    return new Promise((resolve, reject) => {
      this.$http.post('/api/verify')
    })
}

export function setUserInfo ({commit},userInfo){
  commit(types.SET_USERINFO, userInfo)
  console.log(userInfo)
}