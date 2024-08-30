// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEPVch4h2ei5O8f5CQ1bNLP2H0uBOj5sg",
  authDomain: "todo-e8ed3.firebaseapp.com",
  projectId: "todo-e8ed3",
  storageBucket: "todo-e8ed3.appspot.com",
  messagingSenderId: "477989208290",
  appId: "1:477989208290:web:fc75bd5beb631a4d1c5ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export { auth, database };