import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import store from "./redux/State";

let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={store.getState()} addPost={store.addPost.bind(store)} currentText={store.textareaChanges.bind(store)}/>
		</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);

serviceWorker.register();
