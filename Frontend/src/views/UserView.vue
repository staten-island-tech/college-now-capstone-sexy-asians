<template>
  <div class="user-profile">
    <div class="avatar-container">
      <img
        src="https://media.discordapp.net/attachments/917589799299321897/1243267103499358228/image.png?ex=6650da38&is=664f88b8&hm=075f9567100f92039bac3766fffb1c014c04e4df26886ae72d3c8834c66d10b6&=&format=webp&quality=lossless&width=139&height=166"
        alt="User Avatar"
        class="avatar"
      />
    </div>

    <h2>Welcome, {{ authStore.email }}!</h2>

    <div v-if="tempStore.collection.length > 0" class="collection">
      <h3>Your Collection</h3>
      <ul class="pokemon-list">
        <li v-for="pkmn in listStore.collection" :key="pkmn.name">
          {{ pkmn.name }}
          <img :src="pkmn.image" alt="pokemon image" width="50" />
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Your collection is empty. Start gambling in the Catalog!</p>
    </div>
    <button @click="logout" class="logout-button">Logout</button>
  </div>
</template>

<script setup>
import { auth } from "@/stores/auth";
import { list } from "@/stores/list";
import router from "@/router";
import { onMounted } from "vue";
import gsap from "gsap";

const authStore = auth();
const listStore = list();

const logout = () => {
  authStore.$logout();
  router.push(`/login`);
};

onMounted(() => {
  gsap.fromTo(
    ".avatar",
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" }
  );
});
</script>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}

.avatar-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.collection {
  margin-bottom: 2rem;
}

.pokemon-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.pokemon-list li {
  display: flex;
  align-items: center;
}

.logout-button {
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #c0392b;
}
</style>
