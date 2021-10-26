
import {createSelector} from 'reselect';

const selectMedia = state => state.mediaQuery

export const selectMobileMedia = createSelector(
   [selectMedia],
     media => media.checkForMobileQuery
	)