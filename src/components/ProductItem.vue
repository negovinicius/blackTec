<template>
  <div class="col-md-4 mb-4">
    <div class="card h-100 shadow-sm">
      <img
        :src="product.image"
        class="card-img-top img-fluid"
        alt="Imagem do Produto"
      />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text text-muted">{{ product.description }}</p>
        <div class="mt-auto">
          <p class="text-center">
            <span class="badge bg-danger fs-5">R$ {{ product.price }}</span>
          </p>

          <button
            @click="data.addToCart(product)"
            class="btn btn-outline-primary w-100"
          >
            <i class="bi bi-cart-check"></i> Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/useCartStore";
const data = useCartStore();

/* eslint-disable */
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card-title {
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-outline-primary {
  transition: background-color 0.3s ease-in-out;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: white;
}
</style>
