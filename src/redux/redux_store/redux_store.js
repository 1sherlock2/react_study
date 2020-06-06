import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "../Reducers/Messages_reducer";
import profileReducer from "../Reducers/Profile_reducer";
import newsReducer from "../Reducers/News_reducer";
import usersReducer from "../Reducers/Users_reducer";
import authReducer from "../Reducers/Auth_reducer";
import thunkMiddleWare  from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "../Reducers/App_reducer";
import {composeWithDevTools} from "redux-devtools-extension";


let reducersPack = combineReducers({
	postData: profileReducer,
	messagesData: messagesReducer,
	newsData: newsReducer,
	usersData: usersReducer,
	authData: authReducer,
	appData: appReducer,
	form: formReducer,
});


let store = createStore(reducersPack, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

export default store;

