import React from 'react';
import {addPost} from "../../../redux/Reducers/Profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

class MyPostContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <MyPosts posts={this.props.posts}
										addPost={this.props.addPost}
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

