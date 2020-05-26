import {profileAPI, userAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_STATUS = 'SET_USER_STATUS;'
// const TEXTAREA_CHANGES = 'TEXTAREA-CHANGES';

let initialState = {
	posts: [],
	profile: null,
	status: null,
	isFetching: false,
	// currentText: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, {id: 4, message: action.post, likeCount: 1, photo: state.profile.photos.small}],
				currentText: null,
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
		case SET_USER_STATUS:
			return {
				...state,
				status: action.status,
			}
		// case TEXTAREA_CHANGES:
		// 	return {
		// 		...state,
		// 		currentText: action.newPost,
		// 	}
		default:
			return state;
	}
}

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status: status})
export const addPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const toggleIsFetchingLoad = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
// export const textareaChanges = (text) => ({type: TEXTAREA_CHANGES, newPost: text,});

export const profileServerThunk = (userId) => {
	return (dispatch) => {
		dispatch(toggleIsFetchingLoad(true));
		userAPI.profileFromServer(userId).then(data => {
			dispatch(toggleIsFetchingLoad(false));
			dispatch(setUserProfile(data))
		})
	}
}

export const setUserStatusThunk = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then(response => {
			dispatch(setUserStatus(response.data));
		});
	}
}
export const updateUserStatusThunk = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setUserStatus(status));
			}
		});
	}
}

export default profileReducer;