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
export const createUserProfileDocument = async(userAuth, additionalData) => {
	if(!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
    	const { displayName, email} = userAuth
    	const createdAt = new Date();
    	try {
    		await userRef.set({
    			displayName,
    			email,
    			createdAt,
    			...additionalData
    		})
    	} catch(error) {
    		console.log('error creating user', error.message)
    	}
    }
     return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
          batch.set(newDocRef, obj)
            })
    return await
        batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(
        doc => {
            const {title, items} = doc.data()

            return {
                routeName : encodeURI(title.toLowerCase()),
                id : doc.id,
                title,
                items
            }
        }

        )
           return transformedCollection.reduce((accumulator, collection)=> {
               accumulator[collection.title.toLowerCase()] = collection
               return accumulator
           }, {})
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
 provider.setCustomParameters({ prompt : 'select_account'});

 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;