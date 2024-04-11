<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Explore</RouterLink>
        <RouterLink to="/signup">Register</RouterLink>
        <RouterLink to="/signup">Dashboard</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="view" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 2 5rem;
  border-left: 2px solid var(--color-border);
}

nav a:first-of-type {
  border: ;
}

.view {
  display: flex;
  justify-content: center;
}
</style>
