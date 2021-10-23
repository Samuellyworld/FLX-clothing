import mediaActionTypes from './query-types';

export const checkForMobileQuery = () => ({
  type : mediaActionTypes.CHECK_FOR_MOBILE_QUERY
})

export const setMediaQuery = (media) => ({
	type : mediaActionTypes.MOBILE_MEDIA_WIDTH,
	payload : media
})