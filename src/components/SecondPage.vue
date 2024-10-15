<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid justify-content-center">
      <router-link class="navbar-brand brand-title" to="/"
        >blackTec</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              ><i class="bi bi-house"></i> Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart"
              ><i class="bi bi-cart-check"></i> Carrinho({{
                data.countcartItems
              }})</router-link
            >
            <router-link class="nav-link" to="/review">
              <i class="bi bi-chat"></i> Avalie-nos ({{ data.countcartItems }})
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { useCartStore } from "../stores/useCartStore";

const data = useCartStore();
</script>
<style scoped>
.brand-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #343a40;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  transition: color 0.3s ease-in-out;
}

.brand-title:hover {
  color: #007bff;
}
</style>
