import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV_e6wO-w4kwXkq7_xxpjMTwiDzC0RZmo",
  authDomain: "rentix-99c7f.firebaseapp.com",
  projectId: "rentix-99c7f",
  storageBucket: "rentix-99c7f.appspot.com",
  messagingSenderId: "225315355751",
  appId: "1:225315355751:web:53912a8a4f382ce708a8c2",
  measurementId: "G-TYVEZQ5H95",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
