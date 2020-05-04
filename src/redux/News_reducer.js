const ADD_NEWS = "ADD_NEWS";
const TEXTAREA_CHANGES_NEWSPOSTS = "TEXTAREA_CHANGES_NEWSPOSTS";

let initilalState = {
	newsPosts: [],
	currentNewsData:[],
};

const newsReducer = (state = initilalState, action) => {
	switch (action.type){
		case ADD_NEWS:
		let newPosts = {
			id: 1,
			posts: state.currentNewsData,
		}
		state.newsPosts.push(newPosts);
		state.newsPost = '';
		case TEXTAREA_CHANGES_NEWSPOSTS:
		state.currentNewsData = action;
		default:
			return state;
	}
}

export const addNewsActionCreator = () => ({type:ADD_NEWS});
export const textareaChangesNewsPostActionCreator = (text) => ({type: TEXTAREA_CHANGES_NEWSPOSTS, text: text});

export default newsReducer;