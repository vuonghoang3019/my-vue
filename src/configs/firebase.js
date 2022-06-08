
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9wiIQRuryhTVxQucgAN9n39iEpIWLw2I",
    authDomain: "imoney-9e83f.firebaseapp.com",
    projectId: "imoney-9e83f",
    storageBucket: "imoney-9e83f.appspot.com",
    messagingSenderId: "112169780737",
    appId: "1:112169780737:web:cb74f1737fdfe7f317a200",
    measurementId: "G-FTTVQ95905"
};

const app = initializeApp(firebaseConfig);

const projectAuth = getAuth(app);

const projectFireStore = getFirestore(app);
// const timestamp = projectFireStore.Timestamp.now();

export { projectAuth, projectFireStore };

