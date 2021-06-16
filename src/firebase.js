import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMvCBPvKZRSU3xGDyfbBLaxXL2Og33iZs",
  authDomain: "fun-tube-anish.firebaseapp.com",
  projectId: "fun-tube-anish",
  storageBucket: "fun-tube-anish.appspot.com",
  messagingSenderId: "147990798699",
  appId: "1:147990798699:web:1096a88f81e44c9f7e6c2e",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
