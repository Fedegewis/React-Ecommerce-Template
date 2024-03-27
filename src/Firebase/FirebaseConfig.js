import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';





const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDRfeBFj2XHR7IWMAkPxLvU_LqN-CLMpWw",
  authDomain: "brazeecommerce.firebaseapp.com",
  databaseURL: "https://brazeecommerce-default-rtdb.firebaseio.com",
  projectId: "brazeecommerce",
  storageBucket: "brazeecommerce.appspot.com",
  messagingSenderId: "1079638894169",
  appId: "1:1079638894169:web:ae9506ba6c700679f17348"
  //,measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();


export default firebase;
