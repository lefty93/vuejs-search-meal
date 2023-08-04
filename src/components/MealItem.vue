<template>
  <div class="bg-white shadow rounded-2xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-2xl w-full h-48 object-cover"
      />
    </router-link>

    <div class="p-3">
      <h3 class="font-semibold mb-4">{{ meal.strMeal }}</h3>
      <div class="flex justify-between">
        <!-- use v-if="meal.strYoutube !== ''" to check if the strYoutube property in the meal object is not an empty string.  -->
        <!-- If strYoutube is an empty string, the YoutubeButton component will not be rendered in the template. -->
        <YoutubeButton v-if="meal.strYoutube !== ''" :href="meal.strYoutube"
          >Go to Youtube</YoutubeButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
