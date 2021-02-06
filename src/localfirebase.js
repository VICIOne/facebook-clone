import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA60edUyg1f58prK58pOqu8IZ7ikqr3rFA",
  authDomain: "facebook-clone-cb675.firebaseapp.com",
  projectId: "facebook-clone-cb675",
  storageBucket: "facebook-clone-cb675.appspot.com",
  messagingSenderId: "1025148126337",
  appId: "1:1025148126337:web:7bdf39171e453da75cf980",
  measurementId: "G-M4KVR6JGRW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.FacebookAuthProvider()



export {auth,provider}
export default db