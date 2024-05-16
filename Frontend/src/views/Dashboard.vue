<template>
    <div>
      <NavBar />
      <main class="dashboard-container">
        <h1 class="dashboard-title">TurboLearn</h1>
        <p class="dashboard-description">The only platform you need to turbo your learning.</p>
      </main>
    </div>
  </template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Dashboard',
  components: {
    NavBar
  }
}
</script>

# css, WIP, add in google icons later

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background-color: #333;
  color: #fff;
  text-align: center;
}

.dashboard-title {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.dashboard-description {
  font-size: 1.5rem;
  color: #ccc;
}
</style>