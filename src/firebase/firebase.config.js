// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjB9A2mHmfjCF38cVPJeV3HbvKSRxu6Oc",
  authDomain: "nine-assignment-project.firebaseapp.com",
  projectId: "nine-assignment-project",
  storageBucket: "nine-assignment-project.appspot.com",
  messagingSenderId: "148472964467",
  appId: "1:148472964467:web:38f004ef783f2206b5d106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;