import { defineStore } from "pinia";
import { ref } from "vue";

export const temp = defineStore("temp", () => {
  const collection = ref([]);

  return {
    collection,
  };
});
