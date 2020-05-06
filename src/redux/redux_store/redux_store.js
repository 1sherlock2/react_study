import {combineReducers, createStore} from "redux";
import messagesReducer from "../Messages_reducer";
import profileReducer from "../Profile_reducer";
import newsReducer from "../News_reducer";
import usersReducer from "../Users_reducer";

let reducersPack = combineReducers({
	postData: profileReducer,
	messagesData: messagesReducer,
	newsData: newsReducer,
	usersData: usersReducer,
});

let store = createStore(reducersPack);

window.store = store;

export default store;

