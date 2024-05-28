import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-68245.firebaseapp.com",
  projectId: "reactchat-68245",
  storageBucket: "reactchat-68245.appspot.com",
  messagingSenderId: "782467438583",
  appId: "1:782467438583:web:1a9a013adb9a896ec480f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()