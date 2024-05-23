<template>
  <div class="container">
    <h1>{{ pkmn.name }}</h1>
    <img :src="pkmn.sprites?.front_default" alt="pkmn" />
    <div class="middle">
      <p>Height: {{ pkmn.height }}</p>
      <p>Weight: {{ pkmn.weight }}</p>
    </div>
    <div class="bottom">
      <div class="abilities">
        <h3>Abilities</h3>
        <ul>
          <li v-for="(item, index) in pkmn.abilities" :key="index">
            <p>{{ item.ability.name }}</p>
          </li>
        </ul>
      </div>
      <div class="moves">
        <h3>Moves</h3>
        <ul>
          <li v-for="(item, index) in pkmn.moves" :key="index">
            <p>{{ item.move.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
let pkmn = ref("");
async function getData() {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
  let data = await res.json();
  pkmn.value = data;
}
onMounted(() => {
  getData();
});
</script>

<style scoped>
.container {
  width: 25rem;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
  text-transform: uppercase;
}
img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.middle {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.bottom {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.abilities {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}
.moves {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}
</style>
