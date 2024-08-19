// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXxaCqvRne7OzXUcW2MRH6N36M-F0C-oo",
  authDomain: "wwater-cf863.firebaseapp.com",
  projectId: "wwater-cf863",
  storageBucket: "wwater-cf863.appspot.com",
  messagingSenderId: "857733186106",
  appId: "1:857733186106:web:9caa738a62e6917a7eab03",
  measurementId: "G-SZQS3NK8SV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);