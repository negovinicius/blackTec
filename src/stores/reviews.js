/* eslint-disable */
import { defineStore } from "pinia";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/fireBase.js"; // Certifique-se de importar seu db do arquivo de configuração do Firebase

export const useReviewStore = defineStore("reviews", {
  state: () => ({
    reviews: [],
    editedData: {
      editable: false,
      item: null,
    },
  }),
  actions: {
    // Adicionar um novo review ao Firestore
    async addReview(review) {
      try {
        const reviewsCollection = collection(db, "reviews");
        const docRef = await addDoc(reviewsCollection, review);
        review.id = docRef.id; // Adiciona o ID gerado automaticamente ao review
        this.reviews = [review, ...this.reviews];
      } catch (error) {
        console.error("Erro ao adicionar review:", error);
      }
    },

    // Buscar todos os reviews do Firestore
    async fetchReviews() {
      try {
        const reviewsCollection = collection(db, "reviews");
        const reviewsSnapshot = await getDocs(reviewsCollection);
        const reviewsList = reviewsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.reviews = reviewsList;
      } catch (error) {
        console.error("Erro ao buscar reviews:", error);
      }
    },

    // Editar um review
    editReview(review) {
      let editedData = {
        editable: true,
        item: review,
      };
      this.editedData = editedData;
    },

    // Atualizar um review no Firestore
    async updateReview(review) {
      try {
        const reviewRef = doc(db, "reviews", review.id);
        await updateDoc(reviewRef, review);
        this.reviews = this.reviews.map((item) =>
          item.id === review.id ? { ...item, ...review } : item
        );
        this.fetchReviews(); // Atualizar lista de reviews
        this.editedData = { editable: false, item: null }; // Resetar estado de edição
      } catch (error) {
        console.error("Erro ao atualizar review:", error);
      }
    },

    // Deletar um review do Firestore
    async deleteReview(review) {
      try {
        const reviewRef = doc(db, "reviews", review.id);
        await deleteDoc(reviewRef);
        this.reviews = this.reviews.filter((rev) => rev.id !== review.id);
        this.fetchReviews(); // Atualizar lista de reviews
      } catch (error) {
        console.error("Erro ao deletar review:", error);
      }
    },
  },
  getters: {
    // Cálculo de média de avaliação
    averageRating(state) {
      let temp =
        state.reviews.reduce((acc, cur) => {
          return acc + cur.rating;
        }, 0) / state.reviews.length;

      temp = temp.toFixed(1).replace(/[.,]0$/, "");
      return temp;
    },

    // Contagem de reviews
    reviewsCount(state) {
      return state.reviews.length;
    },

    // Conteúdo dos reviews
    reviewsContent(state) {
      return state.reviews;
    },

    // Conteúdo editado
    editedContent(state) {
      return state.editedData;
    },
  },
});
