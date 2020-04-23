import Vue from "vue";
import VueRouter from "vue-router";
import DataService from "services/DataService";
import HeroesBrowser from "components/HeroesBrowser";
import HeroDetails from "components/HeroDetails";

Vue.use(VueRouter);

const beforeEnterMiddleware = (store) => (to, from, next) => {
  if (from.name == null) {
    DataService.fetchHeroes().then((heroes) => {
      store.commit("loadHeroes", heroes);
      next();
    });
  } else {
    next();
  }
};

const router = (store) => {
  return new VueRouter({
    routes: [
      {
        path: "/",
        name: "home",
        component: HeroesBrowser,
        beforeEnter: beforeEnterMiddleware(store),
      },
      {
        path: "/hero/:id",
        name: "details",
        component: HeroDetails,
        beforeEnter: beforeEnterMiddleware(store),
      },
    ],
  });
};

export default router;
