import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/infra/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    candidates: []
  },
  mutations: {
    setUserList (state, candidates) {
      state.candidates = candidates
    },
  },
  actions: {
    async getUserList({ commit }) {
      const candidates = await Api.getZatacaCandidate()
      commit('setUserList', candidates)
    }
  }
})
