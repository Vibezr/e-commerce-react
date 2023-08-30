import {initializeApp} from "firebase/app";
import {
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup,
    createUserWithEmailAndPassword
} from "firebase/auth";
import {
    getFirestore,
    doc, 
    getDoc, 
    setDoc,
} from "firebase/firestore"

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

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
    prompt: "select_account"
});



export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleprovider);


export const db = getFirestore()

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}) => {
    if(!userAuth) return

    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}









