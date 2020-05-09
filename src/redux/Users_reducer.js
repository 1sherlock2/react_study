const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UN_FOLLOW = 'UN_FOLLOW';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
	users: [	],
	pageSize: 5,
	totalCount: 20,
	currentPage: 3,
	isFetching: false,
}

let usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.users,
			}
		case FOLLOW:
			return {
				...state,
				users: state.users.map((el) => {
					if (el.id === action.userId) {
						return {...el, followed: true}
					}
				})
			}
		case UN_FOLLOW:
			return {
				...state,
				users: state.users.map((el) => {
					if (el.id === action.userId) {
						return {...el, followed: false}
					}
				})
			}
		case CHANGE_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.page,
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalCount: action.totalCount,
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		default:
			return state
	}
}


export const changeCurrentPageAC = (page) => ({type: CHANGE_CURRENT_PAGE, page: page})
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const FollowAC = (userId) => ({type: FOLLOW, userId: userId});
export const unFollowAC = (userId) => ({type: UN_FOLLOW, userId: userId});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING,isFetching: isFetching });

export default usersReducer;