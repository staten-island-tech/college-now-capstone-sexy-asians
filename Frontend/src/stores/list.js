import { defineStore } from "pinia";
import { ref } from "vue";

export const list = defineStore("list", () => {
  const collection = ref([]);

  return {
    collection,
  };
});
