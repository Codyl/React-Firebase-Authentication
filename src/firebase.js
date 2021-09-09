import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// import {useAuthState} from 'react-firebase-hooks/auth';
// import {useCollectionsData} from 'react-firebase-hooks/firestore';

const appConfig = {
    apiKey: 'AIzaSyA_ccJxMhr_KNWSSIpnCadV2hRZFfXOLjQ',
    authDomain: process.env.BOOK_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.BOOK_FIREBASE_PROJECT_ID,
    storageBucket: process.env.BOOK_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.BOOK_FIREBASE_SENDER_ID,
    appId: process.env.BOOK_FIREBASE_APP_ID
};
const app = firebase.initializeApp(appConfig);
export const auth = app.auth();
export default app;