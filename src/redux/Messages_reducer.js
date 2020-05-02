
const ADD_MESSAGES = 'ADD_MESSAGES';
const TEXTAREA_CHANGES_MESSAGES = "TEXTAREA_CHANGES_MESSAGES";

const messagesReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGES:
			let newMessage = {
				id: 5,
				message: state.currentDialogsData,
			};
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
	return {
		type: TEXTAREA_CHANGES_MESSAGES,
		body: text,
	}
};


export default messagesReducer;
