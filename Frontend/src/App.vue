<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <main>
    <NavBar class="nav" />
    <RouterView class="view" />
  </main>
</template>

<style scoped>
.nav {
  position: absolute;
  margin-bottom: 0;
}
.view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
