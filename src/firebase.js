// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAFR5QZmkvgAFaTY1Ur3zCBtSzDphDavUw",
  authDomain: "monitoring-app-cd60b.firebaseapp.com",
  projectId: "monitoring-app-cd60b",
  storageBucket: "monitoring-app-cd60b.appspot.com",
  messagingSenderId: "69870051840",
  appId: "1:69870051840:android:3bf2df3a8d15c73eb7aee5"
};


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
