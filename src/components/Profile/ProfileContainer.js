import React from 'react';
import Profile from "./Profile";
import {
	profileServerThunk, putPhotoThunk,
	setUserProfile,
	setUserStatusThunk,
	toggleIsFetchingLoad, updateUserStatusThunk
} from "../../redux/Profile_reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {authRedirectComponent} from "../../HOC/AuthRedirectComponent";
import {compose} from "redux";


class ProfileContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.userId;
		}
		this.props.profileServerThunk(userId)
		this.props.setUserStatusThunk(userId)
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatusThunk={this.props.updateUserStatusThunk}/>
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
	}),
	withRouter,
	authRedirectComponent,
)(ProfileContainer)