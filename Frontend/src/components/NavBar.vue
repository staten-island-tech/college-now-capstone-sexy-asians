<template>
  <header class="nav-bar">
    <div class="nav-container">
      <div class="left">
        <router-link to="/" class="brand">PokeGacha</router-link>
        <router-link to="/catalog" class="nav">Catalog</router-link>
        <router-link to="/user/collection" class="nav">Collection</router-link>
      </div>
      <nav class="right">
        <router-link v-if="!authStore.isAuthenticated" to="/login" class="login"
          >Login</router-link
        >
        <router-link v-else to="/user" class="login">{{
          authStore.email
        }}</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { auth } from "@/stores/auth";
import { ref, watch } from "vue";

const authStore = auth();

const isLoggedIn = ref(authStore.isAuthenticated);

watch(
  () => authStore.isAuthenticated,
  (newValue) => {
    isLoggedIn.value = newValue;
  }
);
</script>

<style scoped>
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
