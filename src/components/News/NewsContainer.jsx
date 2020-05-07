import React from "react";
import {addNewsActionCreator, textareaChangesNewsPostActionCreator} from "../../redux/News_reducer";
import News from "./News";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
	return {
		newsPosts: state.newsData.newsPosts,
		currentNewsData: state.newsData.currentNewsData,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addNews: () => {
			dispatch(addNewsActionCreator())
		},
		textareaChangesNewsPost: (text) => {
			dispatch(textareaChangesNewsPostActionCreator(text));
		}
	}
}

const NewsContainer = connect(mapStateToProps,mapDispatchToProps)(News)

export default NewsContainer;