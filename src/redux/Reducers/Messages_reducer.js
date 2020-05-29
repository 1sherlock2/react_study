const ADD_MESSAGES = 'ADD_MESSAGES';
// const TEXTAREA_CHANGES_MESSAGES = "TEXTAREA_CHANGES_MESSAGES";

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
		// case TEXTAREA_CHANGES_MESSAGES:
		// 	return {
		// 		...state,
		// 		currentDialogsData: action.text,
		// 	}
		default:
			return state;
	}
}

export const addMessages = (message) => ({type: ADD_MESSAGES, message});

// export const textareaChangesInMessages = (text) => ({type: TEXTAREA_CHANGES_MESSAGES, text: text,});


export default messagesReducer;
