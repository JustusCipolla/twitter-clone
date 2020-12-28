import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyU87aqOFxwjFBKecl_MwPLf2gjPzlO_E",
  authDomain: "twitter-clone-ae8ca.firebaseapp.com",
  projectId: "twitter-clone-ae8ca",
  storageBucket: "twitter-clone-ae8ca.appspot.com",
  messagingSenderId: "137061621549",
  appId: "1:137061621549:web:bc750b27fcb6bf7825bda4",
  measurementId: "G-ZK1Z9QRVL9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
