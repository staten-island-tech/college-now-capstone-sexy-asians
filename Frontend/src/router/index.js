import { createRouter, createWebHistory } from "vue-router";
import IntroLoader from "../components/IntroLoader.vue";
import HomeView from "../views/HomeView.vue";
import Dashboard from "@/views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "IntroLoader",
      component: IntroLoader,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    }
  ],
});

export default router;
