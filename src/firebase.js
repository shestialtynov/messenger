import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9evsW3_HiCQy8od_TYT_kE-modXEpYao",
  authDomain: "messenger-4bd14.firebaseapp.com",
  databaseURL: "https://messenger-4bd14-default-rtdb.firebaseio.com",
  projectId: "messenger-4bd14",
  storageBucket: "messenger-4bd14.appspot.com",
  messagingSenderId: "464133817051",
  appId: "1:464133817051:web:c8c5f15da35f8ede0c82fe",
  measurementId: "G-4NHGBFT18K"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
