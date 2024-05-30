<template>
  <div class="container">
    <PokeCard
      v-for="(monster, index) in pokemon"
      :key="monster.name"
      :id="index + 1"
      :pokemon="monster"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PokeCard from "../components/PokeCard.vue";
const pokemon = ref([]);
async function loadCatalog() {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
  let data = await res.json();
  pokemon.value = data.results;
}
onMounted(() => {
  loadCatalog();
});
</script>

<style scoped>
.container {
  width: 80%;
  margin: 120px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
