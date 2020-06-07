import {authAPI, userAPI} from "../../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {

	email: null,
	userId: null,
	login: null,
	password: null,
	isAuth: false,
	isFetching: false,
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
	payLoad: {email: email, userId: userId, login: login, isAuth: isAuth,}
});

export const authThunk = () => async (dispatch) => {
	let response = await authAPI.usersAuthFromServer()
	if (response.resultCode === 0) {
		let {id, email, login} = response.data;															// !!! осторожно с порядком присваивания, оно должно совпадать с порядком что присутствует на сервере
		dispatch(setUserData(id, email, login, true));
	}
};

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI.loginFromServer(email, password, rememberMe = false)
	if (response.data.resultCode === 0) {
		dispatch(authThunk())
	} else {
		let message = response.messages.length > 0 ? response.messages[0] : "Some error";			// при невыполнении 'resultCode' должны высветить сообщения об ошибке, (текс сообщения об ошибке берем из сервера (messages))
		dispatch(stopSubmit('login', {_error: message}))  																	  // ! Важная строка для понимания работы возврата функции 'dispatch'. formSubmit берем из библиотеки 'redux-form'
	}
}

export const logoutThunk = () => async (dispatch) => {
	let response = await authAPI.logoutFromServer()
	if (response.resultCode === 0) {
		dispatch(setUserData(null, null, null, false));
	}
}


export default authReducer;