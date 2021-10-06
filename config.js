import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDuBIuWsOHSNzOquQLPzZFF9gQrwMnWA_Y",
  authDomain: "pro-c75.firebaseapp.com",
  projectId: "pro-c75",
  storageBucket: "pro-c75.appspot.com",
  messagingSenderId: "701387893936",
  appId: "1:701387893936:web:63bc51e95ecc2bb7261f75"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
