<template>
  <div>
    <form class="form" @click.prevent="login">
      <div class="input"><label>Email</label> <input type="email" /></div>

      <div class="input"><label>Password</label> <input type="password" /></div>

      <button>submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const userData = ref("");
async function login() {
  let res = await fetch("http://localhost:3000");
  let data = await res.json();
  userData.value = data;
  console.log(data);
}

onMounted(() => {
  login();
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding: 2rem;
}

.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
</style>
