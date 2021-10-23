import mediaActionTypes from './query-types'; 

const INITIAL_STATE = {
	checkForMobileQuery : false,
	mediaQueryWidth : null
}

const queryReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case mediaActionTypes.CHECK_FOR_MOBILE_QUERY :
		return {
			...state,
			checkForMobileQuery : !state.checkForMobileQuery
		}
		case mediaActionTypes.MOBILE_MEDIA_WIDTH :
		return {
			...state,
			mediaQueryWidth : action.payload
		}
		default :
		return state
	}
}

export default queryReducer;