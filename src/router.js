import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Index from "./views/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "idnex",
      component: Index
    }
  ]
});
