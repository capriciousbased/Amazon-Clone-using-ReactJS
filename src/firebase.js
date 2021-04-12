import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArHRZm3zriSmPfVhzNs6aLP_lWP0Usn24",
  authDomain: "challenge-d3fd5.firebaseapp.com",
  projectId: "challenge-d3fd5",
  storageBucket: "challenge-d3fd5.appspot.com",
  messagingSenderId: "621941365140",
  appId: "1:621941365140:web:0ce9e382378ad11c0d9781",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
