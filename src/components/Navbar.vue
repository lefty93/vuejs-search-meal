<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 hover:bg-green-300 transition-colors"
    >
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:text-orange-500 font-bold"
      >
        Search Meals
      </router-link>

      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:text-orange-500 font-bold"
      >
        Meals by Letter
      </router-link>

      <router-link
        :to="{ name: 'Ingredients' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:text-orange-500 font-bold"
      >
        Meals by Ingredient
      </router-link>
    </div>
  </header>
</template>

<script setup>

</script>
