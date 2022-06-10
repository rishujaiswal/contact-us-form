import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcQr-xm0gqX0C0eB025v63feoRXRyx6dM",
  authDomain: "team-expansion-54ae7.firebaseapp.com",
  databaseURL: "https://team-expansion-54ae7-default-rtdb.firebaseio.com",
  projectId: "team-expansion-54ae7",
  storageBucket: "team-expansion-54ae7.appspot.com",
  messagingSenderId: "932038990518",
  appId: "1:932038990518:web:02f65a0122d0ff39bfa417",
  measurementId: "G-NCB4XT3N2C"


});

var db = firebaseApp.firestore();

export { db };

