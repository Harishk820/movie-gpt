// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTFG52FtpySslE_DBYmmC50nZhVgqsqS0",
  authDomain: "movie-gpt-6ad1b.firebaseapp.com",
  projectId: "movie-gpt-6ad1b",
  storageBucket: "movie-gpt-6ad1b.appspot.com",
  messagingSenderId: "962487451620",
  appId: "1:962487451620:web:91d29b0a5d54accc8411f1",
  measurementId: "G-Q18YCMZEXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();  