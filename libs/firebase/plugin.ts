import { processResponsive } from "@chakra-ui/react";
import Firebase from "firebase/app";
import "firebase/auth";

const FirebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
}

const firebase= Firebase.apps.length?Firebase.app():Firebase.initializeApp(FirebaseConfig)

export const Auth =firebase.auth();
export const GoogleProvider = new Firebase.auth.GoogleAuthProvider;