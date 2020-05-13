const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UN_FOLLOW = 'UN_FOLLOW';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
	users: [],
	pageSize: 10,
	totalCount: 0,
	currentPage: 3,
	isFetching: false,
	isFollowingProgress: [],
}

let usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {...state, users: action.users,}
		case FOLLOW:
			return {...state, users: state.users.map((el) => {
					if (el.id === action.userId) {
						return {...el, followed: true}
					}
					return el
				})
			}
		case UN_FOLLOW:
			return {...state, users: state.users.map((el) => {
					if (el.id === action.userId) {
						return {...el, followed: false}
					}
					return el
				})
			}
		case CHANGE_CURRENT_PAGE:
			return {...state, currentPage: action.page,}
		case SET_TOTAL_USERS_COUNT:
			return {...state, totalCount: action.totalCount,}
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching,}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				isFollowingProgress: action.isFollowingProgress
				? [...state.isFollowingProgress, action.userId]
				: state.isFollowingProgress.filter(id => id != action.userId)}
		default:
			return state
	}
}


export const changeCurrentPage = (page) => ({type: CHANGE_CURRENT_PAGE, page: page})	// call-back функция, которая возвращает объект, в параметрах которого мы передаем название действие, которое хотим совершить
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const Follow = (userId) => ({type: FOLLOW, userId: userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId: userId});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING,isFetching: isFetching });
export const toggleIsFollowingProgress = (isFollowingProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingProgress: isFollowingProgress, userId: userId})


export default usersReducer;