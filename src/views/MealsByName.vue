<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-grey-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-2xl"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-2xl w-full h-48 object-cover"
        />
      </router-link>

      <div class="p-3">
        <h3 class="font-semibold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          unde quaerat ipsam omnis veritatis est, quos enim quis sequi, odio
          consequatur nesciunt iusto. Molestias, eos impedit illo repellendus
          tempore nemo.
        </p>
        <div class="flex justify-between">
          <!-- use v-if="meal.strYoutube !== ''" to check if the strYoutube property in the meal object is not an empty string.  -->
          <!-- If strYoutube is an empty string, the YoutubeButton component will not be rendered in the template. -->
          <YoutubeButton
            v-if="meal.strYoutube !== ''"
            :href="meal.strYoutube"
          >Youtube</YoutubeButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
