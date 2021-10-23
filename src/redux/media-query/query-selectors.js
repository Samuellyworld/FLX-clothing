
import {createSelector} from 'reselect';

const selectMedia = state => state.media

export const selectMediaQuery = createSelector(
  [selectMedia], 
   media => media.mediaQueryWidth
	)

export const selectCheckForMobile = createSelector(
   [selectMedia],
     media => media.checkForMobileQuery
	)