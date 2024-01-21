import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_11EhFpGQQ5VICUgdhRIEkvSkioILq8o",
  authDomain: "astro-qwik.firebaseapp.com",
  projectId: "astro-qwik",
  storageBucket: "astro-qwik.appspot.com",
  messagingSenderId: "550317726031",
  appId: "1:550317726031:web:eeebeadfe32220b4d68d3a",
  measurementId: "G-H4JYK0N0Y2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
