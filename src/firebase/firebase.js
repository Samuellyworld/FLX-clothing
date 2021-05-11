import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	 apiKey: "AIzaSyD-l8BvN9i-0kAMZja_sC6iaz14R8yyJrc",
    authDomain: "flx-db.firebaseapp.com",
    projectId: "flx-db",
    storageBucket: "flx-db.appspot.com",
    messagingSenderId: "152042496617",
    appId: "1:152042496617:web:2c369494712ce3006c38f8",
    measurementId: "G-N67GXPW8BM"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
 provider.setCustomParameters({ prompt : 'select_account'});

 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;