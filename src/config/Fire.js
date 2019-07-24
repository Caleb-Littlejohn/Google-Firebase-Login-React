import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyByBmY-9qyGFlW8Pk7uspsHRyToLJq6ze8",
  authDomain: "login-example-15562.firebaseapp.com",
  databaseURL: "https://login-example-15562.firebaseio.com",
  projectId: "login-example-15562",
  storageBucket: "",
  messagingSenderId: "310232246839",
  appId: "1:310232246839:web:80ac95bed68e641b"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;