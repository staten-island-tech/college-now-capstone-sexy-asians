import { defineStore } from "pinia";
import { ref } from "vue";

export const auth = defineStore("auth", () => {
  const id = ref("");
  const email = ref("");
  const token = ref("");
  const isAuthenticated = ref(false);

  return {
    id,
    email,
    token,
    isAuthenticated,
  };
});
