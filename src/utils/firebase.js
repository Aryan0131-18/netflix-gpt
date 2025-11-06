// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYZ4c8IKgj4FgGeW_yBFZS3-wRyvq62lE",
  authDomain: "netflixgpt-4a454.firebaseapp.com",
  projectId: "netflixgpt-4a454",
  storageBucket: "netflixgpt-4a454.firebasestorage.app",
  messagingSenderId: "868734098213",
  appId: "1:868734098213:web:e11e1a6c9a9f5484c018cc",
  measurementId: "G-R2LF0B4KW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();