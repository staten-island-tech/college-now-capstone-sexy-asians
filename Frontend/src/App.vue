<script setup>
import { RouterLink, RouterView } from "vue-router";
/* update routing */
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/signup">Register/</RouterLink>
        <RouterLink to="/Dashboard">Dashboard</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="view" />
</template>

<style scoped>
header {
  line-height: 5.5;
  max-height: 300vh;
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
  background-color: 😃;
}

dash nav a {
  display: inline-block;
  padding: 2 5rem;
  border-left: 2px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.view {
  display: flex;
  justify-content: center;
}
</style>

