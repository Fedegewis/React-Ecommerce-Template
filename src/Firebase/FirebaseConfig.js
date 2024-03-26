import firebase from "firebase";



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

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
