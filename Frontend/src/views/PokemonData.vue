<template>
  <div class="container">
    <h1>{{ monster.name }}</h1>
    <img :src="monster.sprites?.front_default" alt="monster" />
    <p>Height: {{ monster.height }}</p>
    <p>Weight: {{ monster.weight }}</p>
    <p>Base Experience: {{ monster.base_experience }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
let monster = ref("");
async function getData() {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
  let data = await res.json();
  monster.value = data;
}
onMounted(() => {
  getData();
});
</script>

<style scoped>
.container {
  width: 25rem;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: white;
}
img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
