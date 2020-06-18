const ADD_NEWS = 'ADD_NEWS';
// const TEXTAREA_CHANGES_NEWSPOSTS = "TEXTAREA_CHANGES_NEWSPOSTS";

const initialState = {
  newsPosts: [{ id: 2, newsPost: '' }],
  // currentNewsData:'',
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state,
        newsPosts: [...state.newsPosts, { id: 3, newsPost: action.newsPosts }],
        // currentNewsData: '',
      };
      // case TEXTAREA_CHANGES_NEWSPOSTS:
      // 	return {
      // 		...state,
      // 		currentNewsData: action.text,
      // 	}
    default:
      return state;
  }
};

export const addNews = (newsPosts) => ({ type: ADD_NEWS, newsPosts });
// export const textareaChangesNewsPost = (text) => ({type: TEXTAREA_CHANGES_NEWSPOSTS, text: text});

export default newsReducer;
