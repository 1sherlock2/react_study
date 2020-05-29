import React from 'react';
import {addPost} from "../../../redux/Reducers/Profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

class MyPostContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	// newPostElements = React.createRef();
	// onTextareaChanges = () => {
	// 	this.props.textareaChanges(this.newPostElements.current.value);
	// }
	// onAddPost = () => {
	// 	this.props.addPost();
	// }

	render() {
		return <MyPosts posts={this.props.posts}
										addPost={this.props.addPost}
			// newPostElements={this.newPostElements}
			// currentText={this.props.currentText}
			// onTextareaChanges={this.onTextareaChanges}
			// onAddPost={this.onAddPost}
		/>
	}
}

let mapStateToProps = (state) => {												// благодаря 'mapStateToProps' наши данные приходят обратно в презентационные компоненты после обработки и изменении данных с помощью 'dispatch
	return {
		posts: state.postData.posts,
		currentText: state.postData.currentText,
	}
};

export default connect(mapStateToProps, {addPost})(MyPostContainer)

