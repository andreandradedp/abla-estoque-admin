// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTd29E--PE2-DGYYMUsXMhejzGdN0owqs",
  authDomain: "abla-estoque-admin.firebaseapp.com",
  projectId: "abla-estoque-admin",
  storageBucket: "abla-estoque-admin.firebasestorage.app",
  messagingSenderId: "471991248046",
  appId: "1:471991248046:web:d43f222c0b92a0a85af93f",
  measurementId: "G-6PQQTEFBF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);