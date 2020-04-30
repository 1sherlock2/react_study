import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./redux/State";
import {rerenderEntireTree} from "./Render";

rerenderEntireTree(state);


serviceWorker.register();
