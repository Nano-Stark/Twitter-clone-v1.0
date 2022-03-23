// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARuxv5Kqdba7jJnEnWwQo76P4bkJ_cwsA",
  authDomain: "twitter-clone-v1-stark.firebaseapp.com",
  projectId: "twitter-clone-v1-stark",
  storageBucket: "twitter-clone-v1-stark.appspot.com",
  messagingSenderId: "96037521080",
  appId: "1:96037521080:web:5e03a69f8a4da57a84d64d"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;