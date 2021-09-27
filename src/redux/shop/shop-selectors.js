import {createSelector} from 'reselect';
import memoize from 'lodash.memoize'


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop], 
      shop => shop.collections
	)

export const selectCollection = memoize(collectionUrlParams => createSelector(
     [selectShopCollections],
      collections=> collections[collectionUrlParams]
	)
)