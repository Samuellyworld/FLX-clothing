
import {createSelector} from 'reselect';

const selectMedia = state => state.mediaQuery

// export const selectMediaQuery = createSelector(
//   [selectMedia], 
//    media => media.mediaQueryWidth
// 	)

export const selectMobileMedia = createSelector(
   [selectMedia],
     media => media.checkForMobileQuery
	)