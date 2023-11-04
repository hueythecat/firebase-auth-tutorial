// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyLjck8QZbI1Pi6GiHIBlmbcV0irwjGVE",
  authDomain: "auth-tutorial-a29e1.firebaseapp.com",
  projectId: "auth-tutorial-a29e1",
  storageBucket: "auth-tutorial-a29e1.appspot.com",
  messagingSenderId: "218251230944",
  appId: "1:218251230944:web:1e3ae2533eab2685a7da85",
  measurementId: "G-7FVSM4RDET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);