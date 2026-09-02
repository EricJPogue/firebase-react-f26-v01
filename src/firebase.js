import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, /*connectAuthEmulator*/ } from "firebase/auth";
import { getFirestore, /*connectFirestoreEmulator*/  } from "firebase/firestore";
import { getStorage, /*connectStorageEmulator*/ } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyQmHgadS841VM2QrOnetarihVyByrego",
  authDomain: "fir-react-f26-v1-project.firebaseapp.com",
  projectId: "fir-react-f26-v1-project",
  storageBucket: "fir-react-f26-v1-project.firebasestorage.app",
  messagingSenderId: "735932793274",
  appId: "1:735932793274:web:982223f66e1c2417b39d83"
};

const app = initializeApp(firebaseConfig);

// Auth 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

// Storage
const storage = getStorage(app);

// Only connect to emulators when running locally
/*if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}*/

export { auth, provider };
export  { db };
export { storage };
