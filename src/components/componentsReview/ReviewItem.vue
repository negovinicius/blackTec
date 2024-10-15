<template>
  <CardReview class="border rounded p-3 mb-3 shadow-sm">
    <div class="d-flex justify-content-end">
      <button class="btn p-0 m-0 me-2 border-primary border-2">
        <i class="bi bi-pencil" @click="store.editReview(item)"></i>
      </button>
      <button class="btn p-0 m-0 border-danger border-2">
        <i class="bi bi-x" @click="store.deleteReview(item)"></i>
      </button>
    </div>

    <div class="star-display my-2">
      <i
        v-for="n in item.rating"
        :key="n"
        class="bi bi-star-fill text-warning"
      ></i>
    </div>

    <div class="text-display border p-2 rounded">
      {{ item.text }}
    </div>
  </CardReview>
</template>

<script setup>
import { useReviewStore } from "@/stores/reviews";

const store = useReviewStore();

import CardReview from "../shared/cardReview.vue";
defineProps({
  item: {
    type: Object,
  },
});
</script>

<style scoped>
.star-display {
  display: flex;
  justify-content: center;
}

.text-display {
  border: 1px solid #ddd; /* Borda leve no comentário */
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9; /* Cor de fundo para realçar o comentário */
}

.shadow-sm {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
