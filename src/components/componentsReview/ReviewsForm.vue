<template>
  <cardReview>
    <form @submit.prevent="handleSubmit" class="container mt-4">
      <div class="text-center mb-4">
        <h2 class="display-4">Como você avalia nosso serviço?</h2>
      </div>

      <!-- Rating Component-->
      <div class="mb-3 d-flex justify-content-center">
        <RatingSelect :rating="rating" @setRating="setRating"></RatingSelect>
      </div>

      <div class="mb-3">
        <label for="reviewText" class="form-label"></label>
        <textarea
          id="reviewText"
          class="form-control"
          rows="3"
          placeholder="Escreva sua avaliação"
          v-model="text"
        ></textarea>
      </div>

      <div class="d-grid">
        <button
          type="submit"
          class="btn btn-primary btn-lg"
          :disabled="btnDisabled"
        >
          Enviar
        </button>
      </div>

      <div class="message mt-3 text-center" v-if="message !== ''">
        <div class="alert alert-warning">
          {{ message }}
        </div>
      </div>
    </form>
  </cardReview>
</template>

<script setup>
import RatingSelect from "./RatingSelect.vue";
import { ref, watch } from "vue";
/* eslint-disable */
import cardReview from "../shared/cardReview.vue";
import { useReviewStore } from "@/stores/reviews";
import { storeToRefs } from "pinia";
import { db } from "../../firebase/fireBase.js";
import { collection, addDoc } from "firebase/firestore";

const store = useReviewStore();
const text = ref("");
const btnDisabled = ref(false);
const message = ref("");
const rating = ref(5);
const { editedContent } = storeToRefs(store);

const reviewsCollection = collection(db, "reviews");

const addReview = async (review) => {
  try {
    await addDoc(reviewsCollection, review);
    console.log("Comentário salvo com sucesso!");
  } catch (e) {
    console.error("Erro ao adicionar comentário: ", e);
  }
};

watch(editedContent, (newData) => {
  if (newData.editable) {
    text.value = newData.item.text;
    rating.value = newData.item.rating;
  }
});
watch(text, (newVal) => {
  if (newVal.trim().length <= 10) {
    btnDisabled.value = true;
    message.value = "Seu comentário deve ter pelo menos 10 caracteres";
  } else {
    btnDisabled.value = false;
    message.value = "";
  }
});

const handleSubmit = () => {
  const newReview = {
    text: text.value,
    rating: rating.value,
  };
  if (!store.editedContent.editable) {
    store.addReview(newReview);
  } else {
    store.updateReview({
      ...newReview,
      id: store.editedContent.item.id,
    });
  }
  text.value = "";
  rating.value = 5;
};
const setRating = (val) => {
  rating.value = val;
  console.log(val);
};
</script>
