
import {createSelector} from 'reselect';

const selectMedia = state => state.media

export const selectMediaQuery = createSelector(
  [selectMedia], 
   media => media.mediaQueryWidth
	)

export const selectCheckForMobilr = createSelector(
   [selectMedia],
     media => media.checkForMobileQuery
	)