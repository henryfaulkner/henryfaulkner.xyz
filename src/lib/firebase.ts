import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGXxeddwfauD2jsLN9sClKlW7gcl76kxY",
  authDomain: "henryfaulkner-xyz.firebaseapp.com",
  projectId: "henryfaulkner-xyz",
  storageBucket: "henryfaulkner-xyz.appspot.com",
  messagingSenderId: "585447646787",
  appId: "1:585447646787:web:b59f311eebc320d87316f6",
};

function createFirebaseApp(firebaseConfig) {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Firestore exports
export const firestore = getFirestore(firebaseApp);

/// Helper functions

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data
  };
}
