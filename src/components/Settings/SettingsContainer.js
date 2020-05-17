import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {authRedirectComponent} from "../../HOC/AuthRedirectComponent";
import {compose} from "redux";


class SettingsContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Settings isAuth={this.props.isAuth} />
	}
}

// let withAuthRedirectComponent = authRedirectComponent(SettingsContainer)

const mapStateToProps = (state) => {
	return {

	}
};
// export default authRedirectComponent(connect(mapStateToProps,{})(SettingsContainer))

export default compose(
	(connect(mapStateToProps,{})),
	authRedirectComponent,
)(SettingsContainer)