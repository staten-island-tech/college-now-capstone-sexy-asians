<template>
  <div class="container">
    <PokemonCard
      v-for="(monster, index) in pokemon"
      :key="monster.name"
      :id="index + 1"
      :pokemon="monster"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PokemonCard from "../components/PokeCard.vue";
const pokemon = ref("");
async function getPokemon() {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
  let data = await res.json();
  pokemon.value = data.results;
}
onMounted(() => {
  getPokemon();
});
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
