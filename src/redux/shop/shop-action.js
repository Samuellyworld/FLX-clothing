import shopActionTypes from './shop-types';

export const updateCollections = collectionsMap => ({
	type : shopActionTypes.UPDATE_COLLECTIONS,
	payload : collectionsMap
}) 