import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// import {useAuthState} from 'react-firebase-hooks/auth';
// import {useCollectionsData} from 'react-firebase-hooks/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyA_ccJxMhr_KNWSSIpnCadV2hRZFfXOLjQ",
    authDomain: "fanowrimo-development.firebaseapp.com",
    projectId: "fanowrimo-development",
    storageBucket: "fanowrimo-development.appspot.com",
    messagingSenderId: "399541799846",
    appId: "1:399541799846:web:6400fb5e6cf1c6bc29dd67"
});
export const auth = app.auth();
export default app;