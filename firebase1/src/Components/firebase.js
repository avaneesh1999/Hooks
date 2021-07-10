import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
firebase.initializeApp(
{
    apiKey: "AIzaSyBvysxJcgDRqwkosI9khzFCqM34G5jRjG4",
    authDomain: "fir-demo-be837.firebaseapp.com",
    projectId: "fir-demo-be837",
    storageBucket: "fir-demo-be837.appspot.com",
    messagingSenderId: "66513861556",
    appId: "1:66513861556:web:2e1d8afbe2ea71027850e1"
  })

  export default firebase;