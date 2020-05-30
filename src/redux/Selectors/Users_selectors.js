import {createSelector} from "reselect"


export const usersState = (state) => {
	return state.usersData.users
}

// export const usersStateSelector = (state) => {
// 	return usersState().filter(el => true)
// }

export const usersStateSelector = createSelector(usersState, (users) => {
	return users.filter( el => true)
})

export const pageSizeState = (state) => {
	return state.usersData.pageSize
}

export const totalCountState = (state) => {
	return state.usersData.totalCount
}

export const currentPageState = (state) => {
	return state.usersData.currentPage
}

export const isFetchingState = (state) => {
	return state.usersData.isFetching
}

export const isFollowingProgressState = (state) => {
	return state.usersData.isFollowingProgress
}

export const isAuthState = (state) => {
	return state.authData.isAuth
}