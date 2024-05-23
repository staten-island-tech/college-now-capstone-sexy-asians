<template>
  <div class="card">
    <h3>{{ id }}</h3>
    <h2>{{ pokemon.name }}</h2>
    <br />
    <router-link :to="pkmnPath">View Details</router-link>
    <button @click.prevent="gamble">Add to Gamble</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { auth } from "@/stores/auth";
import { temp } from "@/stores/temp";
import router from "@/router";

const authStore = auth();
const tempStore = temp();

const props = defineProps({
  pokemon: Object,
  id: Number,
});
const pkmnPath = computed(() => {
  return `/pkmn/${props.id}`;
});

async function gamble() {
  if (authStore.isAuthenticated !== true) {
    router.push({ path: "/login" });
  } else {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`);
    const data = await res.json();
    tempStore.collection.push({
      name: data.name,
      image: data.sprites.front_default,
      height: data.height,
      weight: data.weight,
      type: data.types,
      abilities: data.abilities,
      moves: data.moves,
    });
  }
}
</script>

<style scoped>
.card {
  width: 20rem;
  height: 200px;
  background-color: aliceblue;
  color: green;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
img {
  width: 100%;
  height: 80%;
  object-fit: cover;
}
button {
  margin-top: 10px;
  width: 65%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
</style>
