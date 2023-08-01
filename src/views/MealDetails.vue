<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong>{{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong>{{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong>{{ meal.strTags }}</div>
    </div>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(ingredients, index) in new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(measures, index) in new Array(20)">
            <li
              v-if="
                meal[`strMeasure${index + 1}`] &&
                typeof meal[`strMeasure${index + 1}`] === 'string' &&
                meal[`strMeasure${index + 1}`].trim() !== ''
              "
            >
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
            <!-- meal[strMeasure${index + 1}]: Checks if the value exists (not undefined) in the meal object. -->
            <!-- typeof meal[strMeasure${index + 1}] === 'string': Verifies if the value is of type string. This is an additional safeguard in case the value is not a string. -->
            <!-- meal[strMeasure${index + 1}].trim() !== '': Ensures that after trimming, the string is not empty. -->
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <!-- use v-if="meal.strYoutube !== ''" to check if the strYoutube property in the meal object is not an empty string.  -->
        <!-- If strYoutube is an empty string, the YoutubeButton component will not be rendered in the template. -->
        <YoutubeButton v-if="meal.strYoutube !== ''" :href="meal.strYoutube"
          >Youtube</YoutubeButton
        >
        <a
          v-if="meal.strSource !== ''"
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border border-blue-600 hover:bg-blue-500 text-blue-500 hover:text-white transition-colors"
          >View Original Source</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    console.log(data);
    meal.value = data.meals[0] || {};
  });
});
</script>
