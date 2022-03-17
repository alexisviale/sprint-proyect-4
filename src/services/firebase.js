import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFvgCbde2pyPtyp48uaN0bSh97rR4lIPE",
  authDomain: "devs-united-f8fe5.firebaseapp.com",
  projectId: "devs-united-f8fe5",
  storageBucket: "devs-united-f8fe5.appspot.com",
  messagingSenderId: "683682274530",
  appId: "1:683682274530:web:958028b895d43af8f452bb",
  measurementId: "G-S8VKZMF2Z1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
