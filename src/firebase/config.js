// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, addDoc, collection, serverTimestamp, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { getAuth, createUserWithEmailAndPassword, updateCurrentUser, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};
// https://medium.com/how-to-react/using-env-file-in-react-js-b2714235e77e

const app = initializeApp(firebaseConfig);

const fbStorage = getStorage(app);
const fbStorageRef = ref;
// const fbUploadBytes = uploadBytes;
const fbUploadBytesResumable = uploadBytesResumable;
const fbGetDownloadURL = getDownloadURL;

const fbFirestore = getFirestore(app);
const fbCollection = collection;
const fbAddDoc = addDoc;
const fbGetDocs = getDocs;
const timestamp = serverTimestamp;

const fbAuth = getAuth(app);
const fbCreateUserWithEmailAndPassword = createUserWithEmailAndPassword;
const fbUpdateCurrentUser = updateCurrentUser;
const fbSignInWithEmailAndPassword = signInWithEmailAndPassword;
const fbSignOut = signOut;

export { 
  fbStorage, 
  fbStorageRef, 
  // fbUploadBytes,
  fbUploadBytesResumable, 
  fbGetDownloadURL, 
  fbFirestore, 
  fbCollection, 
  fbAddDoc, 
  timestamp, 
  fbGetDocs,
  fbAuth,
  fbCreateUserWithEmailAndPassword,
  fbUpdateCurrentUser,
  fbSignInWithEmailAndPassword,
  fbSignOut
};

// FBSecurity Rules : https://firebase.google.com/docs/storage/security/get-started#sample-rules

// FB CodeLab :  https://firebase.google.com/codelabs/firestore-web#0

// FB Quick Start :  https://firebase.google.com/docs/firestore/quickstart#node.js_2

// const deneme = doc(projectFirestore, 'merhabaDunya/2022-09-30');
// function denemeyiYaz() {
//   const docData = {
//     aciklama: 'Lorem ipsum',
//     tel: 533,
//     vegan: false,
//   }
//   setDoc(deneme, docData)
// }
// console.log('Hello Hello !');
// denemeyiYaz();
