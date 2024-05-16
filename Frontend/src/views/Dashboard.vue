<template>
    <div>
      <NavBar />
      <main class="dashboard-container">
        <h1 class="dashboard-title">TurboLearn</h1>
        <p class="dashboard-description">The only platform you need to turbo boost your learning.</p>
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
  overflow: hidden;
}

.dashboard-title {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.dashboard-description {
  font-size: 1.5rem;
  color: #ccc;
}

.dashboard-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #6FB1FC, #4364F7, #6FB1FC);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  z-index: -1;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>