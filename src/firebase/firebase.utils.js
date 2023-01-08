// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
   collection,
   doc,
   setDoc,
   getDoc,
   getFirestore,
   query,
   getDocs,
   writeBatch,
   documentId,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
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
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(app);
export const signInWithGoogle = () => {
   signInWithPopup(auth, provider);
};

export const addCollectionAndDocuments = async (
   collectionKey,
   objectsToAdd
) => {
   const batch = writeBatch(db);
   objectsToAdd.forEach((obj) => {
      const newDocRef = doc(db, collectionKey, uuidv4());
      batch.set(newDocRef, obj);
   });

   return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
   const transformedCollection = collections.docs.map((doc) => {
      const { title, items } = doc.data();
      return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items,
      };
   });

   return transformedCollection.reduce((acc, curr) => {
      acc[curr.title.toLowerCase()] = curr;
      return acc;
   }, {});
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;
   const userDocRef = doc(db, "users", userAuth.uid);
   const usersColletionRef = collection(db, "users");

   const docSnap = await getDoc(userDocRef);
   const collectionSnap = await getDocs(usersColletionRef);

   console.log(collectionSnap);

   if (!docSnap.exists()) {
      const { displayName, email } = userAuth;
      console.log(displayName);
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
