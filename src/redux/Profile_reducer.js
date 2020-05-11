const ADD_POST = 'ADD-POST';
const TEXTAREA_CHANGES = 'TEXTAREA-CHANGES';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
	posts: [ ],
	currentText: 'initialStateCurrentText',
	profile: null,
	isFetching:false,
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
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		default:
			return state;
	}
}

export const addPost = () => ({type: ADD_POST});
export const textareaChanges = (text) => ({type: TEXTAREA_CHANGES, newPost: text,});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const toggleIsFetchingLoad = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching: isFetching});

export default profileReducer;