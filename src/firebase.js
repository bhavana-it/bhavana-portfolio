import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCClsmj-5R0sVnWjmTWXqvnWFH0HOpbCpU",
  authDomain: "bhavana-portfolio.firebaseapp.com",
  projectId: "bhavana-portfolio",
  storageBucket: "bhavana-portfolio.appspot.com",
  messagingSenderId: "1033397907645",
  appId: "1:1033397907645:web:816492c37763941b5d47d4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
