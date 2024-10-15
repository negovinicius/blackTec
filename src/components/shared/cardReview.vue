<template>
  <div class="card" :class="{ reverse: reverse }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "cardReview",
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
