import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSsUAwNKakKbcnPjIDPivQD_JADKKp8J0",
  authDomain: "chat-app-ff530.firebaseapp.com",
  databaseURL:
    "https://chat-app-ff530-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-app-ff530",
  storageBucket: "chat-app-ff530.appspot.com",
  messagingSenderId: "10603597573",
  appId: "1:10603597573:web:89b8b4b0f1d9fc76df316c",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
