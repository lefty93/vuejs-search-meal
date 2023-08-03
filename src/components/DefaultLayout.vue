<template>
  <div class="bg-red-200 h-[100vh]">
    <Navbar />
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
