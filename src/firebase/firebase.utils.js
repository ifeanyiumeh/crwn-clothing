import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDNqu2BAUUC2QzdEPNme9SRf79BF5J3Ywg",
  authDomain: "crown-db-b4064.firebaseapp.com",
  projectId: "crown-db-b4064",
  storageBucket: "crown-db-b4064.appspot.com",
  messagingSenderId: "841099513669",
  appId: "1:841099513669:web:b52260764495416036f82c",
  measurementId: "G-WLWP6HC2CT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
