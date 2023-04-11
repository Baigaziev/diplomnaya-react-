// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkbd6MDlMbyZ1bmTiUv-9w4cdqgk52sUg",
  authDomain: "diplom-36152.firebaseapp.com",
  projectId: "diplom-36152",
  storageBucket: "diplom-36152.appspot.com",
  messagingSenderId: "967164621796",
  appId: "1:967164621796:web:008346de000eda15c6cdf1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//! получение списка категорий (колекции д)
export const categories = collection(db, "categories");
