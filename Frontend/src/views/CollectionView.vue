<template>
  <div class="collection-container">
    <h1>My AMAZING Pokémon BentoBox</h1>

    <div v-if="tempStore.collection.length > 0" class="pokemon-grid">
      <div
        v-for="pkmn in tempStore.collection"
        :key="pkmn.name"
        class="pokemon-card"
      >
        <img :src="pkmn.image" alt="pokemon image" class="pokemon-image" />
        <div class="pokemon-info">
          <h2>{{ pkmn.name }}</h2>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="empty-message">
        You got no pokemon in your box. Please go to the catalog to scout some
        pokemons.
      </p>
    </div>
  </div>
</template>

<script setup>
import { temp } from "@/stores/temp";
import { onMounted } from "vue";
import gsap from "gsap";

const tempStore = temp();

onMounted(() => {
  gsap.fromTo(
    ".pokemon-card",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
  );
});
</script>

<style scoped>
.collection-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.pokemon-card {
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.pokemon-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.pokemon-info {
  padding: 1rem;
}

h1,
h2 {
  text-align: center;
}

.empty-message {
  font-size: 1.2rem;
  text-align: center;
}
</style>
