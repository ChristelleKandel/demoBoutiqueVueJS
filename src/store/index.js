import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1,
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state){
      state.count -= 1;
    }
  },
  actions: {
    incrementAsync({ commit }){
      setTimeout(() => {
        commit('increment');
      }, 1);
    },
  },
  modules: {
  }
})
