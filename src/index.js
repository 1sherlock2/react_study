import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux_store/redux_store";
import {Provider} from "react-redux";

let rerenderEntireTree = () => {																							// создаем функцию, которая в качестве параметра будет передавать наши данные
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
			<App />
			</Provider>
		</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())																					// вызываем функцию, которая в качестве параметра будет передавать наши данные из _state (через метод getState(), так как наши данные являются инкапсулируемыми (скрытыми) от внешнего воздействия
window.store = store;																													// для того, чтобы мы могли видеть наши даные в консоли

serviceWorker.register();
