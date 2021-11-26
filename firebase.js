import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAN1yYujMS6fP5tcLLaKQAycgeoLi496UU",
    authDomain: "ubereat-rn-332511.firebaseapp.com",
    projectId: "ubereat-rn-332511",
    storageBucket: "ubereat-rn-332511.appspot.com",
    messagingSenderId: "1056623293303",
    appId: "1:1056623293303:web:c58ea815094cbf1870a772",
    measurementId: "G-QG2SPSJ6V2"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;