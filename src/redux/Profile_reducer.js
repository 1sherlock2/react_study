const ADD_POST = 'ADD-POST';
const TEXTAREA_CHANGES = 'TEXTAREA-CHANGES';

let initialState = {
	posts: [ ],
	currentText: 'initialStateCurrentText',
};

const profileReducer = (state = initialState,action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, {id: 4, message: state.currentText, likeCount: 1,}],
				currentText: '',
			}
		case TEXTAREA_CHANGES:
			return {
				...state,
				currentText: action.newPost,
			}
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const textareaChangesActionCreator = (text) => ({type: TEXTAREA_CHANGES, newPost: text,});

export default profileReducer;