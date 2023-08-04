<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-black">Meals that using <span class="text-orange-500">{{ ingredient.strIngredient }}</span></h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

const ingredient = computed(() => store.state.ingredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
