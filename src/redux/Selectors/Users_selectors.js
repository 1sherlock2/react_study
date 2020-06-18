import { createSelector } from 'reselect';

export const usersState = (state) => state.usersData.users;

export const usersStateSelector = createSelector(usersState, (users) => users.filter((el) => true));

export const pageSizeState = (state) => state.usersData.pageSize;

export const totalCountState = (state) => state.usersData.totalCount;

export const currentPageState = (state) => state.usersData.currentPage;

export const isFetchingState = (state) => state.usersData.isFetching;

export const isFollowingProgressState = (state) => state.usersData.isFollowingProgress;

export const isAuthState = (state) => state.authData.isAuth;
