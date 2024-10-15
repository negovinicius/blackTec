<template>
  <div>
    <!-- Texto centralizado e estilizado para 'No Reviews Yet' -->
    <p
      v-if="!store.reviewsContent || store.reviewsContent.length === 0"
      class="text-center text-muted fs-4"
    >
      Nenhuma avaliação ainda
    </p>

    <!-- Mostra a lista de avaliações se houver -->
    <div v-else class="reviewList mt-4">
      <!-- Total de Avaliações estilizado -->
      <div class="total-reviews-box text-center mb-4">
        <h4 class="text-uppercase">Total de Avaliações</h4>
        <div class="badge rounded-pill bg-primary fs-5 p-3">
          {{ store.reviewsContent.length }}
        </div>
      </div>

      <!-- Distribuição de Avaliações -->
      <div class="mt-5 mb-5">
        <h4 class="text-center">Distribuição de Avaliações</h4>
        <div class="d-flex justify-content-center mt-2">
          <div class="card p-3 shadow-lg" style="width: 350px">
            <ul class="list-group">
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                5 estrelas
                <span class="badge bg-success rounded-pill">{{
                  starCount[5]
                }}</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                4 estrelas
                <span class="badge bg-primary rounded-pill">{{
                  starCount[4]
                }}</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                3 estrelas
                <span class="badge bg-warning rounded-pill">{{
                  starCount[3]
                }}</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                2 estrelas
                <span class="badge bg-info rounded-pill">{{
                  starCount[2]
                }}</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                1 estrela
                <span class="badge bg-danger rounded-pill">{{
                  starCount[1]
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Lista de comentários -->
      <ReviewItem
        v-for="(item, i) in store.reviewsContent"
        :key="i"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import ReviewItem from "./ReviewItem.vue";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useReviewStore } from "@/stores/reviews";

const store = useReviewStore();
const { reviewsContent } = storeToRefs(store);

const starCount = computed(() => {
  const count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  reviewsContent.value.forEach((review) => {
    count[review.rating]++;
  });
  return count;
});
</script>
<style scoped>
.total-reviews-box {
  background-color: #f8f9fa; /* Fundo claro para destacar */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra leve para profundidade */
}

.total-reviews-box h4 {
  color: #333; /* Cor escura para título */
  font-weight: bold;
}

.total-reviews-box .badge {
  font-size: 2rem; /* Tamanho maior para o número */
  color: white;
  background-color: #007bff; /* Cor azul */
  margin-top: 10px;
}
</style>
