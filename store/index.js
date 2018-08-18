import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getter'


import VuexPersistedstate from 'vuex-persistedstate'
import {presistedConfig} from './pulgins/persistedstate.js'
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins:[VuexPersistedstate(presistedConfig)]
})

export default store