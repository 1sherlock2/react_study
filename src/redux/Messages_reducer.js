
const ADD_MESSAGES = 'ADD_MESSAGES';
const TEXTAREA_CHANGES_MESSAGES = "TEXTAREA_CHANGES_MESSAGES";

let initialState = {
	companionsData: [
		{id: 1, name: "Sergey"},
		{id: 2, name: "Andrey"},
		{id: 3, name: "Askar"},
		{id: 4, name: "Muslim"},
		{id: 5, name: "Petr"},
	],
		dialogsData: [],
		currentDialogsData: '',
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGES:
		return {
				...state,
				dialogsData: [...state.dialogsData,{id: 5, message: state.currentDialogsData,}],
				currentDialogsData: '',
			};
		case TEXTAREA_CHANGES_MESSAGES:
			return {
				...state,
				currentDialogsData: action.body,
			}
		default:
			return state;
	}
}

export const addMessagesActionCreator = () => ({type: ADD_MESSAGES,});

export const textareaChangesInMessagesActionCreator = (text) => ({type: TEXTAREA_CHANGES_MESSAGES, body: text,});


export default messagesReducer;
