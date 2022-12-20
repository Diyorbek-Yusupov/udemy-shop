// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
   collection,
   doc,
   setDoc,
   getDoc,
   getFirestore,
} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBHe5KhVkXJCcIVTtV7ujY1UqyKs80kOhA",
   authDomain: "e-shop-e8f5b.firebaseapp.com",
   projectId: "e-shop-e8f5b",
   storageBucket: "e-shop-e8f5b.appspot.com",
   messagingSenderId: "735477610793",
   appId: "1:735477610793:web:29a95d8b79868f4b779f38",
   measurementId: "G-4552HYPLG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// const analytics = getAnalytics(app);

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(app);
export const signInWithGoogle = () => {
   signInWithPopup(auth, provider);
};
/* .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
   })
   .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage);
      // ...
   }); */

const usersColletionRef = collection(db, "users");

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;
   const userDocRef = doc(db, "users", userAuth.uid);
   const docSnap = await getDoc(userDocRef);

   console.log(docSnap.exists());
   if (!docSnap.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalData,
         });
      } catch (err) {
         console.log(`Problem with creating user ${err.message}`);
      }
   }
   return userDocRef;
};

export default app;
