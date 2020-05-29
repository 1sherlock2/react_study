import {profileAPI, userAPI} from "../../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
	posts: [],
	profile: null,
	status: null,
	isFetching: false,
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
		default:
			return state;
	}
}
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status: status})
export const addPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const toggleIsFetchingLoad = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

export const profileServerThunk = (userId) => (dispatch) => {
	dispatch(toggleIsFetchingLoad(true));
	profileAPI.profileFromServer(userId).then(response => {
		dispatch(toggleIsFetchingLoad(false));
		dispatch(setUserProfile(response))
	})
}

export const setUserStatusThunk = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then(response => {
		dispatch(setUserStatus(response.data));
	});
}
export const updateUserStatusThunk = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setUserStatus(status));
		}
	});
}

export default profileReducer;