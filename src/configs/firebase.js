import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC9wiIQRuryhTVxQucgAN9n39iEpIWLw2I",
    authDomain: "imoney-9e83f.firebaseapp.com",
    projectId: "imoney-9e83f",
    storageBucket: "imoney-9e83f.appspot.com",
    messagingSenderId: "112169780737",
    appId: "1:112169780737:web:cb74f1737fdfe7f317a200",
    measurementId: "G-FTTVQ95905"
};

initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFireStore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFireStore, timestamp };