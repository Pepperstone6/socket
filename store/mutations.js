// import { SET_USERINFO } from './mutation-type.js'
import * as types from './mutation-type.js'
const mutations = {
  [types.SET_USERINFO] (state, userInfo){
      state.userInfo = userInfo
  },
  [types.SET_SOCKET](state, socket){
    state.socket = socket
  }
}
export default mutations