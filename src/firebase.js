// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcDGQOhyJ31AeESeUU_4u3uCEyK6cn4ps",
  authDomain: "linkedin-clone-e41ea.firebaseapp.com",
  projectId: "linkedin-clone-e41ea",
  storageBucket: "linkedin-clone-e41ea.appspot.com",
  messagingSenderId: "229031236045",
  appId: "1:229031236045:web:8e4222116c10779975b484"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider(); 
const storage = firebase.storage();

export { auth, provider, storage }
export default db;
