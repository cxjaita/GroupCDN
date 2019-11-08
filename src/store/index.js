import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    assembly: [],
    page: null
  },
  mutations: {
    SelectPages(state, e) {
      state.page = e;
    },
    SelectComponents(state, e) {
      state.assembly.push(e);
    }
  },
  actions: {},
  modules: {}
});
