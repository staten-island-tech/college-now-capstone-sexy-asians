import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";
import Dashboard from "../views/DashboardView.vue";
import Catalog from "../views/CatalogView.vue";
import PokemonData from "@/views/PokemonData.vue";
import User from "@/views/UserView.vue";
import HuntingList from "@/views/ListView.vue";
import { auth } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/catalog",
      name: "catalog",
      component: Catalog,
    },
    {
      path: "/pkmn/:id",
      name: "pkmn",
      component: PokemonData,
    },
    {
      path: "/user",
      name: "user",
      component: User,
    },
    {
      path: "/user/list",
      name: "list",
      component: HuntingList,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === `dashboard`) return next();
  if (to.name === `catalog`) return next();
  if (to.name !== `login` && !auth().isAuthenticated)
    alert(`You are not logged in. Redirecting to login page.`),
      next({ name: `login` });
  else return next();
});

export default router;
