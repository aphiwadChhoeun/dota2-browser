import Vue from "vue";
import Vuex from "vuex";
import { sortBy } from "lodash";

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
  getters: {
    heroesByAttr: (state) => (attr) => {
      let arr = state.heroes.filter((hero) => hero.primary_attr === attr);
      return sortBy(arr, [
        function(o) {
          return o.localized_name;
        },
      ]);
    },

    heroByid: (state) => (id) => {
      return state.heroes.find((el) => el.id == id);
    },
  },
});

export default store;
