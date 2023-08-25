import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDncYY6E9AvZIuRj5lwxW5Au_foHSezgAc",
    authDomain: "e-commerce-site-d.firebaseapp.com",
    projectId: "e-commerce-site-d",
    storageBucket: "e-commerce-site-d.appspot.com",
    messagingSenderId: "834354704197",
    appId: "1:834354704197:web:7e666e89a24c2cd13f182c",
    measurementId: "G-K6QDPR0PGK"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//     prompt: "select account",
// })



export const auth = getAuth(app);
export const signInWithGooglePopUp = () => {
    signInWithPopup(auth, provider);
}

export const db = getFirestore()










