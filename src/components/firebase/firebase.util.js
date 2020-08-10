import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCdyQdwUKI0wvdmkVcssqhBTPzEvsUAp4I",
    authDomain: "crown-db-eb8cb.firebaseapp.com",
    databaseURL: "https://crown-db-eb8cb.firebaseio.com",
    projectId: "crown-db-eb8cb",
    storageBucket: "crown-db-eb8cb.appspot.com",
    messagingSenderId: "618636790193",
    appId: "1:618636790193:web:cd6c4b20def1d6b5b99590",
    measurementId: "G-605DBR6YBN"
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

