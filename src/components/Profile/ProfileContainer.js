import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile, toggleIsFetchingLoad} from "../../redux/Profile_reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 7936;
    }
    this.props.toggleIsFetchingLoad(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
      this.props.toggleIsFetchingLoad(false);
      this.props.setUserProfile(response.data)
    })
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.postData.profile,
  isFetching: state.postData.isFetching,
})

let UrlWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile,toggleIsFetchingLoad})(UrlWithRouter)
