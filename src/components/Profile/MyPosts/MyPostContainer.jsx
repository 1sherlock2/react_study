import React from 'react';
import {addPostActionCreator, textareaChangesActionCreator} from "../../../redux/Profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {												// благодаря 'mapStateToProps' наши данные приходят обратно в презентационные компоненты после обработки и изменении данных с помощью 'dispatch
	return {
		posts: state.postData.posts,
		currentText: state.postData.currentText,
	}
};

let mapDispatchToProps = (dispatch) => {									// 'mapDispatchToProps' посылает данные для обработки в базу данных
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		textareaChanges: (text) => {
			dispatch(textareaChangesActionCreator(text))
		},
	}
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;