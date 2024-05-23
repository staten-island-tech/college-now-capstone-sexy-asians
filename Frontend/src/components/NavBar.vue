<template>
  <header class="nav-bar">
    <div class="nav-container">
      <div class="left">
        <router-link to="/" class="brand">PokeGacha</router-link>
        <router-link to="/catalog" class="nav">Catalog</router-link>
      </div>

      <nav class="right">
        <router-link v-if="!login" to="/login" class="login">Login</router-link>
        <router-link v-if="login" to="/user">Profile</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "@/stores/auth";

const login = ref(false);
const authStore = auth();
if (authStore.isAuthenticated === true) {
  login.value = true;
}
</script>

<style scoped>
/* TOP and shadow, add in icons later*/
.nav-bar {
  background-color: #a7c7e7;
  color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.brand {
  color: #000;
  text-decoration: none;
  font-size: 1.5rem;
  padding-right: 1rem;
  border-right: 1px grey solid;
}
.nav,
.login {
  color: #000;
  text-decoration: none;
  padding: 0.5rem;
}
</style>
