import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import messagesReducer from '../Reducers/Messages_reducer';
import profileReducer from '../Reducers/Profile_reducer';
import newsReducer from '../Reducers/News_reducer';
import usersReducer from '../Reducers/Users_reducer';
import authReducer from '../Reducers/Auth_reducer';
import appReducer from '../Reducers/App_reducer';

const reducersPack = combineReducers({
  postData: profileReducer,
  messagesData: messagesReducer,
  newsData: newsReducer,
  usersData: usersReducer,
  authData: authReducer,
  appData: appReducer,
  form: formReducer,
});

const store = createStore(reducersPack, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

export default store;
