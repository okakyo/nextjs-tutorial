import Firebase from "firebase/app";
import "firebase/auth";

const FirebaseConfig = {

}

const firebase= Firebase.apps.length?Firebase.app():Firebase.initializeApp(FirebaseConfig)

export const Auth =firebase.auth();
export const GoogleProvider = new Firebase.auth.GoogleAuthProvider;