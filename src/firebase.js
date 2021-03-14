import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDI2Wy1MUhc9UPJvU7FrlSB0C4qkVn85nM",
    authDomain: "netflix-58216.firebaseapp.com",
    projectId: "netflix-58216",
    storageBucket: "netflix-58216.appspot.com",
    messagingSenderId: "576303535604",
    appId: "1:576303535604:web:80bcf2eeaf68010d91d5a1",
    measurementId: "G-9BFDVBRC4C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;