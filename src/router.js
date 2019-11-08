import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index.vue";
import canvasPage from "./views/canvasPage.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "idnex",
      component: Index,
      children: [
        {
          path: "/",
          name: "canvasPage",
          component: canvasPage
        }
      ]
    }
  ]
});
