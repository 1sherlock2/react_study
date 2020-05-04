import React from 'react';
import {addPostActionCreator, textareaChangesActionCreator} from "../../../redux/Profile_reducer";
import MyPosts from "./MyPosts";
import StoreContex from "../../../Store_contex/Store_contex";

//Создаем для каждой компоненты отдельный контейнер (файл jsx) для того, чтобы в ней происходили определеные обработки
//  приходящих данных из базы данных (store). Обрабатываем наши данные через функции и прокидываем уже собранные воедино
//  функции(которые обрабатывают наши данные) в наши компоненты с отрисовкой HTML тегов.

const MyPostsContainer = () => {

	return <StoreContex.Consumer>
	{
		store => {

			let state = store.getState();

			let addPost = () => {
				store.dispatch(addPostActionCreator());
			};
			let textareaChanges = (text) => {
				let action = textareaChangesActionCreator(text);
				store.dispatch(action);
			};
			return (<MyPosts addPost={addPost} textareaChanges={textareaChanges} posts={state.postData.posts}
											 currentText={state.postData.currentText}/>
			)
		}
	}
	</StoreContex.Consumer>
}


export default MyPostsContainer;