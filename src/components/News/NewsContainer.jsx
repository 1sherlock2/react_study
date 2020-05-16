import React from "react";
import {addNews, textareaChangesNewsPost} from "../../redux/News_reducer";
import News from "./News";
import {connect} from "react-redux";


class NewsContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	 newsElement = React.createRef();
	 onTextareaChangesNewsPost = () => {
	 	let text = this.newsElement.current.value
		this.props.textareaChangesNewsPost(text);
	};
	 onAddNews = () => {
		this.props.addNews();
	}
	render() {
	 	return <News newsPosts={this.props.newsPosts}
								 newsElement={this.newsElement}
								 onTextareaChangesNewsPost={this.onTextareaChangesNewsPost}
								 onAddNews={this.onAddNews}
								 currentNewsData={this.props.currentNewsData}
								 isAuth={this.props.isAuth}
		/>
	}
}


let mapStateToProps = (state) => {
	return {
		newsPosts: state.newsData.newsPosts,
		currentNewsData: state.newsData.currentNewsData,
		isAuth: state.authData.isAuth,
	}
}

export default connect(mapStateToProps, {addNews,textareaChangesNewsPost})(NewsContainer)

