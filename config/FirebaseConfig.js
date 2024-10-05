// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meet-point-90eb1.firebaseapp.com",
  projectId: "meet-point-90eb1",
  storageBucket: "meet-point-90eb1.appspot.com",
  messagingSenderId: "343437025449",
  appId: "1:343437025449:web:61ace299a06469f59c09b8",
  measurementId: "G-647DWD10Q1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
