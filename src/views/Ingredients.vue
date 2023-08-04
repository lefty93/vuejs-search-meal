<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-grey-200 w-full mb-4"
      placeholder="Search for Ingredients"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        href="#"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3"
        @click.prevent="openIngredient(ingredient)"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";
import { useRouter } from "vue-router";

const keyword = ref("");
const router = useRouter();
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit("setIngredient", ingredient);
  console.log(ingredient.strIngredient)
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
