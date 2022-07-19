
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-cosmetic-app.firebaseapp.com",
  projectId: "react-cosmetic-app",
  storageBucket: "react-cosmetic-app.appspot.com",
  messagingSenderId: "242651628146",
  appId: "1:242651628146:web:a8d171442428f39ba1f8eb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
