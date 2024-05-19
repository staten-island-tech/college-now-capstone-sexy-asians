<template>
  <div>{{ monster.name }}</div>
  <h2>{{ monster.id }}</h2>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
let monster = ref("");
async function getPokemon() {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
  let data = await res.json();
  monster.value = data;
}
onMounted(() => {
  getPokemon();
});
</script>

<style scoped></style>
