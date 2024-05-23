import { defineStore } from "pinia";
import { ref } from "vue";

export const collection = defineStore("collection", () => {
  const collection = ref([]);

  return { collection };
});
