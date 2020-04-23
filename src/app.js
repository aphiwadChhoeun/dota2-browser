import Vue from "vue";
import Vuex from "vuex";
import DataService from "services/DataService";

import HeroesBrowser from "components/HeroesBrowser";

import store from "store";

const app = new Vue({
  el: "#app",
  store: store,
  components: {
    HeroesBrowser,
  },
  created() {
    DataService.fetchHeroes().then((heroes) => {
      this.$store.commit("loadHeroes", heroes);
    });
  },
});
