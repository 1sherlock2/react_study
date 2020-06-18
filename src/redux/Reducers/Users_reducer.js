import { userAPI } from '../../API/API';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  pageSize: 10,
  totalCount: null,
  pageNeighbours: 5,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalCount: action.totalCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFollowingProgress
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const changeCurrentPage = (page) => ({ type: CHANGE_CURRENT_PAGE, currentPage: page });	// call-back функция, которая возвращает объект, в параметрах которого мы обозначаем те данные которые мы хотим изменить и передать в свойства значения.
export const setUsers = (users) => ({ type: SET_USERS, users });
export const Follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UN_FOLLOW, userId });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFollowingProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFollowingProgress,
  userId,
});

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
  const apiMethods = userAPI.getUsers.bind(userAPI);																		// можно и без bind, но для предотвращения возникновения ошибок привязываем наш 'action' к данному запросу из сервера
  dispatch(toggleIsFetching(true));
  dispatch(changeCurrentPage(currentPage));
  const response = await apiMethods(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
};

const similarToggleThunkFollow = async (dispatch, userId, apiMethods, actionToggleFollow) => {																// рефакторинг следующих двух thunks
  dispatch(toggleIsFollowingProgress(true, userId));
  const response = await apiMethods(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionToggleFollow(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const followThunk = (userId) => async (dispatch) => {
  await similarToggleThunkFollow(dispatch, userId, userAPI.buttonFollowPostFromServer.bind(userAPI), Follow);						// можно и без bind, но для предотвращения возникновения ошибок привязываем наш 'action' к данному запросу из сервера
};

export const unFollowThunk = (userId) => async (dispatch) => {
  await similarToggleThunkFollow(dispatch, userId, userAPI.buttonUnFollowDeleteFromServer.bind(userAPI), unFollow);
};

export default usersReducer;
