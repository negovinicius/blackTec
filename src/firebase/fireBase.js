/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD4a2iN__M5DeXExhVxlq_29X1ttdPgk0k",
  authDomain: "blacktec-772d0.firebaseapp.com",
  projectId: "blacktec-772d0",
  storageBucket: "blacktec-772d0.appspot.com",
  messagingSenderId: "382495095733",
  appId: "1:382495095733:web:136340aed3de5553f5f7fc",
  measurementId: "G-KD4LT8FTG8"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
