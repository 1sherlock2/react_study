const ADD_NEWS = "ADD_NEWS";
const TEXTAREA_CHANGES_NEWSPOSTS = "TEXTAREA_CHANGES_NEWSPOSTS";

let initialState = {
	newsPosts: [{id:2, newsPost: "what is news?" }],
	currentNewsData:'aSDASddas',
};

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEWS:
			return {
				...state,
				newsPosts: [...state.newsPosts, {id:3, newsPost: state.currentNewsData}],
				currentNewsData: '',
			}
		case TEXTAREA_CHANGES_NEWSPOSTS:
			return {
				...state,
				currentNewsData: action.text,
			}
		default:
			return state;
	}
}

export const addNews = () => ({type:ADD_NEWS});
export const textareaChangesNewsPost = (text) => ({type: TEXTAREA_CHANGES_NEWSPOSTS, text: text});

export default newsReducer;