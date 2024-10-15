<template>
  <ul class="rating d-flex list-unstyled">
    <li v-for="n in 5" :key="`rating-${n}`" class="mx-2 text-center">
      <input
        type="radio"
        class="visually-hidden"
        name="rating"
        :id="`num${n}`"
        :value="n"
        :checked="selected === n"
        v-model="selected"
      />
      <label
        :for="`num${n}`"
        class="fs-3 star"
        :class="{
          'text-warning': selected >= n,
          'text-secondary': selected < n,
        }"
        style="cursor: pointer"
      >
        ★
      </label>
      <p class="mb-0">{{ n }}</p>
    </li>
  </ul>
</template>

<style scoped>
.star {
  transition: color 0.3s ease;
}
</style>

<script>
export default {
  name: "RatingSelect",
  data() {
    return {
      selected: this.rating,
    };
  },
  props: {
    rating: {
      type: Number,
    },
  },
  watch: {
    selected(newVal) {
      this.$emit("setRating", newVal);
    },
    rating(newVal) {
      this.selected = newVal;
    },
  },
};
</script>
