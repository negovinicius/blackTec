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

