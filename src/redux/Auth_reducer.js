import {authAPI, userAPI} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
	userId: null,
	email: null,
	login: null,
	password: null,
	isFetching: false,
	isAuth: false,
};

let authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payLoad,
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


export const setUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payLoad: {email, userId, login, isAuth}
});

export const authThunk = () => (dispatch) => {
	authAPI.usersAuthFromServer().then(response => {
		if (response.resultCode === 0) {
			let {email, id, login} = response.data;
			dispatch(setUserData(email, id, login, true));
		}
	})
};

export const loginThunk = (email, password, rememberMe) => (dispatch) => {
	authAPI.loginFromServer(email, password, rememberMe = false).then(response => {
		if (response.resultCode === 0) {
			dispatch(authThunk())
		}
	})
}

export const logoutThunk = () => (dispatch) => {
	authAPI.logoutFromServer().then(response => {
		if (response.resultCode === 0) {
			dispatch(setUserData(null, null, null, false));
		}
	})
}


export default authReducer;