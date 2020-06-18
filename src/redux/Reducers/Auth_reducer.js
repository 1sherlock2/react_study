import { reset, stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../../API/API';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

const initialState = {
  email: null,
  userId: null,
  login: null,
  password: null,
  isAuth: false,
  isFetching: false,
  captcha: null,
  getCaptcha: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payLoad,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case GET_CAPTCHA_URL:
      return {
        ...state,
        getCaptcha: action.getCaptcha,
      };
    default:
      return state;
  }
};

// Dispatch
export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payLoad: {
    email, userId, login, isAuth,
  },
});
export const getCaptcha = (captcha) => ({
  type: GET_CAPTCHA_URL,
  getCaptcha: captcha,
});
export const resetForm = (authFrom) => (reset(authFrom));

// Thunks
export const authThunk = () => async (dispatch) => {
  const response = await authAPI.usersAuthFromServer();
  if (response.resultCode === 0) {
    const {
      id, email, login, captcha,
    } = response.data;															// !!! осторожно с порядком присваивания, оно должно совпадать с порядком что присутствует на сервере
    dispatch(setUserData(id, email, login, true, captcha));
  }
};

export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.loginFromServer(email, password, rememberMe = false, captcha);
  if (response.data.resultCode === 0) {
    dispatch(authThunk());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaURL());
    }
    const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';			// при невыполнении 'resultCode' должны высветить сообщения об ошибке, (текс сообщения об ошибке берем из сервера (messages))
    dispatch(stopSubmit('login', { _error: message })); // ! Важная строка для понимания работы возврата функции 'dispatch'. formSubmit берем из библиотеки 'redux-form'
  }
};

export const logoutThunk = () => async (dispatch) => {
  const response = await authAPI.logoutFromServer();
  if (response.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};
export const getCaptchaURL = () => async (dispatch) => {
  const response = await securityAPI.getCaptchFromServer();
  const captcha = response.url;
  dispatch(getCaptcha(captcha));
};

export default authReducer;
