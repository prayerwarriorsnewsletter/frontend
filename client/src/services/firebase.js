import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7f9Wx_BtVnvvjNhW2Xae9cpBvGmCGUek",
  authDomain: "prayerwarriorsnewsletter.firebaseapp.com",
  databaseURL: "https://prayerwarriorsnewsletter.firebaseio.com",
  projectId: "prayerwarriorsnewsletter",
  storageBucket: "prayerwarriorsnewsletter.appspot.com",
  messagingSenderId: "763817303665",
  appId: "1:763817303665:web:d6739988d15c125db345d0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
