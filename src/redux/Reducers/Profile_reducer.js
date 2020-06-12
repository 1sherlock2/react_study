import {profileAPI} from "../../API/API";
import {reset, stopSubmit} from 'redux-form';

const CHANGE_PHOTO = 'CHANGE_PHOTO';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
	posts: [
		{id: 0, message: 'Hi, how are you', likeCount: 2, photo: null},
		{id: 1, message: 'I am fine thanks', likeCount: 2, photo: null},
		{id: 2, message: 'It is greate', likeCount: 2, photo: null}
	],
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
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(el => el.id !== action.postId)
			}
		case CHANGE_PHOTO:
			return {
				...state,
				profile: {...state.profile, photos: action.image}
			}
		default:
			return state;
	}
}

export const setUserProfile = (profileId) => ({type: SET_USER_PROFILE, profile: profileId});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status: status})
export const addPost = (post) => ({type: ADD_POST, post});
export const deletePost = (id) => ({type: DELETE_POST, postId: id})
export const toggleIsFetchingLoad = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const resetForm = (myPost) => (reset(myPost));
export const updateImage = (photo) => ({type: CHANGE_PHOTO, image: photo})


export const profileServerThunk = (userId) => async (dispatch) => {
	dispatch(toggleIsFetchingLoad(true));
	let response = await profileAPI.profileFromServer(userId)
	dispatch(toggleIsFetchingLoad(false));
	dispatch(setUserProfile(response.data))
}

export const setUserStatusThunk = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId)
	dispatch(setUserStatus(response.data));
}
export const updateUserStatusThunk = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setUserStatus(status));
	}
}

export const changeImageThunk = (file) => async (dispatch) => {
	let response = await profileAPI.changeImageFromServer(file)
	if (response.data.resultCode === 0) {
		dispatch(updateImage(response.data.data.photos));
	}
}
export const saveProfileInformationThunk = (formData) => async (dispatch, getState) => {
	const userId = getState().authData.userId
	const response = await profileAPI.changeProfileInformationFromServer(formData);

	if (response.data.resultCode === 0) {
		dispatch(profileServerThunk(userId))
	} else {
		dispatch(stopSubmit('profileInfo', {_error: response.data.messages[0]}))
		return Promise.reject( response.data.messages[0]);
	}
}
export default profileReducer;