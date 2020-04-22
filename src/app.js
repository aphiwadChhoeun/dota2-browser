import Vue from "vue";
import Vuex from "vuex";
import HeroesBrowser from "components/HeroesBrowser";

import store from "store";

const app = new Vue({
  el: "#app",
  store: store,
  components: {
    HeroesBrowser,
  },
});
