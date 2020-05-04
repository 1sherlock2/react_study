import {combineReducers, createStore} from "redux";
import messagesReducer from "../Messages_reducer";
import profileReducer from "../Profile_reducer";
import newsReducer from "../News_reducer";

let reducersPack = combineReducers({
	postData: profileReducer,
	messagesData: messagesReducer,
	newsData: newsReducer,
});

let store = createStore(reducersPack);


export default store;

