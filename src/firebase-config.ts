// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCceqqBskJSdwH-DfcbdiuH1TmpHnpeQHc",
  authDomain: "docs-clone-3c92e.firebaseapp.com",
  projectId: "docs-clone-3c92e",
  storageBucket: "docs-clone-3c92e.firebasestorage.app",
  messagingSenderId: "144101989227",
  appId: "1:144101989227:web:7163f6c1a66d2c93384a2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
