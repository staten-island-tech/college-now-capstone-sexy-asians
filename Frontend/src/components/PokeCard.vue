<template>
  <div class="card">
    <h3>{{ id }}</h3>
    <h2>{{ pokemon.name }}</h2>
    <br />
    <router-link :to="pkmnPath">View Details</router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  pokemon: Object,
  id: Number,
});
const pkmnPath = computed(() => {
  return `/pkmn/${props.id}`;
});
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
</style>
