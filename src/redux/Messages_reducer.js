
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
		dialogsData: [
		// {id: 1, message: "first message"},
	],
		currentDialogsData: '',
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGES:
			let newMessage = {id: 5, message: state.currentDialogsData,};
			state.dialogsData.push(newMessage);
			state.currentDialogsData = '';
			return state;
		case TEXTAREA_CHANGES_MESSAGES:
			state.currentDialogsData = action.body;
			return state;
		default:
			return state;
	}
}

export const addMessagesActionCreator = () => {
	return {
		type: ADD_MESSAGES,
	}
};
export const textareaChangesInMessagesActionCreator = (text) => {
	return ({type: TEXTAREA_CHANGES_MESSAGES, body: text,});
};


export default messagesReducer;
