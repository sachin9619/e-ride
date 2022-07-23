import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDATLxk-DWzo0IqpieUAVk1bKO9IBOauEI",
    authDomain: "e-ride-90694.firebaseapp.com",
     projectId: "e-ride-90694",
  storageBucket: "e-ride-90694.appspot.com",
  messagingSenderId: "866508431280",
  appId: "1:866508431280:web:d7280f2aebf02e70d84075"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
