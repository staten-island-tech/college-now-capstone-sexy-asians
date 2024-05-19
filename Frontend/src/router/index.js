import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import IntroLoader from "../components/IntroLoader.vue";
import Dashboard from "../views/DashboardView.vue";
import Pokemons from "../views/PokemonsView.vue";
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
      name: "IntroLoader",
      component: IntroLoader,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/pokemons",
      name: "pokemons",
      component: Pokemons,
    },
    {
      path: "/pkmn/:id",
      name: "pkmn",
      component: PokemonData,
    },
  ],
});

export default router;
