<template>
  <header class="nav-bar">
    <div class="nav-container">
      <router-link to="/" class="nav-brand">Home</router-link>
      <nav class="nav-menu">
        <router-link to="/login" class="nav-item">Login</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-bar {
  background-color: #000;
  color: #fff;
  width: 100%;
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
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  display: block; 
}

.nav-item:hover {
  text-decoration: underline;
}


@media (max-width: 768px) {
  .nav-container {
    flex-direction: column; 
    padding: 0.5rem;
  }

  .nav-menu {
    flex-direction: column;   
    align-items: center;
    width: 100%; 
  }

  .nav-item {
    text-align: center; 
    width: 100%; 
    padding: 0.8rem; 
  }

  .nav-brand {
    margin-bottom: 0.5rem;
  }
}


@media (min-width: 769px) {
  .nav-menu {
    justify-content: flex-end; 
  }

  .nav-item:not(:last-child) {
    margin-right: 1rem; 
  }
}
</style>
