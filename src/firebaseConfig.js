// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // 🔥 auth import
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8O1zIqLImL8sRn7aBJmvt2xcGicCtzAc",
  authDomain: "owais-b54e6.firebaseapp.com",
  projectId: "owais-b54e6",
  storageBucket: "owais-b54e6.firebasestorage.app",
  messagingSenderId: "212977002955",
  appId: "1:212977002955:web:e3be96ec292be12a282e4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // ✅ export this

export { db, auth };