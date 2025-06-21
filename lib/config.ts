// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy1pHx56QrWaSQY0Ref8ExyBhrW12BD2k",
  authDomain: "pruebatecnica-9ebfb.firebaseapp.com",
  projectId: "pruebatecnica-9ebfb",
  storageBucket: "pruebatecnica-9ebfb.firebasestorage.app",
  messagingSenderId: "1023491843270",
  appId: "1:1023491843270:web:614aa04b0eedbffcb663c7",
  measurementId: "G-MZTLJXM06L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db };