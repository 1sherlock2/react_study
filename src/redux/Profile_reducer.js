
const ADD_POST = 'ADD-POST';
const TEXTAREA_CHANGES = 'TEXTAREA-CHANGES';

let initialState = {
	posts: [

	],
	currentText: '',
};

const profileReducer = (state = initialState,action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				message: state.currentText,
				likeCount: 1,
			}
			state.posts.push(newPost);
			state.currentText = '';
			return state;
		case TEXTAREA_CHANGES:
			state.currentText = action.newPost;
			return state;
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const textareaChangesActionCreator = (text) => ({type: TEXTAREA_CHANGES, newPost: text,});

export default profileReducer;