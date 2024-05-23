<template>
  <div class="dashboard-container">
    <h1 class="dashboard-title">Hello. This is PokeGacha.</h1>
    <p class="dashboard-description">
      Discover, collect, and gamble your favorite Pokémon...with a gacha story.
    </p>

    <div class="button-container">
      <router-link to="/catalog" class="nav-button">The Catalog</router-link>
      <router-link to="/user/collection" class="nav-button"
        >My Pokémons</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  components: {},
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 2rem;
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(45deg, #a7c7e7, #e0f7fa);
  animation: fadeIn 2s ease-in;
}

.dashboard-title {
  font-size: 6rem;
  margin-bottom: 1rem;
  color: #9b7a7a;
}

.dashboard-description {
  font-size: 1.5rem;
  color: #4f3636;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.99;
  }
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
