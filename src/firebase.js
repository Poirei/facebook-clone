/* eslint-disable no-unused-vars */
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCcHKbFu92lL1xVXVVzeYHQWM5VItK0mlk",
    authDomain: "fb-clone-f9356.firebaseapp.com",
    databaseURL: "https://fb-clone-f9356.firebaseio.com",
    projectId: "fb-clone-f9356",
    storageBucket: "fb-clone-f9356.appspot.com",
    messagingSenderId: "28252229184",
    appId: "1:28252229184:web:ba8edf6f01f33dbfb6d9a5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
