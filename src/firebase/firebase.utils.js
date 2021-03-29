import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCg0dyJwk1kG4pFbvyJIuFZLPV5N6DVVbU",
    authDomain: "crwb-db-e590c.firebaseapp.com",
    projectId: "crwb-db-e590c",
    storageBucket: "crwb-db-e590c.appspot.com",
    messagingSenderId: "438005548642",
    appId: "1:438005548642:web:f6372b3ed545835d3ab33b",
    measurementId: "G-PS37TENWWY"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
   const userRef = firestore.doc(`users/${userAuth.uid}`)

   const snapShot = await userRef.get();
   console.log(snapShot)

   if (!snapShot.exists) {
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
      console.log('error creating this user', error.message)
     }

   }

   return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
