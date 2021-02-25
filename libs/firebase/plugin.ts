import { processResponsive } from "@chakra-ui/react";
import Firebase from "firebase/app";
import "firebase/auth";



const FirebaseConfig = {
    apiKey: "AIzaSyAXhRANrE1YLJ0FcIxRiFx5gD8npTs27Qc",
    authDomain: "hudlook-1c8f5.firebaseapp.com",
    databaseURL: "https://hudlook-1c8f5.firebaseio.com",
    projectId: "hudlook-1c8f5",
    storageBucket: "hudlook-1c8f5.appspot.com",
    messagingSenderId: "965747634693",
    appId: "1:965747634693:web:eff659395b29318905a26c",
    measurementId: "G-YP8WN5PL13"
}


const firebase= Firebase.apps.length?Firebase.app():Firebase.initializeApp(FirebaseConfig)

export const Auth =firebase.auth();
export const GoogleProvider = new Firebase.auth.GoogleAuthProvider;