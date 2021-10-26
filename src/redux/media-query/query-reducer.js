import mediaActionTypes from './query-types'; 

const INITIAL_STATE = {
	checkForMobileQuery : false
}

const queryReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case mediaActionTypes.CHECK_FOR_MOBILE_QUERY :
		return {
			...state,
			checkForMobileQuery : !state.checkForMobileQuery
		}
		default :
		return state
	}
}

export default queryReducer;