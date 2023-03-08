import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/infra/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    building: {},
  },
  mutations: {
    // TODO: borrar
    // setRandomJoke (state, joke) {
    //   state.randomJoke = joke
    // },
    // setCodeWarProfile (state, codeWarProfile) {
    //   state.codeWarProfile = codeWarProfile
    // },
    setBuilding (state, building) {
      state.building = building
    }
  },
  getters: {
    // ...
    roomsCapacity (state ) {
      return state.building.filter(b => b.floor)
    }
  },
  actions: {
    // TODO: borrar
    // async getUserList({ commit }) {
    //   const joke = await Api.getChuckRandomJoke()
    //   commit('setRandomJoke', joke)
    // },
    // async getCodeWarProfile({ commit}) {
    //   const codeWarProfile = await Api.getCodeWarProfile()
    //   commit('setCodeWarProfile', codeWarProfile)
    // },
    async getBuilding({ commit}) {
      const building = await Api.getBuilding()
      commit('setBuilding', building)
    },
  }
})
