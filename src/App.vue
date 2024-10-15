<template>
  <div class="container">
    <SecondPage></SecondPage>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import SecondPage from "./components/SecondPage.vue";
import { RouterView } from "vue-router";
import { useReviewStore } from "./stores/reviews";
const store = useReviewStore();
onMounted(() => {
  store.fetchReviews();
});
</script>

<style scoped>
.container {
  background-image: url('../DALL·E\ 2024-10-15\ 15.39.50\ -\ A\ subtle\ and\ elegant\ background\ texture\ that\ works\ well\ with\ a\ modern\ e-commerce\ website.\ The\ design\ should\ feature\ a\ light\ grey\ or\ pastel\ color\ gradi.webp');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}
</style>