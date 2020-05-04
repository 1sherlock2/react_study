import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux_store/redux_store";
import StoreContex from "./Store_contex/Store_contex";

let rerenderEntireTree = (state) => {																																										// создаем функцию, которая в качестве параметра будет передавать наши данные
	ReactDOM.render(
		<BrowserRouter>
			<StoreContex.Provider value={store}>
			<App />
			</StoreContex.Provider>
		</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())																																										// вызываем функцию, которая в качестве параметра будет передавать наши данные из _state (через метод getState(), так как наши данные являются инкапсулируемыми (скрытыми) от внешнего воздействия

store.subscribe( () => {
	let state = store.getState();
	rerenderEntireTree(state);
});

serviceWorker.register();
