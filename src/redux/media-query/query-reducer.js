import mediaActionTypes from './query-action'; 

const INITIAL_STATE = {
	checkForMobileQuery : false
}

const queryReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case mediaActionTypes.CHECK_FOR_MOBILE_QUERY :
		return {
			...state,
			checkForMobileQuery : !checkForMobileQuery
		}
		default :
		return state
	}
}

export default queryReducer;