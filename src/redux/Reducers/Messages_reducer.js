/* eslint-disable import/first */
const ADD_MESSAGES = 'ADD_MESSAGES';
import {reset} from 'redux-form';

let initialState = {
	companionsData: [
		{id: 1, name: "Sergey"},
		{id: 2, name: "Andrey"},
		{id: 3, name: "Askar"},
		{id: 4, name: "Muslim"},
		{id: 5, name: "Petr"},
	],
	dialogsData: [],
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGES:
			return {
				...state,
				dialogsData: [...state.dialogsData, {id: 5, message: action.message,}],
			}
		default:
			return state;
	}
}

export const addMessages = (message) => ({type: ADD_MESSAGES, message});
export const resetAddMessages = (message) => (reset(message))
export default messagesReducer;
