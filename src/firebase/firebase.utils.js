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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  

  const batch = firestore.batch();
  objectsToAdd.forEach( object => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  
  const transformedCollection = collections.docs.map( doc => {
    const { title, items }  = doc.data();

    
    
    return {
      routeName: encodeURI( title.toLowerCase() ),
      id: doc.id,
      title,
      items
    }
  
  });
  
 
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {})
  
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;