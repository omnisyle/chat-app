import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import User from "./../models/user";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

function onSignIn(callback: (user: User) => void): () => void {

  const unregisterObserver = firebase.auth().onAuthStateChanged(
    (user) => {
      const userModel : User = new User(
        user.uid,
        user.displayName,
        user.email
      );

      callback(userModel);
    }
  );

  return unregisterObserver;
}

export default firebase;

export {
  onSignIn
};
