import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'materialize-css/dist/css/materialize.css'
import MainApp from "./App";


	ReactDOM.render(<MainApp/>, document.getElementById('root'));

serviceWorker.register();
