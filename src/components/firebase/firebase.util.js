import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


var config = {
    apiKey: "AIzaSyC29NGUyBDJATusOFjyvZyzAP0UUeyEHQI",
    authDomain: "crown-db-351b8.firebaseapp.com",
    databaseURL: "https://crown-db-351b8-default-rtdb.firebaseio.com",
    projectId: "crown-db-351b8",
    storageBucket: "crown-db-351b8.appspot.com",
    messagingSenderId: "1039583076681",
    appId: "1:1039583076681:web:ec3d08034275e0d1cbba98",
    measurementId: "G-8YVCYMZ9PP"
};

firebase.initializeApp(config);



export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) {
        return;
    }

    const userRef = firestore.doc(`{users/${userAuth.ref}}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) 
    {
        const {displayName, email} = userAuth;

        const createAt = new Date();

        try 
        {   
                await userRef.set({
                    displayName,
                    email,
                    createAt,
                    ...additionalData
                })
        }catch(error) 
        {
                console.log('error creating user', error.message);
        }
    }

    return userRef;

};




export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

