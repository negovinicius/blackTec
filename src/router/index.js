import FirstPage from "@/components/FirstPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import CartPage from "@/components/CartPage.vue";
import ReviewHome from "@/components/reviews/ReviewHome.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: FirstPage,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartPage,
    },
    {
      path: "/review",
      name: "review",
      component: ReviewHome,
    },
  ],
});

export default router;
