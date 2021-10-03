import shopActionTypes from './shop-types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase';

export const fetchCollectionsStart = () =>({
	type : shopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
	type : shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload : collectionsMap
}) 

export const fetchCollectionsFailure= (errorMessage) => ({
  type : shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload : errorMessage
})

export const fetchCollectionsStartAsync = () => {
	return dispatch => {
	const collectionRef = firestore.collection('collections')
     dispatch(fetchCollectionsStart())
	  collectionRef.get().then( snapshot => {
       const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
	}).catch((err) => dispatch(fetchCollectionsFailure(err)))
}
}
