import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcaSWrFETSkWfXs9ft_bYdop2R_rdrU-Q",
  authDomain: "gv-goals.firebaseapp.com",
  projectId: "gv-goals",
  storageBucket: "gv-goals.firebasestorage.app",
  messagingSenderId: "461322206011",
  appId: "1:461322206011:web:f66bb3ad4b25830187151e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)