import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    heroes: [],
  },
  mutations: {
    loadHeroes(state, heroes) {
      state.heroes = heroes;
    },
  },
});

export default store;
