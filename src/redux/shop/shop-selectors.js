import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
	'Hats' : 1,
	'Sneakers' : 2,
	'Jackets' : 3,
	'Womens' :  4,
	'Mens' : 5 
}

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop], 
      shop => shop.collections
	)

export const selectCollection = (collectionUrlParams) => createSelector(
     [selectShopCollections],
      collections=> collection.find
	)