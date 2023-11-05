import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBQOkpbAYAuOzzdrpQ-gyWRU8NlsSZELsA",
  authDomain: "proyectofinal58000.firebaseapp.com",
  projectId: "proyectofinal58000",
  storageBucket: "proyectofinal58000.appspot.com",
  messagingSenderId: "691078616832",
  appId: "1:691078616832:web:0b08500d2a84c31a4505e5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)