import React from 'react';
import {addPostActionCreator, textareaChangesActionCreator} from "../../../redux/Profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//Создаем для каждой компоненты отдельный контейнер (файл jsx) для того, чтобы в ней происходили определеные обработки
//  приходящих данных из базы данных (store). Обрабатываем наши данные через функции и прокидываем уже собранные воедино
//  функции(которые обрабатывают наши данные) в наши компоненты с отрисовкой HTML тегов.

// const MyPostsContainer = () => {
//
// 	return <StoreContex.Consumer>
// 	{
// 		store => {
//
// 			// let state = store.getState();
//
// 			let addPost = () => {
// 				store.dispatch(addPostActionCreator());
// 			};
// 			let textareaChanges = (text) => {
// 				let action = textareaChangesActionCreator(text);
// 				store.dispatch(action);
// 			};
// 			return (<MyPosts addPost={addPost} textareaChanges={textareaChanges} posts={store.getState().postData} />
// 											 // posts={state.postData.posts}
// 											 // currentText={state.postData.currentText}/>
// 			)
// 		}
// 	}
// 	</StoreContex.Consumer>
// }

let mapStateToProps = (state) => {
	return {
		posts: state.postData.posts,
		currentText: state.postData.currentText,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		textareaChanges: (text) => {
			let action = textareaChangesActionCreator(text);
			dispatch(action)
		},
	}
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;