import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
  UserCredential,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcbg8phwhd3CiQ7rrWEabb2ihilcaJT14",
  authDomain: "ztmfinalproject.firebaseapp.com",
  projectId: "ztmfinalproject",
  storageBucket: "ztmfinalproject.appspot.com",
  messagingSenderId: "46918607863",
  appId: "1:46918607863:web:93c6446808afc84eac44f2"
};
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

type CategoryData = {
  imageUrl: string;
  items: CategoryItem[];
  title: string;
};

export const getCategoriesAndDocuments = async (): Promise<CategoryData[]> => {
  const collectionRef = collection(db, 'collections');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as CategoryData
  );
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation: AdditionalInformation = {} as AdditionalInformation
): Promise<QueryDocumentSnapshot<UserData> | void> => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async (): Promise<void> => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};













// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {
//   getAuth, 
//   signInWithRedirect, 
//   signInWithPopup, 
//   GoogleAuthProvider, 
//   FacebookAuthProvider, 
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   User,
//   NextOrObserver,
//   UserCredential,
// } from 'firebase/auth';
// import {
//   getFirestore, 
//   doc, 
//   getDoc, 
//   setDoc, 
//   collection, 
//   writeBatch, 
//   query, 
//   getDocs,
//   QueryDocumentSnapshot,
//  } from 'firebase/firestore';


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration


// const firebaseConfig = {
//   apiKey: "AIzaSyBcbg8phwhd3CiQ7rrWEabb2ihilcaJT14",
//   authDomain: "ztmfinalproject.firebaseapp.com",
//   projectId: "ztmfinalproject",
//   storageBucket: "ztmfinalproject.appspot.com",
//   messagingSenderId: "46918607863",
//   appId: "1:46918607863:web:93c6446808afc84eac44f2"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//     prompt: "select_account"
// });

// const facebookProvider = new FacebookAuthProvider();

// facebookProvider.setCustomParameters({
//   prompt: "select_account"
// })

// export const auth = getAuth(firebaseApp);
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
// export const SignInWithFaceBookPopup = () => signInWithPopup(auth, facebookProvider);

// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {displayName: "N/A"}) => {
//     if(!userAuth) return;
//     const userDocRef = doc(db, 'users', userAuth.uid);
//     const userSnapshot = await getDoc(userDocRef);
//     if(!userSnapshot.exists()){
//       const {displayName, email} = userAuth;
//       const createdAt = new Date();
//       try{
//         await setDoc(userDocRef, {
//           displayName,
//           email,
//           createdAt,
//           ...additionalInformation,
//         });
//       }catch(err){
//         console.log("Error creating the user: ", err);
//       }
//     }
//     return userSnapshot;
// }

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if(!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// }
// // SignInAuthUserWithEmailAndPassword

// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if(!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// }

// export const signOutUser = async () => await signOut(auth);

// export const onAuthStateChangedListener = (callback) => {
//   onAuthStateChanged(auth, callback);
// } 

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd,
//   field
// ) => {
//   console.log(objectsToAdd);
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);

//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object);
//   });

//   await batch.commit();
//   console.log('done');
// };

// // getCategoriesAndDocuments

// export const getCategoriesAndDocuments = async () => {
//   const collectionRef = collection(db, 'collections');
//   const q = query(collectionRef);
//   const querySnapshot = await getDocs(q);
//   return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
// };


// export const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(
//     auth,
//     (userAuth) => {
//       unsubscribe();
//       resolve(userAuth);

//     },
//     reject
//   )
//   })
// }