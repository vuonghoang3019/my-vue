import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => {
      import("../views/index.vue")
    },
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth"
    },
    component: () =>
      import("../views/register.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
