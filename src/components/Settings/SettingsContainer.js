import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";

class SettingsContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Settings isAuth={this.props.isAuth} />
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.authData.isAuth,
	}
}

export default connect(mapStateToProps,{})(SettingsContainer)