import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {authRedirectComponent} from "../../HOC/AuthRedirectComponent";
import {compose} from "redux";
import {profileServerThunk} from "../../redux/Reducers/Profile_reducer";
import {withRouter} from "react-router-dom";


class SettingsContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.userId;
			if (!userId) {
				userId = this.props.history.push("login")
			}
		}
		this.props.profileServerThunk(userId)
	}

	render() {
		return <Settings isAuth={this.props.isAuth}
										 profile={this.props.profile}
		/>
	}
}


const mapStateToProps = (state) => ({
	profile: state.postData.profile,
	userId: state.authData.userId,
})

export default compose(
	(connect(mapStateToProps, {profileServerThunk})),
	withRouter,authRedirectComponent,
)(SettingsContainer)