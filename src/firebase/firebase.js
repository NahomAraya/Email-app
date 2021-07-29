import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVAGJ2xgbbLyAV94ZuDGofWMtQH08mOi0",
    authDomain: "email-app-79a7e.firebaseapp.com",
    projectId: "email-app-79a7e",
    storageBucket: "email-app-79a7e.appspot.com",
    messagingSenderId: "372757191935",
    appId: "1:372757191935:web:0cefdc1bbb913ecb9080ca"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};
