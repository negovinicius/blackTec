<template>
  <div class="row my-4">
    <div class="col-md-12">
      <div class="card shadow-sm">
        <div class="card-body">
          <table class="table table-hover">
            <thead class="table-dark">
              <tr>
                <th>#</th>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Subtotal</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in data.cartItems"
                :key="item.id"
                class="align-middle"
              >
                <td>{{ item.id }}</td>
                <td>
                  <img
                    :src="item.image"
                    width="60"
                    height="60"
                    class="img-fluid rounded shadow-sm"
                    alt=""
                  />
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <i
                    class="bi bi-caret-up text-success fs-5"
                    @click="data.incrementQ(item)"
                  >
                  </i>
                  <span class="mx-2">{{ item.quantity }}</span>
                  <i
                    class="bi bi-caret-down text-danger fs-5"
                    @click="data.decrementQ(item)"
                  >
                  </i>
                </td>
                <td>R$ {{ item.price }}</td>
                <td>R$ {{ item.price * item.quantity }}</td>
                <td>
                  <i
                    @click="data.removeFromCart(item)"
                    class="bi bi-cart-x text-danger fw-bold fs-4"
                  >
                  </i>
                </td>
              </tr>
              <tr class="bg-light">
                <th class="text-center" colspan="3">Total</th>
                <td class="text-center" colspan="3">
                  <span class="badge bg-danger rounded-pill fs-5">
                    R$
                    {{
                      data.cartItems.reduce(
                        (acc, item) => (acc += item.price * item.quantity),
                        0
                      )
                    }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/useCartStore";

const data = useCartStore();
</script>

<style>
i {
  cursor: pointer;
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1;
}

.table thead th {
  vertical-align: middle;
  text-align: center;
}

.table tbody td {
  vertical-align: middle;
  text-align: center;
}
</style>
