<script setup>
function submit() {
  console.log("poop");
}
</script>

<template>
  <main>
    <form class="form" @click.prevent="submit">
      <div class="input"><label>Username</label> <input type="text" /></div>

      <div class="input"><label>Email</label> <input type="email" /></div>

      <div class="input"><label>Password</label> <input type="password" /></div>

      <div class="input">
        <label for="password">Comfirn your password </label> <input type="password" />
      </div>

      <button>Apply</button>
    </form>
  </main>
</template>

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
