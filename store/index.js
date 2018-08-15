import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'
import motations from './mutations'
import * as actions from './actions'
import * as getters from './getter'
const store = new Vuex.Store({
  state,
  motations,
  actions,
  getters
})

export default store