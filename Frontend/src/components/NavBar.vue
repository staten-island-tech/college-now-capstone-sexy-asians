<template>
  <header class="nav-bar">
    <div class="nav-container">
      <router-link to="/" class="nav-brand">Cool!</router-link>
      <nav class="nav-menu">
        <router-link to="/login" class="nav-item">Login</router-link>
      </nav>
    </div>
  </header>
</template>

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
  padding: 0.5rem 1rem;
}

.nav-menu {
  display: flex;
  gap: 10px;
}

.nav-brand,
.nav-item {
  color: #000;
  text-decoration: none;
  padding: 0.5rem;
  display: block;
}

.nav-item:hover {
  text-decoration: underline;
}
</style>
