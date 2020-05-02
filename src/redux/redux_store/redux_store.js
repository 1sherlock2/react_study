import {combineReducers, createStore} from "redux";
import messagesReducer from "../Messages_reducer";
import profileReducer from "../Profile_reducer";

let reducersPack = combineReducers({
	postData: profileReducer,
	messagesData: messagesReducer,
});

let store = createStore(reducersPack);


export default store;

