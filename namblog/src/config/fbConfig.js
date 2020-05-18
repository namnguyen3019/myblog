import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';


var firebaseConfig = {
    apiKey: "AIzaSyD0n71c8mAeLefRAyyTGQ2-Piaxy93iymw",
    authDomain: "namblog-128ad.firebaseapp.com",
    databaseURL: "https://namblog-128ad.firebaseio.com",
    projectId: "namblog-128ad",
    storageBucket: "namblog-128ad.appspot.com",
    messagingSenderId: "1072841431202",
    appId: "1:1072841431202:web:e7b532d9357ea4cbe69ffb",
    measurementId: "G-WHC39QQWM4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;




