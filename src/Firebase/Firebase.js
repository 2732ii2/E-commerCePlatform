// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOPobbdnnJ2FH-UMnUjwNiyhzvCsALW3k",
  authDomain: "e-commercedata-78f25.firebaseapp.com",
  projectId: "e-commercedata-78f25",
  storageBucket: "e-commercedata-78f25.appspot.com",
  messagingSenderId: "509006487236",
  appId: "1:509006487236:web:f5b547cfa674154bb7f391",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);