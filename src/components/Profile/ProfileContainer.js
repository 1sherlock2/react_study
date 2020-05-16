import React from 'react';
import Profile from "./Profile";
import {profileServerThunk, setUserProfile, toggleIsFetchingLoad} from "../../redux/Profile_reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.profileServerThunk(this.props.match.params.userId)
  }

  render() {
    if (this.props.isAuth === false) return <Redirect to={`/login`} />
    return <Profile {...this.props} profile={this.props.profile} />
  }
}


let mapStateToProps = (state) => ({
  profile: state.postData.profile,
  isFetching: state.postData.isFetching,
  isAuth: state.authData.isAuth
})

let UrlWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile,toggleIsFetchingLoad, profileServerThunk})(UrlWithRouter)
