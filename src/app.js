import Vue from "vue";
import DataService from "services/DataService";

import router from "router";
import store from "store";

const app = new Vue({
  el: "#app",
  store: store,
  router: router,
  created() {
    DataService.fetchHeroes().then((heroes) => {
      this.$store.commit("loadHeroes", heroes);
    });
  },
});
