import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbaKk-PiGGywZOOklKSF9tGOAcmp1Ypqo",
  authDomain: "fir-7ee6b.firebaseapp.com",
  projectId: "fir-7ee6b",
  storageBucket: "fir-7ee6b.appspot.com",
  messagingSenderId: "132586650578",
  appId: "1:132586650578:web:68cd92c68e619a0232260b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };