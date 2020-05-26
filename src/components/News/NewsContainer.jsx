import React from "react";
import {addNews} from "../../redux/News_reducer";
import {connect} from "react-redux";
import {authRedirectComponent} from "../../HOC/AuthRedirectComponent";
import {compose} from "redux";
import News from "./News";

class NewsContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	// newsElement = React.createRef();
	// onTextareaChangesNewsPost = () => {
	// 	let text = this.newsElement.current.value
	// 	this.props.textareaChangesNewsPost(text);
	// }
	// onAddNews = () => {
	// 	this.props.addNews();
	// }

	render() {
		return <News addNews={this.props.addNews}
			newsPosts={this.props.newsPosts}
			// onAddNews={this.onAddNews}
			// newsElement={this.newsElement}
			// onTextareaChangesNewsPost={this.onTextareaChangesNewsPost}
			// currentNewsData={this.props.currentNewsData}
		/>
	}
}


let mapStateToProps = (state) => {
	return {
		newsPosts: state.newsData.newsPosts,
		// currentNewsData: state.newsData.currentNewsData,
	}
}

export default compose(
	(connect(mapStateToProps, {addNews})),
	authRedirectComponent
)(NewsContainer)
