import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB43YMEZATS7Kni18_63cedtVLCIIdMJnA",
  authDomain: "commerce-site-grega.firebaseapp.com",
  projectId: "commerce-site-grega",
  storageBucket: "commerce-site-grega.appspot.com",
  messagingSenderId: "360965976490",
  appId: "1:360965976490:web:4ab149904fec7f1f58fbd3",
};

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData: any
) => {
  if (!userAuth) return;

  const userRefObject = firestore.collection("users").doc(userAuth.uid);

  const userSnapObject = await userRefObject.get();

  if (!userSnapObject.exists) {
    const { displayName, email } = userAuth;

    try {
      userRefObject.set({
        displayName,
        email,
        createdAt: new Date(),
        ...additionalData,
      });
    } catch (error) {
      console.log("error writting to database", error.message);
    }
  }
  return userRefObject;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
