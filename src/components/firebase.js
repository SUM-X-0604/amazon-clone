import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyADh5V3tcVzQXm1kTGcY0w0rvta7hJQeEc",
    authDomain: "clone-907af.firebaseapp.com",
    projectId: "clone-907af",
    storageBucket: "clone-907af.appspot.com",
    messagingSenderId: "823999665301",
    appId: "1:823999665301:web:594b7488bd8723dc35b79c",
    measurementId: "G-KT0KTBYYPN"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }


