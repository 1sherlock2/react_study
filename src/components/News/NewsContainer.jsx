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

	render() {
		return <News addNews={this.props.addNews}
								 newsPosts={this.props.newsPosts}/>
	}
}

let mapStateToProps = (state) => {
	return {
		newsPosts: state.newsData.newsPosts,
	}
}

export default compose(
	(connect(mapStateToProps, {addNews})),
	authRedirectComponent
)(NewsContainer)
