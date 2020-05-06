import React from 'react';
import {addPostActionCreator, textareaChangesActionCreator} from "../../../redux/Profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//Создаем для каждой компоненты отдельный контейнер (файл jsx) для того, чтобы в ней происходили определеные обработки
//  приходящих данных из базы данных (store). Обрабатываем наши данные через функции и прокидываем уже собранные воедино
//  функции(которые обрабатывают наши данные) в наши компоненты с отрисовкой HTML тегов.


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