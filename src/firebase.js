import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgkZgN4BQmKmPEQye7yWaAC-nZ8ccVysA",
  authDomain: "react-portfolio-shresth.firebaseapp.com",
  projectId: "react-portfolio-shresth",
  storageBucket: "react-portfolio-shresth.appspot.com",
  messagingSenderId: "1252508192",
  appId: "1:1252508192:web:403710d6368fb8cff7b245"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();