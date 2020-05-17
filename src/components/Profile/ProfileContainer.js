import React from 'react';
import Profile from "./Profile";
import {profileServerThunk, setUserProfile, toggleIsFetchingLoad} from "../../redux/Profile_reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {authRedirectComponent} from "../../HOC/AuthRedirectComponent";


class ProfileContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.profileServerThunk(this.props.match.params.userId)
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile}/>
	}
}


let mapStateToProps = (state) => ({
	profile: state.postData.profile,
	isFetching: state.postData.isFetching,
})

// let withAuthRedirectComponent = authRedirectComponent(ProfileContainer);
// let urlWithRouter = withRouter(withAuthRedirectComponent)
//
let urlWithRouter = withRouter(ProfileContainer)

export default authRedirectComponent(connect(mapStateToProps, {
	setUserProfile,
	toggleIsFetchingLoad,
	profileServerThunk
})(urlWithRouter))
