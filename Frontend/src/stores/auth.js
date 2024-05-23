import { defineStore } from "pinia";
import { ref } from "vue";

export const auth = defineStore("auth", () => {
  const id = ref("");
  const email = ref("");
  const profile = ref("");
  const token = ref("");
  const isAuthenticated = ref(false);

  function $logout() {
    id.value = "";
    email.value = "";
    profile.value = "";
    token.value = "";
    isAuthenticated.value = false;
  }

  return {
    id,
    email,
    profile,
    token,
    isAuthenticated,
    $logout,
  };
});
