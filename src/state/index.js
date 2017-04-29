import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  authenticated: false,
  user: {
    id: null,
    username: null,
    email: null,
    weight: null
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
