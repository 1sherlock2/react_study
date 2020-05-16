import {userAPI} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
		userId: null,
		email: null,
		login: null,
		isFetching: false,
		isAuth: false,
};

let authReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		default:
			return state
	}
};


export const setUserData = (userId, email, login) => ({type:SET_USER_DATA, data: {email, userId, login}});

export const authThunk = () => {
	return (dispatch) => {
		userAPI.usersAuthFromServer().then(data => {
			if (data.resultCode === 0) {
				let {email, id, login} = data.data;
				dispatch(setUserData(email, id, login));
			} else if (data.resultCode == 1) {

			}
		})
	}
}

export default authReducer;