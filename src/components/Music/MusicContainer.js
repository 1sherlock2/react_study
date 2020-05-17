import React from "react";
import Music from "./Music";
import {connect} from "react-redux";
import {authRedirectComponent} from "../../HOC/AuthRedirectComponent";

class MusicContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Music isAuth={this.props.isAuth} />
	}
}

// let withAuthRedirectComponent = authRedirectComponent(MusicContainer)

function mapStateToProps() {
	return {

	}
}

export default authRedirectComponent(connect(mapStateToProps,{})(MusicContainer))