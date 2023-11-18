// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3_Z3nV-UlBTAiM8G2z0po0wX87g3-dyA",
  authDomain: "email-password-auth-833d9.firebaseapp.com",
  projectId: "email-password-auth-833d9",
  storageBucket: "email-password-auth-833d9.appspot.com",
  messagingSenderId: "514307616599",
  appId: "1:514307616599:web:1330989f97b5a0abd9d812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;