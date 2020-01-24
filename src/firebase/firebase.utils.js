import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBDTaQeiUDzgJAyQxC1mOyVSeXM_lc8Bck",
  authDomain: "heliodb.firebaseapp.com",
  databaseURL: "https://heliodb.firebaseio.com",
  projectId: "heliodb",
  storageBucket: "heliodb.appspot.com",
  messagingSenderId: "1057912842720",
  appId: "1:1057912842720:web:c0bd87013e998948392385",
  measurementId: "G-0T0TR4NQDC"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;