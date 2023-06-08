// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD14JQyNhIquu_K6b4qwT_crkUvpzmEmE",
  authDomain: "enord-community.firebaseapp.com",
  projectId: "enord-community",
  storageBucket: "enord-community.appspot.com",
  messagingSenderId: "678519152654",
  appId: "1:678519152654:web:ddb2b4170e55be29b15c5f",
  measurementId: "G-FMD85Z2D05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth()
export const provider = new GoogleAuthProvider()