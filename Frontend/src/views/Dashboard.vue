<template>
    <div>
        <NavBar />
        <main class="dashboard-container">
            <h1 class="dashboard-title">DashBoard</h1>
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
  padding: 2rem;
  text-align: center;
}

.dashboard-title {
  font-size: 2rem;
  color: #333;
}
</style>