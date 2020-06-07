import React from 'react';
import {
	profileServerThunk,
	setUserProfile,
	setUserStatusThunk,
	changeImageThunk,
	toggleIsFetchingLoad, updateUserStatusThunk
} from "../../redux/Reducers/Profile_reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authRedirectComponent } from "../../HOC/AuthRedirectComponent";
import { compose } from "redux";
import Profile from './Profile';


class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.userId;
			if (!userId) {
				userId = this.props.history.push("login")
			}
		}
		this.props.profileServerThunk(userId)
		this.props.setUserStatusThunk(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}


	componentDidUpdate(prevProps, prevStatus) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}


	render() {
		return <Profile isOwnerProfile={!this.props.match.params.userId}
			{...this.props}
			changeImageThunk={this.props.changeImageThunk}
			profile={this.props.profile} status={this.props.status}
			updateUserStatusThunk={this.props.updateUserStatusThunk} />
	}
}


let mapStateToProps = (state) => ({
	profile: state.postData.profile,
	isFetching: state.postData.isFetching,
	status: state.postData.status,
	photo: state.postData.photo,
	userId: state.authData.userId,
})

export default compose(
	connect(mapStateToProps, {
		setUserProfile,
		setUserStatusThunk,
		toggleIsFetchingLoad,
		profileServerThunk,
		updateUserStatusThunk,
		changeImageThunk
	}), withRouter, authRedirectComponent,
)(ProfileContainer)