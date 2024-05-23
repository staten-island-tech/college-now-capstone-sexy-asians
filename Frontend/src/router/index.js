import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import Dashboard from "../views/DashboardView.vue";
import Catalog from "../views/CatalogView.vue";
import PokemonData from "@/views/PokemonData.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
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
  ],
});

export default router;
