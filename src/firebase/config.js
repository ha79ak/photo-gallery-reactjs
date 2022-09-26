// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkihSCrsIXRmcLl7kCO6z0hEgUsS8wGag",
  authDomain: "photo-gallery-reactjs-3260a.firebaseapp.com",
  projectId: "photo-gallery-reactjs-3260a",
  storageBucket: "photo-gallery-reactjs-3260a.appspot.com",
  messagingSenderId: "32596344991",
  appId: "1:32596344991:web:78b618254196d5400f62aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.fireStore();

export { projectStorage, projectFirestore };