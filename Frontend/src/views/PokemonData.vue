<template>
  <div class="container">
    <div>{{ monster.name }}</div>
    <h2>{{ monster.id }}</h2>
    <img :src="monster.sprites?.front_default" alt="monster" />
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
  margin: 60px auto;
}
</style>
