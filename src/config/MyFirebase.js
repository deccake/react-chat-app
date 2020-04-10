import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWtSaGNjZnQTN984TIBskpjni2RB0uN3M",
    authDomain: "reactchatapp-1b974.firebaseapp.com",
    databaseURL: "https://reactchatapp-1b974.firebaseio.com",
    projectId: "reactchatapp-1b974",
    storageBucket: "reactchatapp-1b974.appspot.com",
    messagingSenderId: "1045205583217",
    appId: "1:1045205583217:web:1cf13bbad85c687a3322d0",
    measurementId: "G-SGVTWXNCLY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
firebase.firestore().settings({ timestampsInSnapshots: true })
  
export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
  