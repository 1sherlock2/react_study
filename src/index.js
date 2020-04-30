import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, subscribe, textareaChanges} from "./redux/State";
import state from "./redux/State";

let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} currentText={textareaChanges}/>
		</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree);

serviceWorker.register();
