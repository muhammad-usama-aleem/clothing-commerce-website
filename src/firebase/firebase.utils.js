import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC1RihsmrJeKW76zwD3IevljqT8mrqGEEY",
    authDomain: "crwn-clothing-23b16.firebaseapp.com",
    databaseURL: "https://crwn-clothing-23b16.firebaseio.com",
    projectId: "crwn-clothing-23b16",
    storageBucket: "crwn-clothing-23b16.appspot.com",
    messagingSenderId: "233260862215",
    appId: "1:233260862215:web:3c538ddb840a2ffcbad3a2",
    measurementId: "G-BS9EECELET"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth){
    return
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(err){
      console.log('error in creating user', err.message);
    }
  }
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;