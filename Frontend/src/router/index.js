import { createRouter, createWebHistory } from "vue-router";
import IntroLoader from "../components/IntroLoader.vue";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "IntroLoader",
      component: IntroLoader,
    },
    {
      path: "/DashboardView",
      name: "Dashboard",
      component: Dashboard,
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
  ],
});

export default router;
