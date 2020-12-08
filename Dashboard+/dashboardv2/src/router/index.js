import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import InfoCard from "../views/InfoCard.vue";

Vue.use(VueRouter);

// const Counter = { template: '<div>Counter</div>' }

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Economy",
    name: "Economy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Economy.vue"),
  },
  {
    path: "/infocard",
    name: "InfoCard",
    component: InfoCard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
