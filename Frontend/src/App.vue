<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <RouterView class="view" />
</template>

<style scoped>
.view {
  display: flex;
  justify-content: center;
}
</style>
