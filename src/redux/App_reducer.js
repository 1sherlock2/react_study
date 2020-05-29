import {authThunk} from "./Auth_reducer";

const INITIALIZE = 'INITIALIZE';

let initialState = {
	initialized: false,
};

let appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZE:
			return {
			...state,
				initialized: true,
			}
		default:
			return state
	}
};

const initialized = () => ({type: INITIALIZE})

export const initializedThunk = () => (dispatch) => {
	let promise = dispatch(authThunk())

	Promise.all([promise]).then(() => {dispatch(initialized())})
}

export default appReducer;