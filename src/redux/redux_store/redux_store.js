import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "../Messages_reducer";
import profileReducer from "../Profile_reducer";
import newsReducer from "../News_reducer";
import usersReducer from "../Users_reducer";
import authReducer from "../Auth_reducer";
import thunkMiddleWare  from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "../App_reducer";

let reducersPack = combineReducers({
	postData: profileReducer,
	messagesData: messagesReducer,
	newsData: newsReducer,
	usersData: usersReducer,
	authData: authReducer,
	appData: appReducer,
	form: formReducer,
});

let store = createStore(reducersPack, applyMiddleware(thunkMiddleWare));

export default store;

