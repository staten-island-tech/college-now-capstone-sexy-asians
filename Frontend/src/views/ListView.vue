<template>
  <div class="collection-container">
    <div v-if="listStore.collection.length > 0" class="container">
      <h1>My AMAZING Pokémon Trafficking Van</h1>

      <button @click.prevent="hunt">Attempt to Hunt these creature</button>

      <div class="pokemon-grid">
        <div
          v-for="pkmn in listStore.collection"
          :key="pkmn.name"
          class="pokemon-card"
        >
          <img :src="pkmn.image" alt="pokemon image" class="pokemon-image" />
          <div class="pokemon-info">
            <h2>{{ pkmn.name }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="empty-message">
        There are no creatures in your basement. Go touch grass and hunt them.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { auth } from "@/stores/auth";
import { collection } from "@/stores/collection";
import { list } from "@/stores/list";

const authStore = auth();
const collectionStore = collection();
const listStore = list();

const hunt = async () => {
  const chance = ref([1, 2, 3, 4]);

  listStore.collection.forEach((c) => {
    if (Math.floor(Math.random() * chance.value.length) === 1) {
      collectionStore.collection.push({
        name: c.name,
        image: c.image,
        height: c.height,
        weight: c.weight,
        type: c.type,
        abilities: c.abilities,
        moves: c.moves,
      });
    }
  });
  try {
    await fetch(`http://localhost:4000/updateCollection`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: authStore.email,
        collection: collectionStore.collection,
      }),
    });
  } catch (error) {
    console.log(error);
  }

  listStore.collection = [];
};

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
  margin-top: 5rem;
  padding: 2rem;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pokemon-grid {
  margin-top: 0.75rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
}
.pokemon-card {
  background-color: #073947;
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

button {
  cursor: pointer;
  width: 18rem;
  margin: 2rem;
  padding: 15px 0;
  border-radius: 4px;
  background-color: #ffffff;
  color: #080710;
  font-size: 15px;
  font-weight: 600;
}
</style>
