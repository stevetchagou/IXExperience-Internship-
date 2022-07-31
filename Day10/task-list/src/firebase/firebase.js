// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQJCgYyuFV3_CgawIR7wHECgZd0cgSyM8",
  authDomain: "library-green-section.firebaseapp.com",
  projectId: "library-green-section",
  storageBucket: "library-green-section.appspot.com",
  messagingSenderId: "975821927430",
  appId: "1:975821927430:web:3a22ac787cc3704980ff87",
  measurementId: "G-EQ8VS840C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {
    firestore,
    auth
}