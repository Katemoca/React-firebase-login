// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA18OT-yQ4F5oY8YuzdJEgXTWic5jV7pzQ",
  authDomain: "fir-login-444d1.firebaseapp.com",
  projectId: "fir-login-444d1",
  storageBucket: "fir-login-444d1.appspot.com",
  messagingSenderId: "695064406134",
  appId: "1:695064406134:web:f6d408f34c4fbf3e3f9757",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
