import { defineStore } from "pinia";
import { ref } from "vue";

export const collection = defineStore("collection", () => {
  const collection = ref([]);

  const addPokemon = (pokemon) => {
    collection.value.push(pokemon);
  };

  const removePokemon = (index) => {
    collection.value.splice(index, 1);
  };

  return {
    collection,
    addPokemon,
    removePokemon,
  };
});
