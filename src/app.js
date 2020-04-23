import Vue from "vue";

import router from "router";
import store from "store";

const app = new Vue({
  el: "#app",
  store: store,
  router: router(store),
});
