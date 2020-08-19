import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAY_cuxBJkTIEeSwnwtKkNmd3ISJ-rmU8M",
  authDomain: "vicoba-95107.firebaseapp.com",
  databaseURL: "https://vicoba-95107.firebaseio.com",
  projectId: "vicoba-95107",
  storageBucket: "vicoba-95107.appspot.com",
  messagingSenderId: "472618091013",
  appId: "1:472618091013:web:10dfad383b768f614e126c",
  measurementId: "G-384EWCBVYP",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
