import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCvWvbGrAJcslE-vz5NRPavzA3K_obatFQ",
    authDomain: "netflix-clone-97f44.firebaseapp.com",
    projectId: "netflix-clone-97f44",
    storageBucket: "netflix-clone-97f44.appspot.com",
    messagingSenderId: "468506496616",
    appId: "1:468506496616:web:6adb8f351c42637911f5dd"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;