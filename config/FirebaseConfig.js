// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meet-point-9fdfc.firebaseapp.com",
  projectId: "meet-point-9fdfc",
  storageBucket: "meet-point-9fdfc.appspot.com",
  messagingSenderId: "894598886353",
  appId: "1:894598886353:web:09b60875b6ad4c9ac4a6f0",
  measurementId: "G-4JFP6Y52F9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
