import Vue from "vue";
import Vuex from "vuex";
import { sortBy, replace, lowerCase } from "lodash";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    heroes: [],
    lore: [],
  },
  mutations: {
    loadHeroes(state, heroes) {
      state.heroes = heroes;
    },

    loadLore(state, lore) {
      state.lore = lore;
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

    lorebyHero: (state) => (name) => {
      let keys = Object.keys(state.lore);
      for (let i = 0; i < keys.length; i++) {
        if (
          lowerCase(replace(keys[i], "-", "")) ==
          lowerCase(replace(name, "-", ""))
        ) {
          return state.lore[keys[i]];
        }
      }
    },
  },
});

export default store;
