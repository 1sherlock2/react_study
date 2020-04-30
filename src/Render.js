import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, textareaChanges} from "./redux/State";

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} currentText={textareaChanges}/>
		</BrowserRouter>, document.getElementById('root'));
}



