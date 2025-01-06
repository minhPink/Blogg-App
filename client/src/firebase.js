// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-21c6d.firebaseapp.com",
  projectId: "mern-blog-21c6d",
  storageBucket: "mern-blog-21c6d.firebasestorage.app",
  messagingSenderId: "617765873234",
  appId: "1:617765873234:web:7dd2c7d596d96bfaebe18b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
