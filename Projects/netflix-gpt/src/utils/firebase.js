// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARtzCaB3FaqGSdN7vxG_7SWSOitT-25NY",
  authDomain: "abhishek-netflixgpt.firebaseapp.com",
  projectId: "abhishek-netflixgpt",
  storageBucket: "abhishek-netflixgpt.appspot.com",
  messagingSenderId: "638635809126",
  appId: "1:638635809126:web:900a8f421603f9493290a7",
  measurementId: "G-CTW63CQMP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();