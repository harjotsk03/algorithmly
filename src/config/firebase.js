// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG_h3lvS0OfAi3LSqcQgUD9fodFl3LewQ",
  authDomain: "algorithmly-92b0d.firebaseapp.com",
  projectId: "algorithmly-92b0d",
  storageBucket: "algorithmly-92b0d.appspot.com",
  messagingSenderId: "142411428699",
  appId: "1:142411428699:web:1c677abe73a2b4426c607e",
  measurementId: "G-KJKWYSLH7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);