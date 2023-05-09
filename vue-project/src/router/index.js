import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/authors",
      name: "authors",
      // route level code-splitting
      // this generates a separate chunk (Author.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AuthorView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/registration",
      name: "registration",
      component: () => import("../views/RegistrationView.vue"),
    },
  ],
});

export default router;