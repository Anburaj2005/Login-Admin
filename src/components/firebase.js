// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOBcn29U43y-mV4FLut-YSu-inSv05jLg",
  authDomain: "login-auth-12071.firebaseapp.com",
  projectId: "login-auth-12071",
  storageBucket: "login-auth-12071.firebasestorage.app",
  messagingSenderId: "522743035015",
  appId: "1:522743035015:web:2779ed9c610190ab117422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app