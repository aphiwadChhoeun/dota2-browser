import Vue from "vue";
import VueRouter from "vue-router";
import HeroesBrowser from "components/HeroesBrowser";
import HeroDetails from "components/HeroDetails";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: 'home',
      component: HeroesBrowser,
    },
    {
      path: "/hero/:id",
      name: 'details',
      component: HeroDetails,
    },
  ],
});

export default router;
