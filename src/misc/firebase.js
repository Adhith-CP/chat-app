import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyCcit2cVdWTy-ETMDVoxqBBBN4-qMgouUQ",
  authDomain: "chat-web-app-cc.firebaseapp.com",
  databaseURL: "https://chat-web-app-cc-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-cc",
  storageBucket: "chat-web-app-cc.appspot.com",
  messagingSenderId: "442837582214",
  appId: "1:442837582214:web:30c93eb0a38854184fac07",
  measurementId: "G-XZT61RZ8HX",
};

const app = firebase.initializeApp(config);
