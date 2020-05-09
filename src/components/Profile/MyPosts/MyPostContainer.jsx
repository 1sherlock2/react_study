import React from 'react';
import {addPostActionCreator, textareaChangesActionCreator} from "../../../redux/Profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

class MyPostContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	newPostElements = React.createRef();
	onTextareaChanges = () => {
		this.props.textareaChanges(this.newPostElements.current.value);
	}
	onAddPost = () => {
		this.props.addPost();
	}
	render() {
		return <MyPosts posts={this.props.post}
										newPostElements={this.newPostElements}
										currentText={this.props.currentText}
										onTextareaChanges={this.onTextareaChanges}
										onAddPost={this.onAddPost}
		/>
	}
}
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

export default connect(mapStateToProps,mapDispatchToProps)(MyPostContainer)

