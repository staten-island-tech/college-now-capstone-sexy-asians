<template>
  <div class="user-profile">
    <div class="avatar-container">
      <img
        src="https://media.discordapp.net/attachments/917589799299321897/1245178203836911656/image.png?ex=6657ce12&is=66567c92&hm=d180c24e49f646b4f95bbd12e7c42c03692f85ad3b13fa9a8f089d40a5fc8d2b&=&format=webp&quality=lossless&width=528&height=464"
        alt="User Avatar"
        class="avatar"
      />

      <input type="file" name="fileName" />
      <input type="submit" />

      <br />
    </div>

    <h2>
      Welcome, {{ authStore.email.slice(0, authStore.email.indexOf("@")) }}!
    </h2>

    <div v-if="collectionStore.collection.length > 0" class="collection">
      <h3>Your Collection</h3>
      <ul class="pokemon-list">
        <li
          v-for="(pkmn, index) in collectionStore.collection"
          :key="pkmn.name"
          :id="index"
        >
          <div>
            <h3>{{ pkmn.name }}</h3>
            <img :src="pkmn.image" alt="pokemon image" width="60" />
          </div>
          <button @click.prevent="del">Kill</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>
        Your basement is empty. Find creatures to hunt in the
        <router-link to="/catalog">Catalog!</router-link>
      </p>
    </div>
    <button @click="logout" class="logout-button">Logout</button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import router from "@/router";
import gsap from "gsap";
import { auth } from "@/stores/auth";
import { collection } from "@/stores/collection";

const authStore = auth();
const collectionStore = collection();

const logout = () => {
  authStore.$logout();
  router.push(`/login`);
};

const del = async (e) => {
  try {
    await fetch(`http://localhost:4000/deleteCollection`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: collectionStore.collection[e.target.parentNode.index],
      }),
    });
    collectionStore.collection.splice(e.target.parentNode.index, 1);
  } catch (error) {
    console.log(error);
  }
};

/* const upload = async () => {
  try {
    await fetch(`http://localhost:4000/uploadProfile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authStore.token}`,
      },
      body: JSON.stringify({}),
    });
  } catch (err) {
    console.error(err);
  }
}; */

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
  margin-top: 5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

input {
  width: 100%;
  background-color: white;
  margin-bottom: 1rem;
}

h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.collection {
  margin-bottom: 2rem;
  padding: 3rem;
  border-radius: 25px;
  background-color: white;
  color: black;
}

.pokemon-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.pokemon-list li {
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  background-color: black;
  color: white;
}

.logout-button {
  margin-top: 5rem;
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
