import React from "react";
import Music from "./Music";
import {connect} from "react-redux";

class MusicContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Music isAuth={this.props.isAuth} />
	}
}

const mapStateToProps =  (state) => {
	return {
		isAuth: state.authData.isAuth
	}
}

export default connect(mapStateToProps,)(MusicContainer)