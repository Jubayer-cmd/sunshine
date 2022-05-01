// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuJifCNqiJWCAwkhJDjcSQgJj8VsCx9vE",
  authDomain: "gadget-x-3a73d.firebaseapp.com",
  projectId: "gadget-x-3a73d",
  storageBucket: "gadget-x-3a73d.appspot.com",
  messagingSenderId: "842067532634",
  appId: "1:842067532634:web:d8d60652483cc566c03163",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
